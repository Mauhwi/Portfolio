<template>
  <div class="education">
    <h1>Образование</h1>
    <div class="edu-info">
      <h2>Информатика и вычислительная техника</h2>
      <p>
        Тема дипломного проекта: "Разработка мобильного приложения для
        планирования активности людей с умеренными расстройствами памяти"
      </p>
      <p>Южно-Уральский Государственный Университет</p>
      <p>2020 г.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
.education {
  background-color: #e0e0e0;
  color: #1a1926;
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.edu-info {
  align-self: center;
  max-width: 600px;
  padding: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
}

p,
h2 {
  font-size: 1.3rem;
  margin-bottom: 0px;
}

.edu-info p:last-of-type {
  align-self: flex-end;
  padding-right: 32px;
}
</style>