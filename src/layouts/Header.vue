<template>
  <div class="header">
    <div class="main-container">
      <div class="person-photo"></div>
      <div class="person-info">
        <h1 class="resume-title">Артём Полозов</h1>
        <h2 class="resume-info">Резюме на вакансию Junior Frontend-разработчик. UX/UI Дизайнер</h2>
        <div class="person-contacts">
          <a target="_blank" class="email" href="mailto:artempolozov@bk.ru"><img src="../assets/icons/email.svg">artempolozov@bk.ru</a>
          <a target="_blank" class="github" href="https://github.com/artempolozov-git"><img src="../assets/icons/github.svg">artempolozov-git</a>
          <a target="_blank" class="behance" href="https://www.behance.net/rampix-studio?isa0=1"><img src="../assets/icons/behance.svg">behance.net/rampix-studio</a>
          <a target="_blank" class="download-pdf" href="resume.pdf" download="Резюме на вакансию.pdf"><img src="../assets/icons/download.svg">Скачать резюме PDF</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.header {
  width: 100%;
  height: 17em;
  display: flex;
  background-color: #EFEFEF;
}
.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.person-photo {
  width: 11vw;
  height: 11vw;
  border-radius: 50%;
  background: url(../assets/images/personal-photo.webp);
  background-size: cover;
  background-position: center;
}
.person-info {
  margin-left: 2em;
}
.resume-title {
  color: #444444;
  margin: 0;
  margin-bottom: 0.3em;
}
.resume-info {
  font-weight: normal;
  font-size: 1.1em;
  margin: 0;
  color: #565656;
}
.person-contacts {
  display: flex;
  margin-top: 2em;
  color: #565656;
}
.github, .behance, .download-pdf {
  margin-left: 2em;
  display: flex;
  align-items: center;
  color: #565656;
  text-decoration: none;
}
.github:hover, .behance:hover, .download-pdf:hover {
  color: #0F0FEA;
}
.email {
  display: flex;
  align-items: center;
  color: #565656;
  text-decoration: none;
}
.email:hover {
  color: #0F0FEA;
}
img {
  width: 1.5em;
  margin-right: 0.5em;
}
</style>