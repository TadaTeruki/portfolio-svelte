for file in $(find static/articles-src -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.webp" \)); do
    basename="${file%.*}"
    basename="${basename/raw-images/images}"

    mkdir -p "$(dirname "$basename")"

    convert "$file" -resize 1000x "$basename.webp"
    echo "Converted $file to $basename.webp"
done