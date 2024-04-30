<script>
  import { cpp } from "@codemirror/lang-cpp";
  import CodeMirror from "svelte-codemirror-editor";
  import { oneDark } from "@codemirror/theme-one-dark";

  let value = "";
</script>

<CodeMirror
  bind:value
  class="editor"
  lang={cpp()}
  theme={oneDark}
  styles={{
    "&": {
        maxWidth: "100%",
        height: "100%",
        font: "1.6em Fira Code"
    },
}}/>

<style lang="scss">
  :global(.editor) {
    width: 50%;
  }
</style>