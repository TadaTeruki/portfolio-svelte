<script lang="ts">
    import Card from "../../components/namecard.svelte";
</script>

<h1>Business Card</h1>
<Card
    name="Teruki TADA"
    subname="多田 瑛貴 / ただ てるき"
    introduction={[
        "- Student at Future University Hakodate",
        "- WebGIS / Procedural Generation",
    ]}
    image="icon.jpeg"
    hp="https://hello.peruki.dev"
    email="me@peruki.dev"
    github="TadaTeruki"
/>
