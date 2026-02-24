#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

PUBLIC_DIR="/Users/maltrex/Documents/obsidian_vault/Blog/Public"
ATTACHMENTS_DIR="/Users/maltrex/Documents/obsidian_vault/Assets/Attachments"

rm -rf content
mkdir -p content

rsync -a --delete "$PUBLIC_DIR"/ content/

# Copia apenas imagens referenciadas nos arquivos de Public
mkdir -p content/Assets/Attachments

grep -rh '!\[\[' "$PUBLIC_DIR" \
  | sed -n 's/.*!\[\[\(.*\)\]\].*/\1/p' > /tmp/imgs.txt

while read -r img; do
  src="$ATTACHMENTS_DIR/$img"
  if [ -f "$src" ]; then
    cp "$src" "content/Assets/Attachments/$img"
    echo "Copied: $img"
  else
    echo "Not found: $img"
  fi
done < /tmp/imgs.txt

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
