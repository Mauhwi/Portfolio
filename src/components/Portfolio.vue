<template>
  <div class="portfolio">
    <h1>Портфолио</h1>
    <div class="container">
      <div v-for="project in projects" :key="project.name" class="project-card">
        <video @mouseenter="playVideo" @mouseleave="stopVideo" @click="videoToggle">
          <source  v-if="project.video" :src="project.video" type="video/mp4">
        Your browser does not support the video tag.
        </video>
        <div class="card-text">
          <a :href="project.href" target="_blank">{{ project.name }}</a>
          <p>{{ project.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  methods: {
    playVideo(event) {
      event.target.play()
      this.videoStatus = true;
    },
    stopVideo(event) {
      event.target.pause();
      this.videoStatus = false;
    },
    videoToggle(event) {
      if (this.videoStatus == false) {
        event.target.play();
        this.videoStatus = true;
      } else {
        event.target.pause();
        this.videoStatus = false;
      }
    },
  },
  data() {
    return {
      videoStatus: false,
      projects: [
        {
          name: "I can't remember my builds",
          text: "Справочник сборок для персонажей в ESO. React",
          image: "https://source.unsplash.com/random/420x200",
          href: "https://github.com/Mauhwi/char-info",
          video: "https://i.gyazo.com/e4df4569fe7dfd25389ac7fa08b8bb88.mp4"
        },
        {
          name: "Hello, it's me",
          text: "Интерактивная версия портфолио. React. WIP",
          image: "https://source.unsplash.com/random/420x200",
          href: "https://github.com/Mauhwi/react-portfolio",
          video: "https://i.gyazo.com/d145df35ad1d193e5be9d334dcfde034.mp4"
        },
        {
          name: "Portfolio",
          text: "Dev build этого сайта. Vue.js",
          image: "https://source.unsplash.com/random/420x200",
          href: "https://github.com/Mauhwi/simon",
          video: "https://i.gyazo.com/0795748dbbfa7d0639e2d3686eee9a8c.mp4"
        },
        {
          name: "Blast Game",
          text: "Игра Blast. Javascript, Canvas",
          image: "https://source.unsplash.com/random/420x200",
          href: "https://github.com/Mauhwi/blast-game",
          video: "https://i.gyazo.com/e19ff25b0e32a92cd8c1cf0f7bf5acf3.mp4"
        },
        {
          name: "Simon",
          text: "Игра Саймон говорит. Vue.js",
          image: "https://source.unsplash.com/random/420x200",
          href: "https://github.com/Mauhwi/simon",
          video: "https://i.gyazo.com/d6c88e6a3eb932f756bc8db70d228fcd.mp4"
        },
        {
          name: "Дипломный проект",
          text: "Android приложение. Java",
          image: "https://source.unsplash.com/random/420x200",
          href: "https://github.com/Mauhwi/DailyApp",
          video: "https://i.gyazo.com/37eac5bc91b6fe090da20bb8f3069bdf.mp4"
        },
      ],
    };
  },
};
</script>

<style>
.portfolio {
  padding-top: 60px;
  padding-bottom: 60px;
}

.container {
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-card {
  margin: 30px;
  min-width: 320px;
  max-width: 420px;
  flex: 1 1 30%;
  background-color: #201f2e;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: left;
  display: flex;
  flex-direction: column;
}

.project-card video {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: auto;
  max-width: 100%;
  cursor: pointer;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-left: 24px;
  margin-bottom: 6px;
  margin-top: 10px;
}

.project-card a {
  font-size: 1.4rem;
  text-decoration: underline;
  color: #e0e0e0;
  text-decoration: none;
}

.project-card p {
  padding-bottom: 18px;
  font-size: 1.2rem;
  font-weight: 300;
}
</style>