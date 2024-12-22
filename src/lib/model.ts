export class Article {
    id: string = "";
    title: string = "";
    thumbnail: string = "";
    description: string = "";
    tags: string[] = [];
    body: string = "";
    created_at: string = "";
    path: string = "";
    attributions: string[] = [];
}

export function articleFromJson(json: any): Article {
    const tags = json.tags.filter((tag: string) => tag !== "");

    const attributions: string[] = [];
    const newTags = tags.filter((tag: string) => {
        if (tag.startsWith("attr-")) {
            attributions.push(tag.substring(5));
            return false;
        }
        return true;
    });

    let thumbnail = json.thumbnail;
    if (!thumbnail.startsWith("http")) {
        thumbnail = json.path + "/images/" + thumbnail;
        thumbnail = thumbnail.replace("static", "");
    }

    return {
        id: json.id,
        title: json.title,
        thumbnail,
        description: json.description,
        tags: newTags,
        body: json.body,
        created_at: json.created_at,
        attributions: attributions,
        path: json.path,
    } as Article;
}

export class Work {
    name: string = "";
    description: string = "";
    urls: { tag: string; url: string }[] = [];
    category: string = "";
    technologies: string[] = [];
    thumbnail: string = "";
    personal: boolean = false;
}
