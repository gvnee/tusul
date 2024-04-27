<script>
  import { page } from '$app/stores';
    import { SvelteComponent } from 'svelte';
  export let data;
  const {tutorials} = data;
  
  let next = "", prev = "";
  $: {
    let current = "/tutorial"
    for(const name in $page.params){
      current = current.concat('/', $page.params[name]);
    }
    
    tutorials.forEach((tutorial, i) => {
      if(tutorial == current){
        prev = i!=0 ? tutorials[i-1] : "";
        next = i!=tutorials.length-1 ? tutorials[i+1] : "";
      }
    });
  }
</script>


<div class="container">
  <article>
    {#if prev != ""}
    <a href={prev}>previous</a>
    {/if}
    {#if next != ""}
    <a href={next}>next</a>
    {/if}
    <svelte:component this={data.content} />
  </article>
  
  <div class="code">
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    justify-content: space-between;
    height: 100vh;
  }
  .code {
    width: 50%;
    background-color: cornflowerblue;
  }
</style>