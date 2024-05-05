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
        {intro}<br>
      {/each}
    </div>
    <div class="table">
      <div>
        HP<br>
        Email<br>
        GitHub
      </div>
      <div>
        {hp}<br>
        {email}<br>
        {github}
      </div>
    </div>
  </div>
  <img src={image} alt={name} />
</div>

<style>
  .card {
    border-style: solid;
    border-width: 1em 1px 1em 1px;
    border-color: #ccc;
    border-radius: 4px;
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
    flex:1;
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
    width: 40%;
    border-radius: 4px;
  }

  .name {
    font-size: 2.0em;
    font-weight: bold;
  }

  .subname {
    font-size: 1.0em;
  }
</style>

