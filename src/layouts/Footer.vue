<template>
  <div class="footer">
    <div>
      <a target="_blank" class="email-to" href="mailto:artempolozov@bk.ru">artempolozov@bk.ru</a>
      <div class="contacts">
        <a target="_blank" class="github" style="margin-left: 0" href="https://github.com/artempolozov-git"><img src="../assets/icons/github.svg">artempolozov-git</a>
        <a target="_blank" class="behance" href="https://www.behance.net/artempolozov-beh"><img src="../assets/icons/behance.svg">artempolozov-beh</a>
        <a target="_blank" class="download-pdf" href="resume.pdf" download="Резюме на вакансию frontend-разработчик. UI/UX Дизайнер.pdf"><img src="../assets/icons/download.svg">Скачать резюме PDF</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
  height: auto;
  background-color: #EFEFEF;
}
.email-to {
  display: flex;
  justify-content: center;
  color: #D6001C;
  font-weight: bold;
  font-size: 3.5em;
  text-decoration: none;
}
.email-to:hover {
  color: #bb001c;
}
.contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
}
@media only screen and (max-width : 800px) {
  .contacts {
    display: none;
  }
}
@media only screen and (max-width : 600px) {
  .email-to {
    font-size: 2em;
  }
}
@media only screen and (max-width : 360px) {
  .email-to {
    font-size: 1.5em;
  }
}
</style>