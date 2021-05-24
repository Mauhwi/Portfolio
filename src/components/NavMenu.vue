<template>
  <nav>
    <ul class="nav-menu">
      <li class="nav-link">Главная</li>
      <li class="nav-link">Образование</li>
      <li class="nav-link">Портфолио</li>
      <li class="nav-link">Контакты</li>
      <li class="nav-link" @click="navMenu()">
        <img class="nav-icon" src="@/assets/square.png" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  methods: {
    navMenu() {
      var x = document.querySelector(".nav-menu");
      if (x.className === "nav-menu") {
        x.className += " responsive";
      } else {
        x.className = "nav-menu";
      }
    },
  },
};
</script>

<style scoped>

nav {
  height: 60px;
  z-index: 5;
  background-color: #1A1926;
}
.nav-menu {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  background-color: #1A1926;
}
li {
  padding: 16px;
  background-color: #1A1926;
}

.nav-icon {
  width: 28px;
  height: auto;
}

nav li:last-child {
  display: none;
}

@media screen and (max-width: 720px) {
  .nav-menu {
    justify-content: space-between;
    padding: 0;
  }
  nav li:not(:first-child) {
    display: none;
  }
  nav li:last-child {
    display: block;
  }

  nav {
    position: relative;
  }

  .responsive {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  .responsive li:last-child {
    position: absolute;
    right: 0;
    top: 0;
  }
  .responsive .nav-link {
    display: block;
    text-align: left;
  }
}
</style>