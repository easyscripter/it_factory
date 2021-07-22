<template>
  <div class="teacher-card">
    <div class="teacher-card__photo">
      <img :src="photo" alt="Логотип препода" srcset="" />
    </div>
    <div class="teacher-card__title">
      {{ name }} {{ surname }}, {{ foramtedAge }}
    </div>
    <div class="teacher-card__description">
      Предмет: {{ subjectOfTeaching }}
    </div>
    <div class="teacher-card__opinion">Оценка: {{ opinion }}</div>
    <div class="teacher-card__footer">
      <vs-button @click="showProfile(id)" warn> Подробнее </vs-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
    photo: {
      required: true,
      type: String,
      default() {
        return "https://img.the-village-kz.com/the-village.com.kz/post_image-image/2uJXRlYK9W3EwrPvidfXKg.png";
      },
    },
    name: {
      required: true,
      type: String,
    },
    surname: {
      required: true,
      type: String,
    },
    subjectOfTeaching: {
      required: true,
      type: String,
    },
    opinion: {
      required: true,
      type: Number,
    },
    description: {
      type: String,
    },
    isVerified: {
      type: Boolean,
    },
    price: {
      type: Object,
    },
    age: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  computed: {
    foramtedAge() {
      let newAge = "";
      if (this.age % 100 >= 5 && this.age % 100 <= 20) {
        newAge = `${this.age} лет`;
      } else {
        if (this.age % 10 == 1) {
          newAge = `${this.age} год`;
        } else if (this.age % 10 >= 2 && this.age % 10 <= 4) {
          newAge = `${this.age} года`;
        } else {
          newAge = `${this.age} лет`;
        }
      }

      return newAge;
    },
  },
  methods: {
    showProfile(id) {
      this.$router.push({
        name: "Профиль репититора",
        params: {
          id: id,
          name: this.name,
          surname: this.surname,
          photo: this.photo,
          description: this.description,
          price: this.price,
          isVerified: this.isVerified,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.teacher-card {
  width: calc(18.18% - 10px);
  padding: 15px;
  display: flex;
  margin: 5px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  -webkit-box-shadow: -3.5px 2.5px 9px 0 #8d8d8d;
  -moz-box-shadow: -3.5px 2.5px 9px 0 #8d8d8d;
  box-shadow: -3.5px 2.5px 9px 0 #8d8d8d;
  margin-right: 10px;
  &__photo img {
    max-width: 90px;
    max-height: 90px;
    border-radius: 50%;
  }
  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  &__description {
    margin-bottom: 10px;
  }

  &__footer {
    margin-top: 10px;
  }
}
</style>