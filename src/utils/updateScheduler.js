/**
 * This module provides a single-timer solution for managing automatic data updates
 * across all service components in Homer. Instead of each service component creating
 * its own setInterval timer, all components register with this centralized scheduler.
 *
 */

import logger from "@/utils/logger.js";

const TICK_INTERVAL_MS = 1000; // 1 second tick resolution
const MIN_INTERVAL_MS = TICK_INTERVAL_MS; // Minimum allowed update interval

class UpdateScheduler {
  constructor() {
    this.registeredComponents = new Map();
    this.globalTimer = null;
    this.tickCount = 0;
  }

  register(component, intervalMs, updateMethod) {
    if (!component || !updateMethod || intervalMs <= 0) {
      logger.warn("UpdateScheduler: Invalid registration parameters");
      return;
    }

    if (intervalMs < MIN_INTERVAL_MS) {
      logger.warn(
        `UpdateScheduler: Interval ${intervalMs}ms is below minimum. Adjusting to ${MIN_INTERVAL_MS}ms`,
      );
      intervalMs = MIN_INTERVAL_MS;
    }

    const intervalSeconds = Math.floor(intervalMs / 1000);
    const componentId = this.generateComponentId(component);

    if (!componentId) {
      logger.error(`UpdateScheduler: invalid component id`);
      return;
    }

    this.registeredComponents.set(componentId, {
      component,
      interval: intervalSeconds,
      method: updateMethod,
      lastUpdate: 0,
    });

    this.startGlobalTimer();
    logger.info(
      `UpdateScheduler: Registered component with ${intervalSeconds}s interval`,
    );
  }

  unregister(component) {
    const componentId = this.generateComponentId(component);
    const removed = this.registeredComponents.delete(componentId);

    if (removed) {
      logger.info("UpdateScheduler: Unregistered component");
    }

    if (this.registeredComponents.size === 0) {
      this.stopGlobalTimer();
    }
  }

  generateComponentId(component) {
    // Use component's unique identifier or Vue instance uid
    return component._uid || component.$.uid
  }

  startGlobalTimer() {
    if (!this.globalTimer) {
      this.tickCount = 0;

      this.globalTimer = setInterval(() => {
        this.tickCount++;
        this.processUpdates();
      }, TICK_INTERVAL_MS);

      logger.info("UpdateScheduler: Global timer started");
    }
  }

  stopGlobalTimer() {
    if (this.globalTimer) {
      clearInterval(this.globalTimer);
      this.globalTimer = null;
      this.tickCount = 0;
      logger.info("UpdateScheduler: Global timer stopped");
    }
  }

  processUpdates() {
    for (const [, config] of this.registeredComponents) {
      try {
        if (this.tickCount - config.lastUpdate >= config.interval) {
          config.method.call(config.component);
          config.lastUpdate = this.tickCount;
        }
      } catch (error) {
        logger.error("UpdateScheduler: Error during component update:", error);
      }
    }
  }
}

// Create and export global singleton instance
const updateScheduler = new UpdateScheduler();

// Pause updates when tab is hidden (power saving)
if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      updateScheduler.stopGlobalTimer();
    } else if (updateScheduler.registeredComponents.size > 0) {
      updateScheduler.startGlobalTimer();
    }
  });
}

export default updateScheduler;
