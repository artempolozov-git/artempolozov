<template>
  <div class="hs-container">
    <div class="title-container">
      <div class="icon"><img src="../assets/icons/hard-skills.svg"></div>
      <h1 class="title">Hard Skills</h1>
    </div>
    <div>
      <div class="hs-block" style="margin-top: 0">
        <div class="position"><span class="specialty">Дизайн:</span> Знание основ графического дизайна, умение создавать общий визуальный стиль, умение работать со шрифтами.
          Понимание UI/UX дизайна, умение создавать удобные пользовательские интерфейсы, умение прорабатывать пользовательские сценарии, умение работать с сеткой.
          Умение делать адаптивный дизайн под любые разрешения. Умение работать с графическими форматами (в том числе svg и webp).
          Умение подготавливать макеты для верстки. Понимание трендов дизайна, креативность.
          Знание и опыт работы в графических редакторах: Adobe Illustrator, Adobe Photoshop.</div>
      </div>
      <div class="hs-block">
        <div class="position"><span class="specialty">HTML:</span> Умение работать со стандартом HTML5. Умение адаптивной и респонсив верстки,
          умение работать с формами и валидацией, умение работать с сеткой, умение работать с вложенными элементами и псевдоэлементами.</div>
      </div>
      <div class="hs-block">
        <div class="position"><span class="specialty">CSS:</span> Умение работать со стандартом CSS3. Умение работать с flexbox и grid. Умение работать с media queries.
          Умение работать с псевдоклассами. Умение работать с единицами измерения: %, px, em, rem, vh, vw.</div>
      </div>
      <div class="hs-block">
        <div class="position"><span class="specialty">JavaScript:</span> Знание основ стандарта JavaScript ES6. Изучена работа с DOM элементами. Изучена теория ООП. Умение подключать и использовать библиотеки.</div>
      </div>
      <div class="hs-block">
        <div class="position"><span class="specialty">Vue.js:</span> Знание основ и работа с фреймворком Vue.js. Умение работать с компонентами и реактивностью.</div>
      </div>
      <div class="hs-block">
        <div class="position"><span class="specialty">GitHub:</span> Умение работать с системой GitHub.</div>
      </div>
      <div class="hs-block">
        <div class="position"><span class="specialty">Техническая часть:</span> Знание как работает интернет. Знание как работает браузер. Знание что такое DNS (доменное имя) и хостинг. Умение настраивать хостинг и сайт на хостинге.</div>
      </div>
      <div class="hs-block">
        <div class="position"><span class="specialty">Английский язык:</span> Средний уровень английского - А2. Понимание и возможность читать документацию на английском языке, местами используя переводчик.</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HardSkills"
    }
</script>

<style>
.hs-container {
  padding: 0 30em;
}
.hs-block {
  margin-left: 4em;
  margin-top: 0.5em;
  line-height: 1.4;
}
.specialty {
  font-weight: bold;
  font-size: 1.2em;
  color: #D6001C;
}
.position {
  color: #565656;
}
@media only screen and (max-width : 1680px) {
  .hs-container {
    padding: 0 25em;
  }
}
@media only screen and (max-width : 1536px) {
  .hs-container {
    padding: 0 18em;
  }
}
@media only screen and (max-width : 1366px) {
  .hs-container {
    padding: 0 16em;
  }
}
@media only screen and (max-width : 1280px) {
  .hs-container {
    padding: 0 15em;
  }
}
@media only screen and (max-width : 1150px) {
  .hs-container {
    padding: 0 8em;
  }
}
@media only screen and (max-width : 1024px) {
  .hs-container {
    padding: 0 3em;
  }
}
@media only screen and (max-width : 600px) {
  .hs-block {
    margin-left: 0;
  }
}
@media only screen and (max-width : 360px) {
  .hs-container {
    padding: 0 2em;
  }
}
</style>