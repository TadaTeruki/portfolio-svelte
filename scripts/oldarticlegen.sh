#!/bin/bash

# 設定
JSON_FILE="archive/article-old.json"
OUTPUT_DIR="static/articles-src/old"

# jqがインストールされているか確認
if ! command -v jq &> /dev/null
then
    echo "エラー: jqがインストールされていません。インストールしてください。"
    exit 1
fi

# JSONファイルが存在するか確認
if [ ! -f "$JSON_FILE" ]; then
    echo "エラー: JSONファイルが見つかりません。パスを確認してください: $JSON_FILE"
    exit 1
fi

rm -rf "$OUTPUT_DIR"

# 各記事エントリを処理
jq -c 'to_entries[]' "$JSON_FILE" | while read -r entry; do
    # 各フィールドを抽出
    id=$(echo "$entry" | jq -r '.key')
    title=$(echo "$entry" | jq -r '.value.title')
    description=$(echo "$entry" | jq -r '.value.subtitle')
    thumbnail=$(echo "$entry" | jq -r '.value.thumbnail')
    created_at=$(echo "$entry" | jq -r '.value.created_at')
    updated_at=$(echo "$entry" | jq -r '.value.updated_at')
    body=$(echo "$entry" | jq -r '.value.body')
    
    # タグを空白区切りに変換
    tags=$(echo "$entry" | jq -r '.value.tags | join(" ")')

    tags="$tags attr-old"
  
    # 出力ディレクトリを作成
    mkdir -p "$OUTPUT_DIR/$id"

    # article.mdの内容を作成
    cat > "$OUTPUT_DIR/$id/article.md" <<EOF
---
title: "$title"
description: "$description"
thumbnail: "$thumbnail"
created_at: "$created_at"
updated_at: "$updated_at"
tags: $tags
---

$body

EOF

    echo "作成しました: $OUTPUT_DIR/$id/article.md"
done

echo "全ての記事が正常に処理されました。"