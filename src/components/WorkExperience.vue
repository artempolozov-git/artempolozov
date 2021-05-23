<template>
  <div class="work-container">
    <div>
      <div class="title-container">
        <div class="icon"><img src="../assets/icons/work-experience.svg"></div>
        <h1 class="title">Опыт работы</h1>
      </div>
      <div class="experience-container" style="margin-top: 0">
        <div class="first-experience">
          <div>
            <span class="years">2017 – 2018г. </span><span class="work-place">Графический дизайнер и PR-менеджер сети фитнес клубов</span>
          </div>
          <div class="position-container">
            <div class="position">Обязанности:<span class="position-filling"> Создание графических макетов, рекламных баннеров, оформление и ведение социальных сетей,
            формирование имиджа компании. Связь с общественностью, работа с рекламой и рекламодателями.
            Организация эффективной внутренней коммуникации.</span></div>
          </div>
        </div>
      </div>

      <div class="experience-container">
        <div class="first-experience">
          <div>
            <span class="years">2019г. </span><span class="work-place">Графический дизайнер в рекламном агентстве</span>
          </div>
          <div class="position-container">
            <div class="position">Обязанности: <span class="position-filling"> Создание дизайн-макетов, подготовка макетов к печати и постпечати.
            Работа с профессиональным полиграфическим оборудованием.
            Постпечатная обработка полиграфической продукции.</span></div>
          </div>
        </div>
      </div>

      <div class="experience-container">
        <div class="first-experience">
          <div>
            <span class="years">Конец 2019г. - н.в. </span><span class="work-place">Графический дизайн и Веб-разработка сайтов фриланс</span>
          </div>
          <div class="position-container">
            <div class="position">Графический дизайн:<span class="position-filling"> Создание дизайн-макетов для сайтов, UX/UI дизайн, создание брендбуков, гайдлайнов,
            создание логотипов, дизайн баннеров, вывесок, визиток, корпоративный дизайн и фирменный стиль компании,
            дизайн-оформление бизнеса и социальных сетей.</span></div>
            <div>
              <span class="position">Разработка сайтов: </span>
              <div class="position">Первый проект:<span class="position-filling"> Создание логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
              сайта для строительной организации «ЗАБОР-РЕГИОН»</span></div>
              <div class="position">Участие в проекте:<span class="position-filling"> Работа в команде разработчиков. Верстка сайта для строительного магазина «ЦСК»</span></div>
              <div class="position">Второй проект:<span class="position-filling"> Ребрендинг логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
              сайта для компании по услугам ландшафтного дизайна – «ТРЕС»</span></div>
              <div class="position">Третий проект:<span class="position-filling"> Создание логотипа, дизайн инстаграма, создание макета сайта, UX/ UI дизайн, разработка
              и техническая настройка сайта для инстаграм-магазина карт звездного неба «Cosmomap»</span></div>
              <div class="position">Четвертый проект:<span class="position-filling"> Создание логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
              сайта для собственного проекта по веб-разработке «Rampix.ru»</span></div>
              <div class="position">Пятый проект:<span class="position-filling"> Создание логотипа, создание макета сайта, UX/ UI дизайн, разработка и техническая настройка
              сайта для туристической компании «VerhoTour»</span></div>
              <div class="position">Шестой проект:<span class="position-filling"> Дизайн и верстка сайта резюме «artempolozov.ru»</span></div>
            </div>
          </div>
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
  padding: 0 18em;
  display: flex;
  justify-content: center;
}
.experience-container {
  margin-left: 4em;
  margin-top: 1em;
  line-height: 1.4;
}
.years {
  font-weight: bold;
  font-size: 1.1em;
  color: #0F0FEA;
}
.work-place {
  font-weight: bold;
  font-size: 1.1em;
  color: #444444;
}
.position {
  font-weight: bold;
  color: #444444;
}
.position-filling {
  font-weight: normal;
  color: #565656;
}
</style>