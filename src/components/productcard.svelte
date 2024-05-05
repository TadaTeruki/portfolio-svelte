<!--card component-->

<script>
export let title;
export let subtitle;
export let image;
</script>

<div class="card">
  <img src={image} alt={title} />
  <h2>{title}</h2>
  <p>{subtitle}</p>
</div>

<style>
  .card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1em;
    margin: 1em;
    max-width: 20em;
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  h2 {
    margin: 0.5em 0;
  }
</style>

