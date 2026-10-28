#!/bin/sh

# Default assets & example configuration installation
if [[ "${INIT_ASSETS}" == "1" ]] && [[ ! -f "/www/assets/config.yml" ]]; then
    echo "No configuration found, installing default config & assets"
    if [[ -w "/www/assets/" ]]; 
    then
        while true; do echo n; done | cp -Ri /www/default-assets/* /www/assets/
        yes n | cp -i /www/default-assets/config.yml.dist /www/assets/config.yml
    else
        echo "Assets directory not writable, skipping default config install.";
        echo "Check assets directory permissions & docker user or skip default assets install by setting the INIT_ASSETS env var to 0."
    fi
fi

# Optional runtime log level, consumed by the frontend (log-level.js)
log_level="$(printf '%s' "${LOG_LEVEL:-}" | tr '[:upper:]' '[:lower:]')"
case "${log_level}" in
    ""|debug|info|warn|error|silent) ;;
    *)
        echo "Invalid LOG_LEVEL '${LOG_LEVEL}', expected debug, info, warn, error or silent. Ignoring."
        log_level=""
        ;;
esac

if ! printf 'window.__LOG_LEVEL__ = "%s";\n' "${log_level}" > /www/log-level.js 2>/dev/null; then
    echo "Could not write /www/log-level.js, runtime LOG_LEVEL will be ignored."
fi

echo "Starting webserver"
exec 3>&1
exec lighttpd -D -f /lighttpd.conf
