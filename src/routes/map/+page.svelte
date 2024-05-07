<script lang="ts">
    import Map from "$lib/components/map.svelte";
</script>

<h2>My Map</h2>

<Map showAllMarkers={true} zoom={4.5} mapId={"fullmap"} />

<style>
    :global(#fullmap) {
        height: 70vh;
    }

    h2 {
        text-align: center;
    }
</style>
