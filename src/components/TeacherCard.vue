<template>
  <div class="teacher-card">
    <div class="teacher-card__photo">
      <img :src="photo" alt="Логотип препода" srcset="" />
    </div>
    <div class="teacher-card__title">{{ name }} {{ surname }}</div>
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
  },
  data() {
    return {};
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