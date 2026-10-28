const LEVELS = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: Infinity,
};

const DEFAULT_LEVEL = "info";

const originalConsole = {
  debug: console.debug.bind(console),
  info: console.info.bind(console),
  log: console.log.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console),
};

function normalizeLevel(value) {
  if (typeof value !== "string") {
    return null;
  }

  const level = value.trim().toLowerCase();
  return Object.hasOwn(LEVELS, level) ? level : null;
}

let currentLevel = normalizeLevel(
  typeof __LOG_LEVEL__ === "undefined" ? null : __LOG_LEVEL__,
) ?? DEFAULT_LEVEL;
let installed = false;

function isEnabled(level) {
  return LEVELS[level] >= LEVELS[currentLevel];
}

function write(level, method, args) {
  if (isEnabled(level)) {
    originalConsole[method](...args);
  }
}

const logger = {
  debug: (...args) => write("debug", "debug", args),
  info: (...args) => write("info", "info", args),
  log: (...args) => write("info", "log", args),
  warn: (...args) => write("warn", "warn", args),
  error: (...args) => write("error", "error", args),
  setLevel(value) {
    const level = normalizeLevel(value);
    if (level) {
      currentLevel = level;
    }
    return currentLevel;
  },
  getLevel() {
    return currentLevel;
  },
};

export function installConsoleFilter() {
  if (installed) {
    return;
  }

  installed = true;
  console.debug = (...args) => logger.debug(...args);
  console.info = (...args) => logger.info(...args);
  console.log = (...args) => logger.log(...args);
  console.warn = (...args) => logger.warn(...args);
  console.error = (...args) => logger.error(...args);
}

export default logger;
