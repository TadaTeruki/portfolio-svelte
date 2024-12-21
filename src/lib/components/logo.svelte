<script lang="ts">
    export let template: string = "";
    export let size: string = "6";
</script>

<div class="inline-block">
    {#if template === "x"}
        <img
            src="logos/x.svg"
            alt="x logo"
            class="w-5 h-5 object-cover brightness-0"
        />
    {:else if template === "github"}
        <img
            src="logos/github.svg"
            alt="github logo"
            class="w-5 h-5 object-cover"
        />
    {:else if template === "slide"}
        <div class="w-5 h-5 object-cover i-mdi-presentation" />
    {/if}
</div>
