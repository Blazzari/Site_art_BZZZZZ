#!/bin/zsh -l
set -e
cd "$(dirname "$0")"
exec pnpm dev
