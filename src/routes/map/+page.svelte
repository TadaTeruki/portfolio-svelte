<script lang="ts">
    import Map from "$lib/components/map.svelte";
    import { headerColor } from "../store";
    headerColor.set("#f8e8ff");
</script>

<Map showAllMarkers={true} zoom={4.5} mapId={"fullmap"} />

<style>
    :global(#fullmap) {
        @apply w-full h-screen overflow-hidden;
    }
</style>
