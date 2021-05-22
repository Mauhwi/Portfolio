<template>
<div class="AboutMe">
    <div class="img-container">
      <img class="bg" src="@/assets/bg-story.png">
      <img class="sprite" src="@/assets/campfire1.png">
  </div>
  <div class="dialog">
      <p>Привет, меня зовут Дарья и я начинающий разработчик в поисках стажировки и работы в области веб-разработки</p>
  </div>
</div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style>
    .AboutMe {
        position: relative;
    }
    .img-container {
        width: 100%;
        position: relative;
    }

    img {
        width: 100%;
        height: auto;
    }

    .sprite {
        position: absolute;
        bottom: 3%;
        left: 0;
        z-index: 2;
    }

    .dialog {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        max-width: 320px;
        background-color: #1A1926;
        border: 2px solid #476669;
        border-radius: 6px;
        font-size: 1.1rem;
    }
</style>