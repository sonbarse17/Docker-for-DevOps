<template>
  <div id="app">
    <h1>Welcome to My Vue and Express App</h1>
    <p>This is a simple application demonstrating Vue.js with an Express.js backend.</p>
    <footer>
      <p><strong>Created by Sushant Sonbarse</strong> | <a href="https://github.com/sonbarse17/" target="_blank">GitHub</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

footer {
  margin-top: auto;
  padding: 20px;
  border-top: 1px solid #eee;
}

footer a {
  color: #42b983;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>