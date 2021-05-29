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
  padding: 3em 18em;
  display: flex;
}
.about-filling {
  color: #565656;
  margin-left: 4em;
  line-height: 1.4;
}
</style>