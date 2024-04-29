<script>
  import { page } from '$app/stores';
  export let data;
  let thisTutorial = data.menu[$page.params.tutorial];
</script>

<div id="container">
  {#each Object.entries(thisTutorial) as [chapter, units]}
  <h1>{chapter}</h1>
  {#each Object.entries(units) as [unit, link]}
  <div>
    <a href={link}>{unit}</a>
  </div>
  {/each}
  {/each}
</div>

<style lang="scss">
  a {
    color: $blue;
    text-decoration: none;
  }
  #container {
    margin: 2em;
  }
</style>