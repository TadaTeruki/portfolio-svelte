<script lang="ts">
    import Card from "../components/namecard.svelte";
</script>

<header>Teruki TADA's Webpage</header>

<main>
    <Card
        name="Teruki TADA"
        subname="多田 瑛貴 / ただ てるき"
        introduction={[
            "- Student at Future University Hakodate",
            "- WebGIS / Procedural Generation",
        ]}
        image="icon.jpeg"
        hp="https://hello.peruki.dev"
        email="contact@peruki.dev"
        github="TadaTeruki"
    />
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap");

    :global(body) {
        font-family: "Zen Kaku Gothic New", sans-serif;
        margin: 0;
    }

    header {
        background-color: #333;
        color: white;
        padding: 1em;
    }

    main {
        padding: 5em;
        margin: 0 auto;
        max-width: 80em;
    }
</style>
