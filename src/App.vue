<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  computed: {
      defaultViewKey: function () {
          return this.$route.name;
      }
  }
}
</script>

<style>
  html, body {
    height: 100%;
    font-size: 16px;
  }
  body {
    margin: initial;
    font-family: YandexSansDisplay;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  @font-face {
    font-family: YandexSansDisplay;
    src: url('./assets/YandexSansDisplay-Bold.ttf');
    font-weight: bold;
    font-display: fallback;
  }
  @font-face {
    font-family: YandexSansDisplay;
    src: url('./assets/YandexSansDisplay-Regular.ttf');
    font-weight: normal;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
</style>
