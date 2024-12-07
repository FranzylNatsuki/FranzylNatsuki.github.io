#!/bin/bash

# Set input and output folders
INPUT_FOLDER="./"
OUTPUT_FOLDER="./webp"

# Check if input folder exists
if [ ! -d "$INPUT_FOLDER" ]; then
  echo "Input folder '$INPUT_FOLDER' not found."
  exit 1
fi

# Convert PNG to WebP
for file in "$INPUT_FOLDER"/*.png; do
  filename=$(basename "$file")
  filename_no_ext="${filename%.png}"
  output_file="$OUTPUT_FOLDER/${filename_no_ext}_converted.webp"

  convert "$file" -quality 80 "$output_file"

  echo "Converted '$filename' to '$output_file'"
done
