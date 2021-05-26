<template>
  <div class="skills">
    <h1>Навыки</h1>
    <div>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <ul>
        <li>React</li>
        <li>Vue.js</li>
      </ul>
      <ul>
        <li>Android (Java)</li>
        <li>MySQL, SQLite</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style>
.skills {
  background-color: #1a1926;
  color: #e0e0e0;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.skills > div {
    margin-top: 60px;
    display: flex;
    font-size: 1.3rem;
    margin-left: 15%;
    margin-right: 15%;
}

ul {
    padding: 0;
    margin: 0;
    flex: 1 1 30%;
    list-style: none;
}

@media screen and (max-width: 680px) {
  .skills > div {
    margin-left: 5%;
    margin-right: 5%
  }
}
</style>