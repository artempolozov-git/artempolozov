<template>
  <div class="work-container">
    <div>
      <div class="title-container">
        <div class="icon"><img src="../assets/icons/work-experience.svg"></div>
        <h1 class="title">Опыт работы</h1>
      </div>
      <div class="experience-container" style="margin-top: 0">
        <span class="years">2017 – 2018г.</span><span class="work-place"> Графический дизайнер и PR-менеджер сети фитнес клубов</span>
        <div class="position"><strong>Обязанности:</strong> Создание графических макетов, рекламных баннеров, оформление и ведение социальных сетей,
        формирование имиджа компании. Связь с общественностью, работа с рекламой и рекламодателями.
        Организация эффективной внутренней коммуникации.</div>
      </div>
      <div class="experience-container">
        <span class="years">2019г.</span><span class="work-place"> Графический дизайнер в рекламном агентстве</span>
        <div class="position"><strong>Обязанности:</strong> Создание дизайн-макетов, подготовка макетов к печати и постпечати.
        Работа с профессиональным полиграфическим оборудованием.
        Постпечатная обработка полиграфической продукции.</div>
      </div>
      <div class="experience-container">
        <span class="years">Конец 2019г. - н.в. </span><span class="work-place">Графический дизайнер и Веб-разработчик сайтов</span>
        <div class="position-title"><strong>Графический дизайн:</strong> </div>
          <div class="position">Создание макетов для сайтов, UI/UX дизайн, создание брендбуков, гайдлайнов, дизайн логотипов,
          корпоративный дизайн и фирменный стиль компании, оформление бизнеса и социальных сетей.
          <br>Портфолио на <a class="target-link" target="_blank" href="https://www.behance.net/rampix-studio/">Behance</a>
          <br>Опыт работы в графических редакторах: Adobe Illustrator и Adobe Photoshop, могу работать с Figma.</div>
        <div class="position-title"><strong>Разработка сайтов:</strong></div>
        <div class="position"><strong>Первый проект: </strong>Создание логотипа, создание макета сайта, UI/UX дизайн, разработка и техническая настройка
        сайта для строительной организации <a class="target-link" target="_blank" href="https://zabor-region.ru/">«ЗАБОР-РЕГИОН»</a>
          <br>Стек технологий: HTML, CSS, JavaScript, Vue.js
        </div>
        <div class="position"><strong>Второй проект: </strong>Работа в команде разработчиков. Верстка сайта для строительного магазина <a class="target-link" target="_blank" href="https://www.behance.net/gallery/109068201/sajt-dlja-magazina-stroitelnyh-materialov">«ЦСК»</a>
          <br>Стек технологий: HTML, CSS, JavaScript, Vue.js
        </div>
        <div class="position"><strong>Третий проект: </strong>Ребрендинг логотипа, создание макета сайта, UI/UX дизайн, разработка и техническая настройка
          сайта для компании по услугам ландшафтного дизайна – <a class="target-link" target="_blank" href="https://tresltd.ru/">«ТРЕС»</a>
          <br>Стек технологий: HTML, CSS, JavaScript, Vue.js
        </div>
        <div class="position"><strong>Четвертый проект: </strong>Создание логотипа, дизайн инстаграма, создание макета сайта, UI/UX дизайн, разработка
          и техническая настройка сайта для инстаграм-магазина карт звездного неба <a class="target-link" target="_blank" href="https://cosmomap.ru/">«Cosmomap»</a>
          <br>Стек технологий: HTML, CSS, JavaScript, Vue.js
        </div>
        <div class="position"><strong>Пятый проект: </strong>Создание логотипа, создание макета сайта, UI/UX дизайн, разработка и техническая настройка
          сайта для собственного проекта по веб-разработке <a class="target-link" target="_blank" href="https://rampix.ru/">«Rampix.ru»</a>
          <br>Стек технологий: HTML, CSS, JavaScript, Vue.js
        </div>
        <div class="position"><strong>Шестой проект: </strong>Создание логотипа, создание макета сайта, UI/UX дизайн, разработка и техническая настройка
          сайта для туристической компании <a class="target-link" target="_blank" href="https://verhotour.com/">«VerhoTour»</a>
          <br>Стек технологий: HTML, CSS, JavaScript, Vue.js
        </div>
        <div class="position"><strong>Седьмой проект: </strong>Дизайн и верстка сайта резюме <a class="target-link" target="_blank" href="https://artempolozov.ru/">«artempolozov.ru»</a>
          <br>Стек технологий: HTML, CSS, Vue.js
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WorkExperience",
    }
</script>

<style>
.work-container {
  padding: 0 30em;
  display: flex;
  justify-content: center;
}
.experience-container {
  margin-left: 4em;
  margin-top: 0.5em;
  line-height: 1.4;
}
.target-link {
  text-decoration: none;
  color: #0F0FEA;
}
.target-link:hover {
  color: #cd0012;
}
.years {
  font-weight: bold;
  font-size: 1.2em;
  color: #0F0FEA;
}
.work-place {
  font-weight: bold;
  font-size: 1.2em;
  color: #565656;
}
.position {
  color: #565656;
}
.position-title {
  color: #565656;
  font-size: 1.5em;
}
@media only screen and (max-width : 1680px) {
  .work-container {
    padding: 0 25em;
  }
}
@media only screen and (max-width : 1536px) {
  .work-container {
    padding: 0 18em;
  }
}
@media only screen and (max-width : 1366px) {
  .work-container {
    padding: 0 16em;
  }
}
@media only screen and (max-width : 1280px) {
  .work-container {
    padding: 0 15em;
  }
}
@media only screen and (max-width : 1150px) {
  .work-container {
    padding: 0 8em;
  }
}
@media only screen and (max-width : 1024px) {
  .work-container {
    padding: 0 3em;
  }
}
@media only screen and (max-width : 600px) {
  .experience-container {
    margin-left: 0;
  }
}
@media only screen and (max-width : 360px) {
  .work-container {
    padding: 0 2em;
  }
}
</style>