import { articleFromJson } from "$lib/model";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
    const { slug } = params;

    const res = await fetch("/routes-article.json");
    const articles = await res.json().then((data) =>
        data
            .filter((art: any) => {
                return art.id === slug;
            })
            .map((art: any) => {
                return articleFromJson(art);
            }),
    );

    if (articles.length === 0) {
        return { status: 404 };
    }

    const article = articles[0];
    const path = article.path;
    // remove the 'static/' from the path
    article.path = path.substring(15);

    let body = await fetch(`/articles${article.path}/article.md`).then((res) =>
        res.text(),
    );

    /* remove all rows from the first to the second '---' */
    const start = body.indexOf("---");
    const end = body.indexOf("---", start + 3);
    body = body.substring(end + 3);

    return { article: { ...article, body } };
};
