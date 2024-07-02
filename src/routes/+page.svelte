<script lang="ts">
    import Map from "$lib/components/map.svelte";
    import Titlebox from "../lib/components/titlebox.svelte";
</script>

<main>
    <Titlebox />

    <div class="title-space"></div>

    <h2>About Me</h2>

    <div class="content">
        I'm a student at Future University Hakodate, majoring in complex systems
        science. And I'm also a hobbyist/freelance developer mainly for
        procedural modeling, geospatial processing, and web development.
        <br />
        <br />
        I have a strong interest in programming and geography, and most of my work
        is related to these fields. My main focus is on procedural modeling of geographic
        factors such as terrain, place names, and transportation networks. The approach
        of reproducing complex natural landscapes from simple patterns is wonderful
        to me.
        <br />
        <br />
        I'm also interested in web technologies, computational geometry, and desktop
        application development. I have a lot to learn, but I'm enjoying the process
        of creating things.
        <br />
        <Map mapId="map" />
    </div>

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
        ><br />
        <a
            class="globallink"
            href="https://www.reddit.com/user/perukifn/"
            target="_blank">Reddit</a
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
