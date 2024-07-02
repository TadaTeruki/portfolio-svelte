<!--card component-->

<script lang="ts" context="module">
    export class Work {
        name: string = "";
        description: string = "";
        urls: { tag: string; url: string }[] = [];
        category: string = "";
        technologies: string[] = [];
        thumbnail: string = "";
        personal: boolean = false;
    }
</script>

<script lang="ts">
    export let work: Work;
</script>

<a href={work.urls[0].url} target="_blank" class="cardlink">
    <div class="card">
        <img src={`/works/images/${work.thumbnail}`} alt={work.name} />
        <div class="text">
            <h2>{work.name}</h2>
            <div class="technologies">
                {#each work.technologies as tech}
                    <span>{tech}</span>
                {/each}
            </div>
            <p>{work.description}</p>
            <div class="links">
                {#each work.urls as url}
                    <a class="globallink" href={url.url} target="_blank"
                        >{url.tag}</a
                    >
                    {#if url !== work.urls[work.urls.length - 1]}
                        |
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</a>

<style>
    .card {
        border: 1px solid #ddd;
        background-color: inherit;
        border-radius: 1em;
        padding: 0.6em;
        margin: 0.5em;
        max-width: 16em;
        height: 25em;
        display: flex;
        flex-direction: column;
        transition:
            background-color 0.2s,
            border-color 0.2s;
    }

    .card:hover {
        background-color: #f8f8f8;
        border-color: #8cc;
    }

    .text {
        flex: 1;
        padding: 0.5em;

        display: flex;
        flex-direction: column;
    }

    img {
        width: 100%;
        aspect-ratio: 8/5;
        border-radius: 0.5em;
        object-fit: cover;
        line-height: 0.5;
    }

    h2 {
        margin: 0.1em 0;
    }

    .technologies {
        display: flex;
        gap: 0.5em;
        flex-wrap: wrap;
        font-size: 0.7em;
    }

    .technologies span {
        background-color: #f0f0f0;
        color: #333;
        border-radius: 0.5em;
        padding: 0.2em 0.5em;
    }

    .links {
        flex: 1;
        align-items: end;

        display: flex;
        gap: 0.5em;

        margin: auto;
    }

    a.cardlink {
        color: inherit;
        text-decoration: none;
    }
</style>
