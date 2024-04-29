<script>
  import { cpp } from "@codemirror/lang-cpp";
  import CodeMirror from "svelte-codemirror-editor";
  import { oneDark } from "@codemirror/theme-one-dark";

  let textValue = "";
</script>

<CodeMirror
  bind:textValue
  class="editor"
  lang={cpp()}
  theme={oneDark}
  styles={{
    "&": {
        maxWidth: "100%",
        height: "100%"
    },
}}/>

<style lang="scss">
  :global(.editor) {
    width: 50%;
  }
</style>