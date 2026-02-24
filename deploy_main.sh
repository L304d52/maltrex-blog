#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
PUBLIC_DIR="/Users/maltrex/Documents/obsidian_vault/Blog/Public"
rm -rf content
mkdir -p content
rsync -a --delete "$PUBLIC_DIR"/ content/
if [ ! -f content/index.md ]; then
  cat > content/index.md <<'MD'
---
title: Home
---
# Welcome

This is your Quartz site. Put notes in **Public/** to publish them.
MD
fi
git add -A
git commit -m "Update notes: $(date -u +'%Y-%m-%d %H:%M:%S UTC')" || true
git push origin main
