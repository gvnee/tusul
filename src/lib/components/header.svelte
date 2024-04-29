<nav>
  <a href="/">home</a>
  <a href="/tutorial">tutorial</a>
  <a href="/blog">blog</a>
</nav>

<style lang="scss">
  nav {
    border-top: 5px solid $red;
    background-color: $bg2;
    display: flex;
    justify-content: end;
    width: 100vw;
    z-index: 99;
    position: fixed;
    height: $header-height;
  }
  a {
    text-decoration: none;
    color: $yellow2;
    margin: 1em;
    font-size: large;
  }
</style>