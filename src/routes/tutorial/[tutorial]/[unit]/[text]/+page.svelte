<script>
  import {page} from '$app/stores';
  console.log($page.url.pathname);
  const path = `../../../../../lib${$page.url.pathname}.md`;
  console.log(path)
  const Markdown = import(path);
</script>

<Markdown />