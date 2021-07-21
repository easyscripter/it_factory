<template>
  <div id="teacher-profile-view">
    <p @click="bacToTeacherList" class="back-btn">Назад к списку репититоров</p>
    <div class="content">
      <div class="info-container">
        <div class="info-container__header">
          <p class="header__name">
            {{ $route.params.name }} {{ $route.params.surname }}
          </p>
          <div v-show="$route.params.isVerified" class="header__verified-icon">
            <img src="../assets/check.png" alt="Верификация" />
          </div>
        </div>
        <div class="info-container__bio">{{ $route.params.description }}</div>
        <div class="info-container__price">
          <h3>Цены:</h3>
          <p class="price-online">
            Онлайн занятия: {{ $route.params.price.online }}
          </p>
          <p class="price-offline">
            Офлайн занятия: {{ $route.params.price.offline }}
          </p>
        </div>
      </div>
      <div class="photo-container">
        <img :src="$route.params.photo" alt="Логотип препода" srcset="" />
      </div>
    </div>

    <div class="footer">
      <h2>Преимущества:</h2>
      <div class="feature-container">
        <ul>
          <li>Верифицированный профиль</li>
          <li>Встреча Онлайн</li>
          <li>Встреча Офлайн</li>
          <li>Сертификат о знаниях</li>
        </ul>
        <ul>
          <li>Знание языков</li>
          <li>Многолетний опыт</li>
          <li>Помощь в работе</li>
          <li>Методички</li>
        </ul>
        <ul>
          <li>Оптимальный план занятий</li>
          <li>Никаких доплат</li>
          <li>Материалы для обучения</li>
          <li>Для всех возрастов</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    bacToTeacherList() {
      this.$router.push({ path: "/teacher-list" });
    },
  },
};
</script>

<style lang="scss">
#teacher-profile-view {
  position: relative;
  z-index: 1;

  width: 100%;
  padding-top: 40px;
}
.back-btn {
  color: rgba(134, 134, 134, 0.6);
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: rgba(134, 134, 134, 0.9);
  }
}
.content {
  display: flex;
  justify-content: space-around;
}
.info-container {
  width: 30%;
  &__header {
    display: flex;
    align-items: center;
    .header__name {
      font-size: 26px;
      font-weight: bold;
    }
    .header__verified-icon img {
      width: 30px;
      height: 30px;
      margin-left: 15px;
    }
  }

  &__bio {
    margin-bottom: 15px;
    font-weight: 500;
  }

  &__price {
    margin-top: 60px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 10px;
    background-color: rgba(230, 122, 0, 0.133);
  }
}
.photo-container {
  img {
    width: 500px;
    height: 500px;
  }
}

.footer {
  margin-left: 200px;
}

.feature-container {
  display: flex;
  justify-content: space-around;
}
</style>