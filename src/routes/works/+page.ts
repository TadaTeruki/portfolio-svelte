export async function load() {
    const res = await fetch("/works.json");
    const works = await res.json().then((data) => data.works);
    const categories = Array.from(
        new Set(works.map((work: any) => work.category)),
    );
    return { works, categories };
}
