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
        <span class="years">Конец 2019г. - н.в. </span><span class="work-place">Графический дизайнер и Веб-разработчик сайтов фриланс</span>
        <div class="position"><strong>Графический дизайн:</strong> Создание дизайн-макетов для сайтов, UX/UI дизайн, создание брендбуков, гайдлайнов,
        создание логотипов, дизайн баннеров, вывесок, визиток, корпоративный дизайн и фирменный стиль компании,
        дизайн-оформление бизнеса и социальных сетей.</div>
        <div class="position"><strong>Разработка сайтов:</strong></div>
        <div class="position"><strong>Первый проект:</strong> Создание логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
        сайта для строительной организации «ЗАБОР-РЕГИОН»</div>
        <div class="position"><strong>Участие в проекте:</strong>Работа в команде разработчиков. Верстка сайта для строительного магазина «ЦСК»</div>
        <div class="position"><strong>Второй проект:</strong> Ребрендинг логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
        сайта для компании по услугам ландшафтного дизайна – «ТРЕС»</div>
        <div class="position"><strong>Третий проект:</strong> Создание логотипа, дизайн инстаграма, создание макета сайта, UX/ UI дизайн, разработка
        и техническая настройка сайта для инстаграм-магазина карт звездного неба «Cosmomap»</div>
        <div class="position"><strong>Четвертый проект:</strong> Создание логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
        сайта для собственного проекта по веб-разработке «Rampix.ru»</div>
        <div class="position"><strong>Пятый проект:</strong> Создание логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
        сайта для туристической компании «VerhoTour»</div>
        <div class="position"><strong>Шестой проект:</strong> Дизайн и верстка сайта резюме «artempolozov.ru»</div>
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
  padding: 0 18em;
  display: flex;
  justify-content: center;
}
.experience-container {
  margin-left: 4em;
  margin-top: 0.5em;
  line-height: 1.4;
}
.years {
  font-weight: bold;
  font-size: 1.2em;
  color: #0F0FEA;
}
.work-place {
  font-weight: bold;
  font-size: 1.2em;
  color: #444444;
}
.position {
  color: #444444;
}
</style>