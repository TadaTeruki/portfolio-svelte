<script lang="ts">
    import { onMount } from "svelte";

    let hovered: string | undefined = undefined;

    const images = ["gis", "transport", "terrain", "name", "wm"];
    const titles: { [key: string]: string } = {
        gis: "Roadside Explorer (2023)",
        transport: "Hokkaido Generator (2024)",
        terrain: "fastlem (2024)",
        name: "name-engine (2024)",
        wm: "clear-wm (2024)",
        undefined: "",
    };

    const imageElements = () =>
        images
            .map((image) => document.getElementById(image))
            .filter((image) => image !== null);

    onMount(() => {
        imageElements().forEach((image) => {
            image.addEventListener("mouseover", () => {
                hovered = image.id;
            });

            image.addEventListener("mouseout", () => {
                hovered = "undefined";
            });
        });
    });

    $: if (hovered !== undefined) {
        imageElements()
            .filter((image) => image !== null && image.id !== hovered)
            .forEach((image) => {
                image.style.transform = "scale(1)";
                image.style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0)";
                image.style.opacity = "0.8";
                image.style.transition = "0.2s";
            });
        const image = document.getElementById(hovered);
        if (image !== null) {
            image.style.transform = "scale(1.025)";
            image.style.boxShadow = "0 0 0.2em 0.2em rgba(0, 0, 0, 0.05)";
            image.style.opacity = "1";
            image.style.transition = "0.2s";
        }
    }
</script>

<div class="top-images">
    <a href="https://v2hokkaidogenerator.peruki.dev/" target="_blank">
        <img
            src="/top/transport.png"
            alt="Transport"
            class="top-image"
            id="transport"
        />
    </a>
    <a href="https://roadside-explorer.peruki.dev/" target="_blank">
        <img src="/top/gis.jpg" alt="GIS" class="top-image" id="gis" />
    </a>
    <a href="https://fastlem.peruki.dev/" target="_blank">
        <img
            src="/top/terrain.png"
            alt="Terrain"
            class="top-image"
            id="terrain"
        />
    </a>
    <a href="https://github.com/TadaTeruki/name-engine" target="_blank">
        <img
            src="/top/name.png"
            alt="Name Engine"
            class="top-image"
            id="name"
        />
    </a>
    <a
        href="https://slides.peruki.dev/slides/2024/%E3%83%A9%E3%83%9C%E3%83%A6%E3%83%BC%E3%82%B9/%E6%88%90%E6%9E%9C%E7%99%BA%E8%A1%A8%E4%BC%9A/"
        target="_blank"
    >
        <img src="/top/wm.png" alt="Window Manager" class="top-image" id="wm" />
    </a>
</div>

<div class="title-space">
    {#if hovered !== undefined}
        {titles[hovered]}
    {/if}
</div>

<style>
    .top-images {
        display: flex;
        justify-content: center;
        max-width: 100%;
        width: fit-content;
        height: 15em;
        margin: auto;
        border-radius: 0.5em;
        overflow: hidden;
    }

    .top-image {
        width: 9em;
        height: 100%;
        object-fit: cover;
    }

    .top-image:hover {
        transform: scale(1.025);
        transition: transform 0.2s;
    }

    .title-space {
        display: flex;
        justify-content: center;
        margin-top: 0.2em;
        height: 1.5em;
        font-size: 0.8em;
        color: #aaa;
    }
</style>
