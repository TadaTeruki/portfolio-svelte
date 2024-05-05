<script lang="ts">
    import Card from "../components/namecard.svelte";
    import Header from "../components/header.svelte";
</script>

<header>
    <Header title="Teruki TADA's Webpage" />
</header>

<main>
    <div class="cardspace">
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
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap");

    :global(body) {
        font-family: "Zen Kaku Gothic New", sans-serif;
        margin: 0;
    }

    main {
        padding: 5em;
        margin: 0 auto;
        max-width: 80em;
    }

    .cardspace {
        display: flex;
        justify-content: center;
    }
</style>
