<template>
  <div class="contact">
      <h1>Контакты</h1>
      <div>
          <p>Россия, г. Челябинск. Возможен переезд в Новосибирск, 
            а также удаленный формат работы.</p>
            <div class="divider"></div>
          <div class="contact-info">
              <p>+7 (951) 450-66-56</p>
              <p>darmit074@gmail.com</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
    .contact {
        background-color: #E0E0E0;
        color: #1A1926;
        padding-top: 60px;
        padding-bottom: 60px;
        font-size: 1.3rem;
    }

    .contact > div {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 800px;
        padding: 20px;
        margin: auto;
        margin-top: 40px;
    }

    .contact div > p {
        flex: 1 1 60%;
        margin-right: 5%;
    }

    .contact-info {
        flex: 1 1 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        margin-left: 5%;
    }

    .contact-info p {
        margin: 6px;
    }

    .divider {
        display: flex;
        width: 3px;
        height: 140px;
        background-color: #1A1926;
    }
</style>