<script>
  import { page } from '$app/stores';
  import CodeMirror from "svelte-codemirror-editor";
  import { cpp } from "@codemirror/lang-cpp";
  import { oneDark } from "@codemirror/theme-one-dark";
  export let data;

  let value = "";
  const {tutorials} = data;
  
  let next = "", prev = "";
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
</script>

<div id="container">
  <article id="content">
    {#if prev != ""}
    <a href={prev}>previous</a>
    {/if}
    {#if next != ""}
    <a href={next}>next</a>
    {/if}
    <svelte:component this={data.content} />
  </article>
  
  <div id="sep"></div>

  <CodeMirror
    class="editor"
    bind:value
    lang={cpp()}
    theme={oneDark}
    styles={{
      "&": {
          maxWidth: "100%",
          height: "40rem"
      },
    }}/>
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
  }
  #sep {
    width: 10px;
    background-color: black;
    cursor: ew-resize;
  }
  #container :global(.editor) {
    width: 50%;
    max-height: 80%;
  }
</style>