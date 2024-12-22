import { redirect } from "@sveltejs/kit";

export function load({ params }: any) {
    redirect(308, `/blogs/articles/${params.slug}`);
}
