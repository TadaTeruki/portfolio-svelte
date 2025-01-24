

allow_overwrite=$1

if [ -z $allow_overwrite ]; then
  read -p "Allow overwrite? (y/n, default: n): " allow_overwrite
  allow_overwrite=${allow_overwrite:-n}
fi

echo "Allow overwrite: $allow_overwrite"

find 'static/articles-src' -type d -name 'raw-images' -print | grep -v "templates/" | while read -r raw_images_dir; do
  img_dir=$(echo $raw_images_dir | sed 's/raw-images/images/')

  # resize images from raw-images to img
  mkdir -p $img_dir

  # for each images (all files)
  find $raw_images_dir -type 'f' -print | while read -r file; do
    echo "Processing $file"
    filename=$(basename $file)
    # filename without extension
    filename_no_ext=$(echo $filename | sed 's/\.[^.]*$//')
    out_file=$img_dir/$filename_no_ext.webp

    if [ -f $out_file ] && [ $allow_overwrite != "y" ]; then
      echo "File exists, skip"
      continue
    fi

    height=$(identify -format "%h" $file)
    resolution=1024
    if [ $height -le $resolution ]; then
      echo "Enough resolution, copy file"
      convert $file $out_file
      continue
    fi

    # resize image
    convert $file -resize x${resolution} $out_file
  done
done