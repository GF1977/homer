#!/bin/sh

access_log="$(printf '%s' "${ACCESS_LOG:-1}" | tr '[:upper:]' '[:lower:]')"
case "${access_log}" in
    0|false|no|off)
        echo 'accesslog.filename = ""'
        ;;
    *)
        echo 'accesslog.filename = "/dev/fd/3"'
        ;;
esac
