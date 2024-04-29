<script>
  import { page } from '$app/stores';
  import Editor from '$lib/components/editor.svelte';
  
  export let data;
  const {Content, unitsList} = data;
  
  let next = "", prev = "";
  let current = "/tutorial"
  for(const name in $page.params){
    current = current.concat('/', $page.params[name]);
  }
  
  unitsList.forEach((tutorial, i) => {
    if(tutorial == current){
      prev = i!=0 ? unitsList[i-1] : "";
      next = i!=unitsList.length-1 ? unitsList[i+1] : "";
    }
  });
</script>

<div id="container">
  <article id="content">
    {#if prev != ""}
      <a href={prev}>previous</a>
    {/if}
    {#if next != ""}
      <a href={next}>next</a>
    {/if}
    <Content />
  </article>
  
  <div id="seperator"></div>

  <Editor />
</div>

<style lang="scss">
  #container {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  #content {
    width: 50%;
    padding: 20px;
    max-height: 100%;
    overflow: auto;
  }
  #seperator {
    width: 5px;
    background-color: black;
    cursor: ew-resize;
  }
</style>