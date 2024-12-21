export class Article {
    id: string = "";
    title: string = "";
    thumbnail: string = "";
    description: string = "";
    tags: string[] = [];
    is_public: boolean = false;
    body: string = "";
    created_at: string = "";
    updated_at: string = "";
    path: string = "";
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
