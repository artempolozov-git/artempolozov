<template>
  <div class="about-container">
    <div class="about-icon"><img src="../assets/icons/person.svg"></div>
    <div class="about-wrapper">
      <h1 class="title">Обо мне</h1>
      <div class="about-text">
        <p>Привет, меня зовут Артём Полозов.
          <br>Я графический дизайнер и frontend-разработчик сайтов.
          <br>Имею диплом о среднем профессиональном образовании по специальности - Информационные системы и технологии.
          <br>Цель - развиваться в создании пользовательских интерфейсов и разработке сайтов.
          <br>Получить опыт работы в профессиональной команде.</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>
.about-container {
  padding: 5em 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.about-icon > img {
  width: 3em;
  margin-right: 1em;
}
.title {
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  color: #444444;
  margin: 0;
  margin-bottom: 0.3em;
  font-size: 1.5em;
}
.about-text {
  color: #565656;
}
</style>