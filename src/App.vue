<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavMenu />
    <AboutMe />
    <Education />
    <Portfolio />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Portfolio from './components/Portfolio'

export default {
  name: 'App',
  components: {
    NavMenu,
    AboutMe,
    Education,
    Portfolio
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Press+Start+2P&family=Russo+One&display=swap');
#app {
  font-family: 'Oswald', sans-serif;
  text-align: center;
  background-color: #1A1926;
  color: #E0E0E0;
}

body, ul {
  margin: 0;
  min-width: 480px;
  max-width: 1920px;
  margin: auto;
}

h1 {
  margin: 0;
  text-decoration: underline;
}

nav, h1 {
  font-family: 'Russo One', sans-serif;
  font-size: 1.4rem;
  text-transform: uppercase;
}

h2 {
  font-size: 1.3rem;
  font-family: 'Russo One', sans-serif;
}
</style>
