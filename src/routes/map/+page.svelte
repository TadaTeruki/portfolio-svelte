<script>
    import Map from "$lib/components/map.svelte";
</script>

<h2>My Map</h2>

<Map
    showAllMarkers={true}
    zoom={6}
    center={[141.346, 43.064]}
    mapId={"fullmap"}
/>

<style>
    :global(#fullmap) {
        height: 75vh;
    }

    h2 {
        text-align: center;
    }
</style>
