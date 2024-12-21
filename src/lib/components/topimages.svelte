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
</script>

<div class="top-images">
    <a href="https://v2hokkaidogenerator.peruki.dev/" target="_blank">
        <img
            src="/images/top/transport.webp"
            alt="Transport"
            class="top-image"
            id="transport"
        />
    </a>
    <a href="https://roadside-explorer.peruki.dev/" target="_blank">
        <img
            src="/images/top/gis.webp"
            alt="Roadside Explorer"
            class="top-image"
            id="gis"
        />
    </a>
    <a href="https://fastlem.peruki.dev/" target="_blank">
        <img
            src="/images/top/terrain.webp"
            alt="Terrain"
            class="top-image"
            id="terrain"
        />
    </a>
    <a href="https://github.com/TadaTeruki/name-engine" target="_blank">
        <img
            src="/images/top/name.webp"
            alt="Name Engine"
            class="top-image"
            id="name"
        />
    </a>
    <a
        href="https://slides.peruki.dev/slides/2024/%E3%83%A9%E3%83%9C%E3%83%A6%E3%83%BC%E3%82%B9/%E6%88%90%E6%9E%9C%E7%99%BA%E8%A1%A8%E4%BC%9A/"
        target="_blank"
    >
        <img
            src="/images/top/wm.webp"
            alt="Window Manager"
            class="top-image"
            id="wm"
        />
    </a>
</div>

<div class="title-space">
    {#if hovered !== undefined}
        {titles[hovered]}
    {/if}
</div>

<style>
    .top-images {
        @apply flex justify-center w-full h-full m-auto p-4 overflow-hidden shadow-none transition-transform duration-500 transition-shadow duration-500;
    }

    .top-image:hover {
        @apply transform scale-105 shadow-lg;
    }

    .top-image {
        @apply w-30 h-60 object-cover;
    }

    .title-space {
        @apply flex justify-center mt-1.5 text-sm text-gray-500;
    }
</style>
