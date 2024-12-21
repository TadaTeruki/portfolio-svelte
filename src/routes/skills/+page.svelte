<script>
    import Header from "$lib/components/header.svelte";
    import { headerColor } from "../store";
    headerColor.set("#ffe8f4");
</script>

<Header backMotif="asahikawa">
    <h1>Skills</h1>
</Header>

<main>
    <h2>Overview</h2>
    <div class="content">
        <div>Major Programming Languages</div>
        <ul>
            <li>Rust</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Go</li>
        </ul>

        <div>Development Environment</div>
        <ul>
            <li>Linux - Debian (Previous: Arch Linux, Ubuntu, WSL2)</li>
            <li>DE - Xfce (Previous: GNOME, sway)</li>
        </ul>
    </div>

    <h2>Technical Skills / Interests</h2>

    <div class="content">
        <h3>As Hobby</h3>
        <div>Procedural Modeling</div>
        <ul>
            <li>
                Terrain Generation with Landscape Evolution Model<br />
                -
                <a
                    href="
                https://fastlem.peruki.dev"
                    target="_blank"
                    class="globallink">fastlem</a
                >
            </li>

            <li>
                Place Names with Markov Chain<br />
                -
                <a
                    href="
                https://github.com/TadaTeruki/name-engine"
                    target="_blank"
                    class="globallink">name-engine</a
                >
            </li>
            <li>
                Cities (transport networks) with L-System<br />
                -
                <a
                    href="
                https://github.com/TadaTeruki/street-engine"
                    target="_blank"
                    class="globallink">street-engine (wip)</a
                >
            </li>
        </ul>

        <div>Desktop GUI Development</div>
        <ul>
            <li>
                GTK3/4<br />
                -
                <a
                    href="https://github.con/TadaTeruki/pdock"
                    target="_blank"
                    class="globallink">pdock</a
                >
            </li>
            <li>
                X11 - Xlib / XCB / x11rb<br />
                -
                <a
                    href="https://github.con/TadaTeruki/clear_wm"
                    target="_blank"
                    class="globallink">clear_wm</a
                >
            </li>
        </ul>

        <div>Algorithm / Data Structure</div>
        <ul>
            <li>
                Computational Geometry<br />
                - Natural Neighbor Interpolation for Rust (<a
                    href="
                https://github.com/TadaTeruki/naturalneighbor
            "
                    target="_blank"
                    class="globallink">GitHub</a
                >)<br />
                - DBSCAN for turf.js (<a
                    href="
                https://github.com/Turfjs/turf/commit/407619baaedad0f426ae7ed37e33051ddf14a830
            "
                    target="_blank"
                    class="globallink">Commit History</a
                >)
            </li>
            <li>
                Noise Algorithms<br />
                - Perlin Noise for Go (<a
                    href="
                https://github.com/TadaTeruki/NoiseGo"
                    target="_blank"
                    class="globallink">GitHub</a
                >)
            </li>
        </ul>
    </div>

    <div class="content">
        <h3>Both Work and Hobby</h3>
        <div>Frontend Web Development</div>
        <ul>
            <li>React / Svelte</li>
            <li>Next.js / Sveltekit</li>
            <li>Tailwind CSS / UnoCSS</li>
            <li>Maplibre GL JS</li>
            <li>WebAssembly (Rust / Go)</li>
        </ul>

        <div>Backend Web Development</div>
        <ul>
            <li>Go - Gin / Echo</li>
            <li>Rust - Axum</li>
        </ul>

        <div>Others</div>
        <ul>
            <li>QGIS</li>
            <li>Open Source Culture</li>
            <li>Line Bot</li>
            <li>
                Misskey bot<br />
                - Fake tweeter bot (like my tweets) for Misskey, with fine-tuned
                models OpenAI API (<a
                    href="
                    https://misskey.peruki.dev/@bot
                "
                    target="_blank"
                    class="globallink">Link</a
                >)
            </li>
        </ul>
    </div>
</main>
