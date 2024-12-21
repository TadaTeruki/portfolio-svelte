<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import Map from "$lib/components/map.svelte";
    import Topnavigator from "$lib/components/topnavigator.svelte";
</script>

<div class="absolute top-0 z-10 w-screen">
    <Topnavigator />
    <div class="py-5 text-center">
        <h1>My Map</h1>
        <div class="text-xs">Places I've visited</div>
    </div>
</div>

<div class="absolute bottom-0 z-10 w-screen">
    <Footer />
    aa
</div>

<Map showAllMarkers={true} zoom={4.5} mapId={"fullmap"} />

<style>
    :global(#fullmap) {
        @apply w-full h-screen overflow-hidden;
    }
</style>
