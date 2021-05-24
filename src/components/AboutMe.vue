<template>
  <div class="AboutMe">
    <div class="img-container">
      <!-- <img class="bg" src="@/assets/bg-story.png" /> -->
      <div class="bg"></div>
      <div class="sprite"></div>
    </div>
    <div class="dialog">
      <div class="dialog-inner">
        <p>
          Привет, меня зовут Дарья и я начинающий разработчик в поисках
          стажировки и работы в области веб-разработки
        </p>
        <div class="triangle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
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

.bg {
  height: 700px;
  background-image: url("../assets/bg-story.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom
}

.sprite {
  height: 360px;
  width: 460px;
  background-image: url("../assets/campfire1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  position: absolute;
  bottom: 4%;
  transform: translate(-50%, 0);
  left: 50%;
  z-index: 2;
}

.dialog {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  max-width: 340px;
  background-color: #1a1926;
  border: 2px solid #476669;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: "Press Start 2P", cursive;
  animation: dialogBounce 2.5s linear infinite;
}

@keyframes dialogBounce {
  0% {
    top: 38%;
  }
  50% {
    top: 35%;
  }
  100% {
    top: 38%;
  }
}

.dialog-inner {
  position: relative;
  padding: 2px;
  line-height: 1.1rem;
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

@media screen and (max-width: 680px) {
  .dialog {
    min-width: 400px;
  }
}
</style>