<template>
  <div class="ss-container">
    <div class="title-container">
      <div class="icon"><img src="../assets/icons/soft-skills.svg"></div>
      <h1 class="title">Soft Skills</h1>
    </div>
    <div>
      <div class="ss-block" style="margin-top: 0">
        <div class="position"><span class="soft-skills">Самоорганизация - </span>способность правильно распределять и контролировать свое время.</div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Многозадачность - </span>способность быстро переключаться на разные задачи.</div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Соблюдение сроков - </span>пособность работать в рамках дедлайна.</div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Планирование - </span>способность планировать свою работу и разбивать её на этапы.</div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Работа в команде - </span>способность находить общий язык, договариваться на задачи и сроки, согласовывать этапы работы.</div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Понимание результата - </span>понимание того, какой результат работы должен получиться из текущей задачи.</div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Опыт работы удаленно</span></div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Опыт в общении с клиентами</span></div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Ценю качество, пунктуальность</span></div>
      </div>
      <div class="ss-block">
        <div class="position"><span class="soft-skills">Способность обучаться новому</span></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SoftSkills"
    }
</script>

<style>
.ss-container {
  padding: 2em 30em;
}
.ss-block {
  margin-left: 4em;
  margin-top: 0.5em;
  line-height: 1.4;
}
.soft-skills {
  font-weight: bold;
  font-size: 1.2em;
  color: #565656;
}
@media only screen and (max-width : 1680px) {
  .ss-container {
    padding: 2em 25em;
  }
}
@media only screen and (max-width : 1536px) {
  .ss-container {
    padding: 2em 18em;
  }
}
@media only screen and (max-width : 1366px) {
  .ss-container {
    padding: 2em 16em;
  }
}
@media only screen and (max-width : 1280px) {
  .ss-container {
    padding: 2em 15em;
  }
}
@media only screen and (max-width : 1150px) {
  .ss-container {
    padding: 2em 8em;
  }
}
@media only screen and (max-width : 1024px) {
  .ss-container {
    padding: 2em 3em;
  }
}
@media only screen and (max-width : 600px) {
  .ss-block {
    margin-left: 0;
  }
}
@media only screen and (max-width : 360px) {
  .ss-container {
    padding: 2em 2em;
  }
}
</style>