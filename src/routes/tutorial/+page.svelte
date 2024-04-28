<script>
  export let data
</script>

{#each data.tutorials as tutorial}
<p>
  <a href={tutorial}>{tutorial}</a>
</p>
{/each}

<!-- <div class="container">
  {#each data.menu as item}
    <div class="card">
      <a href={item.sub[0].sub[0].path}>{item.name}</a>
      <ul class="list">
        {#each item.sub as cool}
          <a href={cool.sub[0].path}>{cool.name}</a>
        {/each}
      </ul>
    </div>
  {/each}
</div> -->

<style lang="scss">
  a{
    text-decoration: none;
  }
  .container{
    display: flex;
  }
  .card{
    background-color: black;
    margin: 1em;
    padding: 1em;
    border-radius: 10px;
  }
  .list{
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 10px;
  }
</style>