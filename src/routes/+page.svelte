<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
    import Titlebox from "../lib/components/titlebox.svelte";
    import { headerColor } from "./store";
    headerColor.set("#d9ffff");
</script>

<Header backMotif="hakodate">
    <Titlebox />
</Header>

<main>
    <h2>Contents</h2>
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

<Footer />

<style>
    .title-space {
        @apply h-6;
    }
    :global(#map) {
        @apply mt-4 h-96;
    }

    a.globallink {
        @apply text-linkColor no-underline;
    }

    a.globallink:hover {
        @apply text-linkColorHover;
    }
</style>
