<!--card component-->

<div class="card">
    <div class="text">
        <div class="name">Teruki TADA</div>
        <div class="subname">多田 瑛貴 / ただ てるき</div>
        <div>
            - Student at Future University Hakodate<br />
            - WebGIS / Procedural Generation
        </div>
        <div class="table">
            <div>
                HP<br />
                GitHub<br />
                Email
            </div>
            <div>
                <a href="https://hello.peruki.dev">hello.peruki.dev</a><br />
                <a href="https://github.com/TadaTeruki">TadaTeruki</a><br />
                me@peruki.dev
            </div>
            <img src="QR.png" alt="qrcode" />
        </div>
    </div>
    <div class="image">
        <img src="icon.jpeg" alt="icon" />
    </div>
</div>

<style>
    .card {
        border-style: solid;
        background-color: #fff;
        border-width: 1em 0.05em 1em 0.05em;
        border-color: #dee;
        border-radius: 0.5em;
        box-sizing: border-box;

        max-width: 40em;
        aspect-ratio: 91/55;
        display: flex;
        align-items: center;
        line-height: 1.8;
    }

    .text {
        padding: 2em;
        white-space: nowrap;
        flex: 1;
    }

    .table {
        display: flex;
        justify-content: left;
        line-height: 1.5;
        gap: 1em;
        margin-top: 1em;
    }
    .table img {
        width: 5em;
        margin: auto;
    }

    .image img {
        padding: 1em;
        width: 80%;
        border-radius: 4px;
    }

    a {
        text-decoration: none;
        color: #477;
    }

    a:hover {
        color: #6aa;
    }

    .name {
        font-size: 2em;
    }

    .subname {
        font-size: 1em;
    }
</style>
