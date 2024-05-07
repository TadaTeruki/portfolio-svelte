<script lang="ts">
    import Map from "$lib/components/map.svelte";
    import Titlebox from "../lib/components/titlebox.svelte";
</script>

<main>
    <Titlebox />

    <div class="title-space"></div>

    <h2>About Me</h2>

    <div class="content">
        My name is Teruki TADA. I'm a hobbyist developer from western Japan, and
        moved to Hakodate city in Hokkaido for university and my interest in new
        places. I love maps and geography, and most of my work is related to
        them. I'm also interested in WebGIS and web technologies as tools for
        visual expression.

        <br /><br />

        My goal is to create a detailed and realistic world map generator, and
        visualise its result in a web browser as WebGIS. For this purpose, I'm
        studying Computer Science at university, and developing procedural
        generation tools for geographic features as Rust libraries such as
        <a
            class="globallink"
            href="https://github.com/TadaTeruki/fastlem"
            target="_blank">terrain</a
        >,
        <a
            class="globallink"
            href="https://github.com/TadaTeruki/street-engine"
            target="_blank"
        >
            transportation networks
        </a>
        and
        <a
            class="globallink"
            href="https://github.com/TadaTeruki/name-engine"
            target="_blank"
        >
            place names
        </a>.

        <Map mapId="map" />
    </div>

    <h2>Links</h2>
    <div class="content">
        <a class="globallink" href="/">Home</a> - About me and this site<br />
        <a class="globallink" href="/profile">Profile</a> - My profile<br />
        <a class="globallink" href="/works">Works</a> - My technical works and
        projects<br />
        <a class="globallink" href="/skills">Skills</a> - My skills<br />
        <a class="globallink" href="/map">Map</a> - Visualisation of places I've
        visited<br />
        <a class="globallink" href="/card">Card</a> - My business card<br />
        <a class="globallink" href="/contact">Contact</a> - How to contact me<br
        />
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
