import type { Article } from "$lib/model";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch("/routes-article.json");
    const articles = await res.json().then((data) =>
        data.map((art: any) => {
            return {
                id: art.id,
                title: art.title,
                thumbnail: art.thumbnail,
                description: art.description,
                tags: art.tags.filter((tag: string) => tag !== ""),
                is_public: art.is_public,
                body: art.body,
                created_at: art.created_at,
                updated_at: art.updated_at,
                path: art.path,
            } as Article;
        }),
    );
    return { articles };
};