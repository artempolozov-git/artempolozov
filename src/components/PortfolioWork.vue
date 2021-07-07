<template>
  <div class="portfolio-container">
    <div class="title-container">
      <div class="icon"><img src="../assets/icons/portfolio.svg"></div>
      <h1 class="title">Портфолио</h1>
    </div>
    <div class="portfolio-description">
      Все коммерческие проекты являются действующими и выполняют свои функции в интернете
    </div>
    <div class="portfolio-grid">
      <a class="verhotour-site" v-tooltip.hover.focus="'Веб-дизайн и разработка сайта для туристической компании Verhotour'" href="https://www.behance.net/gallery/116596921/Landing-page-UXUI" target="_blank"></a>
      <a class="verhotour-logo" v-tooltip.hover.focus="'Создание логотипа для туристической компании Verhotour'" href="https://www.behance.net/gallery/112095707/Tourism-logotype-VerhoTour-avtorskie-kvest-tury" target="_blank"></a>
      <a class="rampix-site" v-tooltip.hover.focus="'Веб-дизайн и разработка сайта Rampix.ru'" href="https://www.behance.net/gallery/110191637/veb-dizajn-i-razrabotka-Lading-page-UXUI-Design" target="_blank"></a>
      <a class="cosmomap-site" v-tooltip.hover.focus="'Веб-дизайн и разработка сайта для инстаграм-магазина Cosmomap'" href="https://www.behance.net/gallery/109451805/Website-veb-dizajn-i-razrabotka-sajta-UXUI-design" target="_blank"></a>
      <a class="slovakia-site" v-tooltip.hover.focus="'Дизайн главной страницы для сайта недвижимости Realty-Slovakia'" href="https://www.behance.net/gallery/108974653/dizajn-glavnoj-stranicy-dlja-sajta-nedvizhimosti" target="_blank"></a>
      <a class="tres-rebranding" v-tooltip.hover.focus="'Ребрендинг логотипа для студии ландшафтного дизайна ТРЕС'" href="https://www.behance.net/gallery/108897951/rebrending-logotipa-dlja-studii-landshaftnogo-dizajna" target="_blank"></a>
      <a class="tres-site" v-tooltip.hover.focus="'Веб-дизайн и разработка сайта для компании по услугам ландшафтного дизайн ТРЕС'" href="https://www.behance.net/gallery/109437093/Landing-page-veb-dizajn-i-razrabotka-sajta-UXUI" target="_blank"></a>
      <a class="csk-site" v-tooltip.hover.focus="'Сайт для магазина строительных материалов ЦСК'" href="https://www.behance.net/gallery/109068201/sajt-dlja-magazina-stroitelnyh-materialov" target="_blank"></a>
      <a class="zabor-region" v-tooltip.hover.focus="'Дизайн и разработка сайта для строительной организации ЗАБОР-РЕГИОН'" href="https://www.behance.net/gallery/109236855/dizajn-i-razrabotka-sajta-dlja-stroitelnoj-organizacii" target="_blank"></a>
      <a class="behance-site" v-tooltip.hover.focus="'Портфолио на Behance'" href="https://www.behance.net/rampix-studio" target="_blank"></a>
    </div>
    <div class="logo-grid">
      <a class="logo-site" href="https://www.verhotour.com/" target="_blank"><img src="../assets/icons/verhotour-logo.svg"></a>
      <a class="logo-site" href="https://www.rampix.ru/" target="_blank"><img src="../assets/icons/rampix-logo.svg"></a>
      <a class="logo-site" href="https://www.cosmomap.ru/" target="_blank"><img src="../assets/icons/cosmomap-logo.svg"></a>
      <a class="logo-site" href="https://tresltd.ru/" target="_blank"><img src="../assets/icons/tres-logo.svg"></a>
      <a class="logo-site" href="https://zabor-region.ru/#/" target="_blank"><img src="../assets/icons/zr-logo.svg"></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PortfolioWork"
    }
</script>

<style>
.portfolio-container {
  padding: 2em 30em;
}
.portfolio-description {
  color: #565656;
  margin-left: 4em;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 1.2em;
  grid-row-gap: 1.2em;
  margin-top: 2em;
}
.verhotour-logo {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/verhotour-logo.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.verhotour-site {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/verhotour-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.rampix-site {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/rampix-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.cosmomap-site {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/cosmomap-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.slovakia-site {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/slovakia-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.tres-rebranding {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/tres-rebranding.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.tres-site {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/tres-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.csk-site {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/csk-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.zabor-region {
  display: block;
  width: 100%;
  height: 12em;
  background: url(../assets/images/zabor-region.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.behance-site {
  display: none;
  width: 100%;
  height: 12em;
  background: url(../assets/images/behance.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.verhotour-logo:hover, .verhotour-site:hover, .rampix-site:hover, .cosmomap-site:hover,
.slovakia-site:hover, .tres-rebranding:hover, .tres-site:hover, .csk-site:hover, .zabor-region:hover, .behance-site:hover {
  transition: all .6s ease;
  transform: scale(1.02);
  cursor: pointer;
}
.logo-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3em;
  align-items: center;
  margin-top: 2em;
}
.logo-site > img {
  width: 100%;
  filter: grayscale(100%);
  opacity: 0.5;
}
.logo-site:hover > img {
  filter: grayscale(0%);
  cursor: pointer;
  opacity: 1;
}
@media only screen and (max-width : 1680px) {
  .portfolio-container {
    padding: 2em 25em;
  }
}
@media only screen and (max-width : 1536px) {
  .portfolio-container {
    padding: 2em 18em;
  }
}
@media only screen and (max-width : 1366px) {
  .portfolio-container {
    padding: 2em 16em;
  }
}
@media only screen and (max-width : 1280px) {
  .portfolio-container {
    padding: 2em 15em;
  }
}
@media only screen and (max-width : 1150px) {
  .portfolio-container {
    padding: 2em 8em;
  }
}
@media only screen and (max-width : 1024px) {
  .portfolio-container {
    padding: 2em 3em;
  }
}
@media only screen and (max-width : 800px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .behance-site {
    display: block;
  }
  .verhotour-logo:hover, .verhotour-site:hover, .rampix-site:hover, .cosmomap-site:hover,
  .slovakia-site:hover, .tres-rebranding:hover, .tres-site:hover, .csk-site:hover, .zabor-region:hover, .behance-site:hover {
    transform: scale(1.02);
  }
}
@media only screen and (max-width : 600px) {
  .portfolio-description {
    margin-left: 0;
  }
  .logo-grid {
    grid-column-gap: 1em;
  }
}
@media only screen and (max-width : 500px) {
  .portfolio-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (max-width : 360px) {
  .portfolio-container {
    padding: 2em 2em;
  }
  .logo-grid {
    grid-column-gap: 1em;
  }
}
</style>