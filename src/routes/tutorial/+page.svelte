<script>
  export let data
  const {menu} = data;
</script>

<div id="container">
  {#each Object.entries(menu) as [tutorial, tutorials]}
    <div id="card">
      <a id="title" href={`/tutorial/${tutorial}`}>{tutorial}</a>
      <div id="list">
        {#each Object.entries(tutorials) as [chapter, chapters]}
          <a href={`/tutorial/${tutorial}/${chapter}`} id="item">{chapter}</a>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  a {
    text-decoration: none;
  }
  #container {
    display: flex;
  }
  #card {
    background-color: $bg2;
    margin: 1em;
    padding: 1em;
    border-radius: 5px;
  }
  #title {
    color: $blue;
    font-size: 2em;
  }
  #list {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 10px;
  }
  #item {
    color: $orange;
  }

</style>