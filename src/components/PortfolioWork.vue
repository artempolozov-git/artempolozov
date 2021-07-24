<template>
  <div class="portfolio-container">
    <div class="title-wrap">
      <div class="title-container">
        <div class="icon"><img src="../assets/icons/portfolio.svg"></div>
        <h1 class="title">Портфолио</h1>
      </div>
      <div class="portfolio-description">
        Все коммерческие проекты являются действующими и выполняют свои функции в интернете
      </div>
    </div>
    <div class="portfolio-grid">
      <div class="container">
        <a class="verhotour-site" href="https://www.behance.net/gallery/116596921/Landing-page-UXUI" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/116596921/Landing-page-UXUI" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="verhotour-logo" href="https://www.behance.net/gallery/112095707/Tourism-logotype-VerhoTour-avtorskie-kvest-tury" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/112095707/Tourism-logotype-VerhoTour-avtorskie-kvest-tury" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="rampix-site" href="https://www.behance.net/gallery/110191637/veb-dizajn-i-razrabotka-Lading-page-UXUI-Design" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/110191637/veb-dizajn-i-razrabotka-Lading-page-UXUI-Design" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="cosmomap-site" href="https://www.behance.net/gallery/109451805/Website-veb-dizajn-i-razrabotka-sajta-UXUI-design" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/109451805/Website-veb-dizajn-i-razrabotka-sajta-UXUI-design" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="slovakia-site" href="https://www.behance.net/gallery/108974653/dizajn-glavnoj-stranicy-dlja-sajta-nedvizhimosti" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/108974653/dizajn-glavnoj-stranicy-dlja-sajta-nedvizhimosti" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="tres-rebranding" href="https://www.behance.net/gallery/108897951/rebrending-logotipa-dlja-studii-landshaftnogo-dizajna" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/108897951/rebrending-logotipa-dlja-studii-landshaftnogo-dizajna" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="tres-site" href="https://www.behance.net/gallery/109437093/Landing-page-veb-dizajn-i-razrabotka-sajta-UXUI" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/109437093/Landing-page-veb-dizajn-i-razrabotka-sajta-UXUI" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="csk-site" href="https://www.behance.net/gallery/109068201/sajt-dlja-magazina-stroitelnyh-materialov" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/109068201/sajt-dlja-magazina-stroitelnyh-materialov" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <div class="container">
        <a class="zabor-region" href="https://www.behance.net/gallery/109236855/dizajn-i-razrabotka-sajta-dlja-stroitelnoj-organizacii" target="_blank"></a>
        <a class="substrate" href="https://www.behance.net/gallery/109236855/dizajn-i-razrabotka-sajta-dlja-stroitelnoj-organizacii" target="_blank">Открыть проект на Behance<img src="../assets/icons/open-link.svg"></a>
      </div>
      <a class="behance-site" href="https://www.behance.net/artempolozov-beh" target="_blank"></a>
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
  padding: 2em 5em;
}
.portfolio-description {
  color: #565656;
  margin-left: 4em;
}
.title-wrap {
  padding: 0 25em;
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
  height: 25em;
  background: url(../assets/images/verhotour-logo.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.verhotour-site {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/verhotour-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.rampix-site {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/rampix-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.cosmomap-site {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/cosmomap-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.slovakia-site {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/slovakia-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.tres-rebranding {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/tres-rebranding.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.tres-site {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/tres-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.csk-site {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/csk-site.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.zabor-region {
  display: block;
  width: 100%;
  height: 25em;
  background: url(../assets/images/zabor-region.webp);
  background-size: cover;
  background-position: center;
  transition: all .6s ease;
}
.behance-site {
  display: none;
  width: 100%;
  height: 25em;
  background: url(../assets/images/behance.webp);
  background-size: cover;
  background-position: center;
  transition: all .2s ease;
}
.container {
  position: relative;
}
.substrate {
  text-align: center;
  font-family: YandexSansDisplay;
  font-weight: bold;
  font-size: 1.2em;
  color: white;
  text-decoration: none;
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  top:0;
  padding: 30px;
  display:none;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%);
}
.substrate > img {
  margin-left: 1em;
}
.container:hover .substrate {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.container:hover {
  transition: all .2s ease;
  transform: scale(1.01);
}
.verhotour-logo:hover, .verhotour-site:hover, .rampix-site:hover, .cosmomap-site:hover,
.slovakia-site:hover, .tres-rebranding:hover, .tres-site:hover, .csk-site:hover, .zabor-region:hover, .behance-site:hover {
  transition: all .2s ease;
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
  padding: 0 25em;
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
    padding: 2em 2em;
  }
  .title-wrap {
    padding: 0 23em;
  }
  .logo-grid {
    padding: 0 19em;
  }
}
@media only screen and (max-width : 1536px) {
  .title-wrap {
    padding: 0 16em;
  }
  .verhotour-logo, .verhotour-site, .rampix-site, .cosmomap-site,
  .slovakia-site, .tres-rebranding, .tres-site, .csk-site, .zabor-region, .behance-site {
    height: 21em;
  }
  .logo-grid {
    padding: 0 13em;
  }
}
@media only screen and (max-width : 1366px) {
  .title-wrap {
    padding: 0 14em;
  }
  .logo-grid {
    padding: 0 13em;
  }
  .verhotour-logo, .verhotour-site, .rampix-site, .cosmomap-site,
  .slovakia-site, .tres-rebranding, .tres-site, .csk-site, .zabor-region, .behance-site {
    height: 18em;
  }
}
@media only screen and (max-width : 1280px) {
  .title-wrap {
    padding: 0 13em;
  }
  .logo-grid {
    padding: 0 10em;
  }
  .substrate {
    font-size: 1em;
  }
}
@media only screen and (max-width : 1150px) {
  .title-wrap {
    padding: 0 6em;
  }
}
@media only screen and (max-width : 1024px) {
  .portfolio-container {
    padding: 2em 1em;
  }
  .substrate > img {
    display: none;
  }
  .title-wrap {
    padding: 0 2em;
  }
  .verhotour-logo, .verhotour-site, .rampix-site, .cosmomap-site,
  .slovakia-site, .tres-rebranding, .tres-site, .csk-site, .zabor-region, .behance-site {
    height: 14em;
  }
  .logo-grid {
    padding: 0 1em;
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
    display: none;
  }
}
@media only screen and (max-width : 533px) {
  .portfolio-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .verhotour-logo, .verhotour-site, .rampix-site, .cosmomap-site,
  .slovakia-site, .tres-rebranding, .tres-site, .csk-site, .zabor-region, .behance-site {
    height: 21em;
  }
}
@media only screen and (max-width : 360px) {
  .portfolio-container {
    padding: 2em 2em;
  }
}
</style>