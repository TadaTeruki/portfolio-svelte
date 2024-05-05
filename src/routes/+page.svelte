<script>
    import Titlebox from "../components/titlebox.svelte";
</script>

<Titlebox />

<div class="title-space"></div>

<h2>About Me</h2>

<div class="content">
    I am a hobbyist developer from western Japan, 
    and moved to Hakodate for university and my interest in other places.
    I love maps and geography, and most of my work is related to them, 
    such as procedural generation of geographic features. 
    I am also interested in WebGIS and web development as tools for expression. 
</div>

<h2>Educations</h2>

<div class="content">
    <ul>
        <li>
            Department of Complex Intelligent Systems, Future University
            Hakodate<br />
            <span class="attribution">Apr. 2022 - Present</span><br />
        </li>
        <li>
            Kyoto Prefectural Seimei High School<br />
            <span class="attribution">Apr. 2018 - Mar. 2022</span><br />
        </li>
    </ul>
</div>

<h2>Work Experiences</h2>

<div class="content">
    <ul>
        <li>
            MIERUNE Inc. as a freelance developer
            <span class="attribution">Feb. 2024 - Present</span><br />
        </li>
        <li>
            Internship at MIERUNE Inc.
            <span class="attribution">Sep. 2023</span>
        </li>
        <li>
            Online Spring Internship for Gophers 2022 at Mercari, Inc.
            <span class="attribution">Mar. 2022</span><br />
        </li>
    </ul>
</div>

<h2>Skills and Interests</h2>
<div class="content">
    Frontend Web Development<br />
    <ul>
        <li>JS / TS</li>
        <li>React / Svelte</li>
        <li>Mapbox GL JS</li>
    </ul>

    Backend Web Development<br />
    <ul>
        <li>Go - Gin / Echo</li>
        <li>Hono.js</li>
    </ul>

    Procedural Generation<br />
    <ul>
        <li>Rust</li>
    </ul>

    Linux GUI Development<br />
    <ul>
        <li>Gtk</li>
        <li>X11 - Xlib / XCB / x11rb</li>
    </ul>

    Other Skills<br />
    <ul>
        <li>Python</li>

    </ul>
</div>


<style>
    .title-space {
        height: 1.5em;
    }

    .content {
        padding-left: 1em;
        padding-bottom: 2em;
        line-height: 1.5;
    }

    .attribution {
        color: #888;
    }

    .content ul {
        list-style-type: square;
    }
</style>
