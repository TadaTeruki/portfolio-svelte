<script lang="ts">
    import Header from "$lib/components/header.svelte";
    import Map from "$lib/components/map.svelte";
    import Topimages from "$lib/components/topimages.svelte";
    import Titlebox from "../lib/components/titlebox.svelte";
</script>

<Header color="#d9ffff" />

<main>
    <div class="title-space"></div>

    <Titlebox />

    <div class="title-space"></div>

    <h2>Main Works</h2>

    <Topimages />

    <h2>About Me</h2>

    <div class="content">
        I'm a student at Future University Hakodate, majoring in complex systems
        science.
        <br />
        <br />
        I have a strong interest in programming and geography, and most of my work
        is related to these areas. My main focus is on procedural modelling of geographic
        factors such as terrain, place names and transport networks. I am fascinated
        by reproducing complex natural landscapes from simple patterns.
        <br />
        <br />
        I'm also interested in web technologies, computational geometry and desktop
        application development. I still have a lot to learn, but I'm enjoying the
        process of creating things.
        <br />
        <br />
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
        <a class="globallink" href="/contact">Contact</a> - My contact
        information<br />
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
        ><br />
        <a class="globallink" href="https://slides.peruki.dev/" target="_blank"
            >Slides</a
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
