#!/bin/bash

# Base directory
BASE_DIR="/Users/mac/Documents/vite-kwiaciarniamilosc/kwiaciarnia-milosc/src/assets/images"

# Reviewer images
cd "$BASE_DIR/reviewer"
for i in Reviewer*.png; do
  mv "$i" "reviewer-${i##Reviewer}.png"
done

# Gallery images
cd "$BASE_DIR/gallery"
counter=1
for img in *.{jpg,JPG,JPEG,jpeg,png}; do
  [[ -f "$img" ]] || continue
  ext="${img##*.}"
  mv "$img" "gallery-${counter}.${ext,,}"
  ((counter++))
done

# Logo images
cd "$BASE_DIR/logo"
mv "logo (2).png" "logo-dark.png"
mv "favicon.png" "favicon.ico"

# Hero images
cd "$BASE_DIR/hero"
mv "hero-bg-1920-1080.jpeg" "hero-main.jpeg"
mv "hero-image2.jpg" "hero-mobile.jpg"

# Remove .DS_Store files
find "$BASE_DIR" -name ".DS_Store" -delete