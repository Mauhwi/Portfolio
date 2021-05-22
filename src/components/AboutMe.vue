<template>
<div class="AboutMe">
    <div class="img-container">
      <img class="bg" src="@/assets/bg-story.png">
      <img class="sprite" src="@/assets/campfire1.png">
  </div>
  <div class="dialog">
      <div class="dialog-inner">
          <p>Привет, меня зовут Дарья и я начинающий
            разработчик в поисках стажировки и работы в области веб-разработки</p>
          <div class="triangle"></div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
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
        max-width: 340px;
        background-color: #1A1926;
        border: 2px solid #476669;
        border-radius: 6px;
        font-size: 0.9rem;
        font-family: 'Press Start 2P', cursive;
    }

    .dialog-inner {
        position: relative;
        padding: 2px;
    }
    .triangle {
        position: absolute;
        bottom: -28px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 0;
        height: 0;
        border: 8px solid #476669;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
    }
</style>