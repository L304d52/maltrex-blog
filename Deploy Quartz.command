#!/bin/bash
cd "$(dirname "$0")"
./deploy_main.sh
read -n 1 -s -r -p "Done. Press any key to close..."
