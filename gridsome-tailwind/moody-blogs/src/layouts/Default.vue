<template>
  <main class="layout" role="main">
    <slot />
    <footer class="footer bg-black">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
        & Made with ❤️ by
        <a class="link" href="//twitter.com/lauragift_">Mel Jones</a>
      </p>
    </footer>
  </main>
</template>

<style>
/* body {
  font-family: 'Inconsolata', monospace;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid #f7f6f3;
  min-height: 100vh;
  color: #301064;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}

.link {
  border: 2px dashed #f7f6f3;
  padding: 7px;
  color: #333;
  text-decoration: none;
} */
</style>
