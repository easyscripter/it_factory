<template>
  <div id="app">
    <div class="nav">
      <vs-navbar color="dark" text-white not-line center-collapsed square>
        <template #left>
          <img class="logo" src="./assets/logo.png" alt="Логотип" />
        </template>
        <vs-navbar-item to="/"> Список репититоров </vs-navbar-item>
        <vs-navbar-item> О нас </vs-navbar-item>
        <template #right>
          <vs-button warn border>Войти</vs-button>
          <vs-button color="#7d33ff">Регистрация</vs-button>
        </template>
      </vs-navbar>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
}
.logo {
  margin-left: 10px;
  max-width: 40px;
  max-height: 40px;
}
.vs-navbar-content {
  position: relative;
  z-index: 2;
  background-color: #000000;
  padding-bottom: 5px;
}
</style>
