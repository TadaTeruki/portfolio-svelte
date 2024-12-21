#!/bin/bash

# Directories
SOURCE_DIR="static/raw-images-large"
DEST_DIR="static/images-large"

# Create the destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Find and process all PNG and JPG files
find "$SOURCE_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.webp" \) | while read -r file; do
    # Extract the filename after the SOURCE_DIR without extension
    basename="${file#$SOURCE_DIR/}"
    basename="${basename%.*}"

    mkdir -p "$DEST_DIR/$(dirname $basename)"

    convert "$file" -resize 1200x "$DEST_DIR/$basename.webp"
    
    echo "Converted $file to $DEST_DIR/$basename.webp"
done

echo "All images have been processed."