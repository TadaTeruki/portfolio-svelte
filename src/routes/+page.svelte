<script lang="ts">
    import Map from "$lib/components/map.svelte";
    import Titlebox from "../lib/components/titlebox.svelte";
</script>

<main>
    <Titlebox />

    <div class="title-space"></div>

    <h2>About Me</h2>

    <div class="content">
        I'm a hobbyist developer from western Japan, and moved to Hakodate city
        in Hokkaido for university and my interest in new places. I love maps
        and geography, and most of my work is related to them. I'm also
        interested in computer graphics and web technologies as tools for visual
        expression.
    </div>

    <Map mapId="map" />

    <h2>Site Map</h2>
    <div class="content">
        <a class="globallink" href="/">Home</a> - About me and this site<br />
        <a class="globallink" href="/profile">Profile</a> - My profile<br />
        <a class="globallink" href="/works">Works</a> - My technical works and
        projects<br />
        <a class="globallink" href="/skills">Skills</a> - My skills<br />
        <a class="globallink" href="/map">Map</a> - Visualisation of places I've
        ever visited<br />
        <a class="globallink" href="/contact">Contact</a> - How to contact me<br
        />
    </div>

    <h2>External Links</h2>
    <div class="content">
        <a
            class="globallink"
            href="https://github.com/TadaTeruki"
            target="_blank">GitHub</a
        ><br />
        <a class="globallink" href="https://zenn.dev/peruki" target="_blank"
            >Zenn</a
        >
    </div>
</main>

<style>
    .title-space {
        height: 1.5em;
    }

    :global(#map) {
        margin-top: 1em;
        height: 30em;
    }
</style>
