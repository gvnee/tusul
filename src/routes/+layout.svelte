<script>
  import '$lib/styles/global.scss'
  import Header from '$lib/components/header.svelte';
  import {fade} from 'svelte/transition';
  export let data;
</script>

<Header />

{#key data.currentRoute}
  <main in:fade={{duration: 150, delay: 150}} out:fade={{duration: 150}}>
    <slot />
  </main>
{/key}



<style lang="scss">
  main {
    padding-top: $header-height;
    height: 100%;
  }
</style>