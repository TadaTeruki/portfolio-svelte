#!/bin/sh

output_path="static"
output_file="${output_path}/routes-article"

mkdir -p $output_path

# init files
> "$output_file.json"

echo "[" >> "$output_file.json"

first=true
find static/articles-src -name '*.md' -print | while read -r file; do
  path=$(dirname $file)
  echo "Processing $file"
  target_entries=("id" "title" "description" "created_at" "updated_at" "tags" "thumbnail")
  entries=()

  for tag in "${target_entries[@]}"; do
    line=$(grep -i -m 1 "^${tag}:" $file)
    value=$(echo $line | cut -d ':' -f 2- | sed 's/^[[:space:]]*//' | sed 's/\"//g')

    if [ "$tag" = "title" ]; then
      value=$(echo $value | sed 's/ /-/g' | sed 's/\//-/g')
    fi

    if [ "$tag" = "tags" ]; then
        value="[\"$(echo $value | sed 's/ /", "/g')\"]"
    else
        value="\"$value\""
    fi

    entries+=("\"$tag\":$value")

  done

  entries+=("\"path\":\"$path\"")
 
  entries_str=$(IFS=,; echo "${entries[*]}")

  if [ "$first" = "true" ]; then
    first=false
  else
    echo "," >> "$output_file.json"
  fi
  echo "{$entries_str}" >> "$output_file.json"
done

echo "]" >> "$output_file.json"

echo "Finished."

