<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavMenu />
    <AboutMe />
    <Skills />
    <Education />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Skills from './components/Skills'

export default {
  name: 'App',
  components: {
    NavMenu,
    AboutMe,
    Education,
    Portfolio,
    Contact,
    Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&family=Press+Start+2P&family=Russo+One&display=swap');
#app {
  font-family: 'Oswald', sans-serif;
  text-align: center;
  background-color: #1A1926;
  color: #E0E0E0;
}

body {
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
