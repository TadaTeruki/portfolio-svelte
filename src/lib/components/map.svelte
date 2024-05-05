<script lang="ts">
    import { onMount } from "svelte";
    import maplibre from "maplibre-gl";

    let map: maplibre.Map;

    type markerPriority = "low" | "medium" | "high";

    function markerColor(priority: markerPriority) {
        switch (priority) {
            case "low":
                return "#ddd";
            case "medium":
                return "#bdd";
            case "high":
                return "#8db";
        }
    }

    function createMarker(
        title: string,
        description: string,
        latlng: [number, number],
        priority: markerPriority,
    ) {
        const marker = new maplibre.Marker({
            color: markerColor(priority),
        })
            .setLngLat(latlng)
            .addTo(map);

        const popup = new maplibre.Popup().setLngLat(latlng).setHTML(`
                <div style="text-align: center;">
                    <div style="font-size: 1em;">${title}</div>
                    <div style="font-size: 1em; color: #888;">${description}</div>
                </div>
            `);

        marker.setPopup(popup);
    }

    onMount(() => {
        map = new maplibre.Map({
            container: "map",
            style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
            center: [138.727, 38.362],
            zoom: 3.5,
        });

        createMarker(
            "Hakodate",
            "I'm here!",
            [140.74, 41.77],
            "high",
        );
        createMarker(
            "Kyoto",
            "Lived here during<br> my teenage years",
            [135.7681, 35.0116],
            "medium",
        );
        createMarker(
            "Fukuyama / Kannabe",
            "Born here in 2002",
            [133.3667, 34.4833],
            "medium",
        );
    });
</script>

<svelte:head>
    <link
        href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
        rel="stylesheet"
    />
</svelte:head>

<div id="map"></div>
