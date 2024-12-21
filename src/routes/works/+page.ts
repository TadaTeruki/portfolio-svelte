import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch("/works.json");
    const works = await res.json().then((data) => data.works);
    const categories = Array.from(
        new Set(works.map((work: any) => work.category)),
    );
    return { works, categories };
};
