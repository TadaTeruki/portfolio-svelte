<script lang="ts">
    import Map from "$lib/components/map.svelte";
    import { headerColor } from "../store";
    headerColor.set("#f8e8ff");
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
