<script>
  import '$lib/styles/global.scss';
  import 'iconify-icon';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import {fade} from 'svelte/transition';
  export let data;
</script>

<Header />

{#key data.currentRoute}
  <main in:fade={{duration: 150, delay: 150}} out:fade={{duration: 150}}>
    <slot />
  </main>
{/key}


<Footer />

<style lang="scss">
  main {
    padding-top: $header-height;
    height: 100%;
  }
</style>