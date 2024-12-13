#!/bin/bash

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
  echo "ImageMagick is not installed. Please install it first."
  exit 1
fi

# Loop through all PNG and JPEG files in the current directory
for file in *.png *.jpg *.jpeg; do
  # Skip if no files match the pattern
  if [ ! -e "$file" ]; then
    continue
  fi

  # Extract the filename without extension
  filename="${file%.*}"

  # Convert the file to WEBP format, applying EXIF orientation
  magick "$file" -auto-orient "$filename.webp"

  # Check if the conversion was successful
  if [ $? -eq 0 ]; then
    echo "Converted: $file -> $filename.webp"
  else
    echo "Failed to convert: $file"
  fi

done

echo "Conversion complete!"
