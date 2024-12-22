import { articleFromJson } from "$lib/model";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch("/routes-article.json");
    const articles = await res.json().then((data) =>
        data.map((art: any) => {
            return articleFromJson(art);
        }),
    );
    return { articles };
};
