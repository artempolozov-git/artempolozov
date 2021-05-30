<template>
  <div class="about-container">
    <div>
      <div class="title-container">
        <div class="icon"><img src="../assets/icons/person.svg"></div>
        <h1 class="title">Обо мне</h1>
      </div>
      <div class="about-filling">
        Привет, меня зовут Артём Полозов.
        <br>Я графический дизайнер и frontend-разработчик сайтов.
        <br>Имею диплом о среднем профессиональном образовании по специальности - Информационные системы и технологии.
        <br>Цель - развиваться в создании пользовательских интерфейсов и разработке сайтов.
        <br>Получить опыт работы в профессиональной команде.
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style>
.about-container {
  padding: 2em 30em;
  display: flex;
}
.about-filling {
  color: #565656;
  margin-left: 4em;
  line-height: 1.4;
}
@media only screen and (max-width : 1680px) {
  .about-container {
    padding: 2em 25em;
  }
}
@media only screen and (max-width : 1536px) {
  .about-container {
    padding: 2em 18em;
  }
}
@media only screen and (max-width : 1366px) {
  .about-container {
    padding: 2em 16em;
  }
}
@media only screen and (max-width : 1280px) {
  .about-container {
    padding: 2em 15em;
  }
}
@media only screen and (max-width : 1150px) {
  .about-container {
    padding: 2em 8em;
  }
}
@media only screen and (max-width : 1024px) {
  .about-container {
    padding: 2em 3em;
  }
}
@media only screen and (max-width : 600px) {
  .about-filling {
    margin-left: 0;
  }
}
@media only screen and (max-width : 360px) {
  .about-container {
    padding: 2em 2em;
  }
}
</style>