<script lang="ts">
    import { onMount } from "svelte";
    import maplibre from "maplibre-gl";
    import { isDark } from "$lib/dark";

    export let showAllMarkers = false;
    export let zoom = 3.5;
    export let center = [138.727, 38.362];
    export let mapId;

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
                    <div style="font-size: 1em; color: #333;">${title}</div>
                    <div style="font-size: 1em; color: #888;">${description}</div>
                </div>
            `);

        marker.setPopup(popup);
    }

    onMount(() => {
        let style =
            "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
        if (isDark()) {
            style =
                "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
        }

        map = new maplibre.Map({
            container: mapId,
            style: style,
            center: [center[0], center[1]],
            zoom: zoom,
        });

        // create markers from JSON markers.json
        fetch("markers.json")
            .then((response) => response.json())
            .then((data) => {
                data.markers.forEach((marker: any) => {
                    if (!showAllMarkers && marker.priority === "low") {
                        return;
                    }
                    createMarker(
                        marker.name,
                        marker.description,
                        marker.coordinates,
                        marker.priority,
                    );
                });
            });
    });
</script>

<svelte:head>
    <link
        href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css"
        rel="stylesheet"
    />
</svelte:head>

<div id={mapId} />
