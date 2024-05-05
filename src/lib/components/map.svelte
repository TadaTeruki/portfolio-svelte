<script lang="ts">
    import { onMount } from "svelte";
    import maplibre from 'maplibre-gl';

    onMount(() => {
		const map = new maplibre.Map({
            container: 'map',
            style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
            center: [0, 0], // starting position [lng, lat]
            zoom: 1,
        });
	});
</script>

<svelte:head>
  <link
    href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
    rel="stylesheet"
  />
</svelte:head>

<div id="map"></div>