<template>
  <div class="header">
    <div class="main-container">
      <div class="person-photo"></div>
      <div class="person-info">
        <h1 class="resume-title">Артём Полозов</h1>
        <h2 class="resume-info">Резюме на вакансию Vue.js Frontend-разработчик. UI/UX дизайнер</h2>
        <div class="person-contacts">
          <a target="_blank" class="email" href="mailto:artempolozov@bk.ru"><img src="../assets/icons/email.svg">artempolozov@bk.ru</a>
          <a target="_blank" class="github" href="https://github.com/artempolozov-git"><img src="../assets/icons/github.svg">artempolozov-git</a>
          <a target="_blank" class="behance" href="https://www.behance.net/artempolozov-beh"><img src="../assets/icons/behance.svg">artempolozov-beh</a>
          <a target="_blank" class="download-pdf" href="resume.pdf" download="Резюме на вакансию frontend-разработчик. UI/UX Дизайнер.pdf"><img src="../assets/icons/download.svg">Скачать резюме PDF</a>
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

<style>
.header {
  padding: 3em 0;
  height: auto;
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
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  background: url(../assets/images/personal-photo.webp);
  background-size: cover;
  background-position: center;
}
.person-info {
  margin-left: 2em;
}
.resume-title {
  color: #212122;
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
  color: #0F0FEA;
  text-decoration: none;
}
.github:hover, .behance:hover, .download-pdf:hover {
  color: #D6001C;
}
.email {
  display: flex;
  align-items: center;
  color: #0F0FEA;
  text-decoration: none;
}
.email:hover {
  color: #D6001C;
}
img {
  width: 1.5em;
  margin-right: 0.5em;
}
@media only screen and (max-width : 1680px) {
  .person-photo {
    width: 10vw;
    height: 10vw;
  }
}
@media only screen and (max-width : 1536px) {
  .person-photo {
    width: 13vw;
    height: 13vw;
  }
}
@media only screen and (max-width : 1366px) {
  .person-photo {
    width: 12vw;
    height: 12vw;
  }
}
@media only screen and (max-width : 1150px) {
  .person-photo {
    width: 13vw;
    height: 13vw;
  }
}
@media only screen and (max-width : 1024px) {
  .main-container {
    display: block;
  }
  .person-photo {
    margin: auto;
    width: 15vw;
    height: 15vw;
  }
  .person-info {
    margin-top: 2em;
    margin-left: 0;
  }
  .resume-title, .resume-info {
    text-align: center;
  }
  .person-contacts {
    justify-content: center;
  }
}
@media only screen and (max-width : 800px) {
  .person-photo {
    width: 20vw;
    height: 20vw;
  }
  .email, .github, .behance, .download-pdf {
    justify-content: center;
    margin-left: 1em;
  }
}
@media only screen and (max-width : 600px) {
  .header {
    padding: 3em 2em;
  }
  .person-photo {
    width: 30vw;
    height: 30vw;
  }
  .person-contacts {
    display: block;
  }
  .email, .github, .behance, .download-pdf {
    justify-content: center;
    margin-left: 0;
    margin-top: 1.5em;
  }
}
@media only screen and (max-width : 360px) {
  .header {
    padding: 3em 1em;
  }
  .person-photo {
    width: 45vw;
    height: 45vw;
  }
}
</style>