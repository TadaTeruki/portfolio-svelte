<!--card component-->

<script lang="ts">
    export let name: string;
    export let subname: string;
    export let introduction: string[];
    export let hp: string;
    export let github: string;
    export let email: string;
    export let image: string;
</script>

<div class="card">
    <div class="text">
        <div class="name">{name}</div>
        <div class="subname">{subname}</div>
        <div>
            {#each introduction as intro}
                {intro}<br />
            {/each}
        </div>
        <div class="table">
            <div>
                HP<br />
                GitHub<br />
                Email
            </div>
            <div>
                <a href={hp}>{hp}</a><br />
                <a href={"https://github.com/" + github}>{github}</a><br />
                {email}
            </div>
        </div>
    </div>
    <img src={image} alt={name} />
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

    img {
        padding: 1em;
        width: 35%;
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
        font-weight: bold;
    }

    .subname {
        font-size: 1em;
    }
</style>
