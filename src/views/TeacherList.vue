<template>
  <div id="teacher-list-view">
    <h1>Список репититоров</h1>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="10">
        <div class="teacher-cards-container">
          <teacher-card
            v-for="(teacher, index) in filteredTeacherList"
            :key="index"
            :id="teacher.id"
            :photo="teacher.photo"
            :name="teacher.name"
            :surname="teacher.surname"
            :subjectOfTeaching="teacher.subjectOfTeaching"
            :opinion="teacher.opinion"
            :isVerified="teacher.isVerified"
            :description="teacher.description"
            :price="teacher.price"
            :age="teacher.age"
          ></teacher-card>
        </div>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="2">
        <div class="filter-container">
          <vs-sidebar right open square background="warn"
            ><template #header>Подбор по параметрам </template>
            <vs-sidebar-item>
              Возраст:
              <template>
                <div class="range-container">
                  <input
                    type="range"
                    min="10"
                    step="1"
                    max="100"
                    v-model="minAge"
                  />
                  <input
                    class="min-number-field"
                    type="number"
                    disabled
                    v-model="minAge"
                  />
                  <input
                    type="range"
                    min="10"
                    step="1"
                    max="100"
                    v-model="maxAge"
                  />
                  <input
                    class="max-number-field"
                    type="number"
                    disabled
                    v-model="maxAge"
                  />
                </div>
              </template>
            </vs-sidebar-item>
            <vs-sidebar-item>
              Предмет:
              <template
                ><vs-radio val="Математика" v-model="teachingSubject">
                  Математика </vs-radio
                ><vs-radio val="Алгебра" v-model="teachingSubject">
                  Алгебра </vs-radio
                ><vs-radio val="Физика" v-model="teachingSubject">
                  Физика
                </vs-radio>
                <vs-radio val="Химия" v-model="teachingSubject">
                  Химия
                </vs-radio>
                <vs-radio val="Русский язык" v-model="teachingSubject">
                  Русский язык
                </vs-radio>
                <vs-radio val="Информатика" v-model="teachingSubject">
                  Информатика
                </vs-radio>
              </template>
            </vs-sidebar-item>
            <vs-sidebar-item>
              Оценка:
              <template
                ><vs-radio val="0,3.0" v-model="opinion"> 0 - 3.0 </vs-radio
                ><vs-radio val="3.1,5.1" v-model="opinion"> 3.1 - 5.1 </vs-radio
                ><vs-radio val="5.2,7.1" v-model="opinion">
                  5.2 - 7.1
                </vs-radio>
                <vs-radio val="7.2,10.0" v-model="opinion">
                  7.2 - 10.0
                </vs-radio>
              </template>
            </vs-sidebar-item>
            <vs-sidebar-item>
              <template>
                Вид занятий:
                <vs-radio val="online" v-model="typeOfLesson"> Онлайн</vs-radio>
                <vs-radio val="offline" v-model="typeOfLesson">
                  Офлайн</vs-radio
                >
              </template>
            </vs-sidebar-item>
            <vs-sidebar-item>
              <template>
                Верификация:
                <vs-radio val="true" v-model="isVerifiedProfile">
                  Верифицированный</vs-radio
                >
              </template>
            </vs-sidebar-item>
            <template #footer>
              <vs-button @click="clearList" class="clear-list-btn" square
                >Очистить список</vs-button
              >
            </template>
          </vs-sidebar>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import TeacherCard from "@/components/TeacherCard.vue";
export default {
  components: {
    TeacherCard,
  },
  data() {
    return {
      teachingSubject: null,
      opinion: null,
      minAgeValue: 10,
      maxAgeValue: 100,
      typeOfLesson: null,
      isVerifiedProfile: null,
      teacherList: [
        {
          id: 1,
          name: "Олег",
          surname: "Хохлов",
          age: 21,
          subjectOfTeaching: "Математика",
          opinion: 4.0,
          photo:
            "https://w7.pngwing.com/pngs/993/555/png-transparent-b-k-s-iyengar-alive-and-shine-center-teacher-yoga-author-teacher-face-head-author.png",
          isVerified: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 2,
          name: "Игорь",
          surname: "Хохлов",
          age: 20,
          subjectOfTeaching: "Математика",
          opinion: 4.5,
          photo:
            "https://w7.pngwing.com/pngs/993/555/png-transparent-b-k-s-iyengar-alive-and-shine-center-teacher-yoga-author-teacher-face-head-author.png",
          isVerified: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 3,
          name: "Петр",
          surname: "Хохлов",
          age: 23,
          subjectOfTeaching: "Математика",
          opinion: 9.0,
          photo:
            "https://w7.pngwing.com/pngs/993/555/png-transparent-b-k-s-iyengar-alive-and-shine-center-teacher-yoga-author-teacher-face-head-author.png",
          isVerified: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 4,
          name: "Ольга",
          surname: "Иванова",
          age: 43,
          subjectOfTeaching: "Физика",
          opinion: 5.0,
          photo: "https://pngimg.com/uploads/teacher/teacher_PNG75.png",
          isVerified: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 5,
          name: "Федор",
          surname: "Овчинников",
          age: 32,
          subjectOfTeaching: "Химия",
          opinion: 7.0,
          photo: "https://pngimg.com/uploads/teacher/teacher_PNG24.png",
          isVerified: false,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 6,
          name: "Наталья",
          surname: "Петрова",
          age: 20,
          subjectOfTeaching: "Алгебра",
          opinion: 6.7,
          photo:
            "https://www.talisman-online.ru/storage/app/uploads/public/5ed/4b3/6a0/5ed4b36a0c226507174014.png",
          isVerified: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 7,
          name: "Федор",
          surname: "Петров",
          age: 45,
          subjectOfTeaching: "Информатика",
          opinion: 8.0,
          photo: "http://pngimg.com/uploads/teacher/teacher_PNG20.png",
          isVerified: false,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 8,
          name: "Рита",
          surname: "Федорова",
          age: 23,
          subjectOfTeaching: "Русский язык",
          opinion: 8.0,
          photo: "https://pngimg.com/uploads/teacher/teacher_PNG75.png",
          isVerified: false,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "",
            offline: "1000 руб по договорненности",
          },
        },
      ],
    };
  },
  computed: {
    filteredTeacherList() {
      let filteredTeachers = this.teacherList;

      filteredTeachers = this.teacherList.filter((teacher) => {
        return teacher.age >= this.minAge && teacher.age <= this.maxAge;
      });

      if (this.teachingSubject) {
        filteredTeachers = filteredTeachers.filter((teacher) => {
          return teacher.subjectOfTeaching == this.teachingSubject;
        });
      }

      if (this.opinion) {
        filteredTeachers = filteredTeachers.filter((teacher) => {
          let opinionArray = this.opinion.split(",");

          return (
            teacher.opinion >= opinionArray[0] &&
            teacher.opinion <= opinionArray[1]
          );
        });
      }

      if (this.typeOfLesson) {
        filteredTeachers = filteredTeachers.filter((teacher) => {
          return teacher.price[this.typeOfLesson] !== "";
        });
      }

      if (this.isVerifiedProfile === "true") {
        filteredTeachers = filteredTeachers.filter((teacher) => {
          return teacher.isVerified == Boolean(this.isVerifiedProfile);
        });
      }

      return filteredTeachers;
    },
    minAge: {
      get: function () {
        var val = parseInt(this.minAgeValue);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val > this.maxAgeValue) {
          this.maxAgeValue = val;
        }
        this.minAgeValue = val;
      },
    },
    maxAge: {
      get: function () {
        var val = parseInt(this.maxAgeValue);
        return val;
      },
      set: function (val) {
        val = parseInt(val);
        if (val < this.minAgeValue) {
          this.minAgeValue = val;
        }
        this.maxAgeValue = val;
      },
    },
  },
  methods: {
    clearList() {
      (this.teachingSubject = null),
        (this.opinion = null),
        (this.typeOfLesson = null),
        (this.isVerifiedProfile = null);
    },
  },
};
</script>

<style lang="scss">
#teacher-list-view {
  position: relative;
  z-index: 1;
  width: 100%;
  padding-top: 100px;
}

.vs-sidebar {
  &__header {
    margin-top: 100px;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
  }
}

.filter-container {
  color: #ffffff;
  &__subjectOfTeaching {
    display: flex;
  }
}
.teacher-cards-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.clear-list-btn {
  width: 100%;
}

.vs-radio-content {
  justify-content: flex-start !important;
}

.range-container input[type="range"] {
  position: absolute;
  left: 15px;
  bottom: 0;
}
.min-number-field,
.max-number-field {
  width: 50%;
  background-color: #fff;
  font-weight: bold;
}
input[type="range"] {
  -webkit-appearance: none;
  width: 90%;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #8802b1;
}

input[type="range"]:focus::-ms-fill-lower {
  background: #8802b1;
}

input[type="range"]:focus::-ms-fill-upper {
  background: #8802b1;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #8802b1;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #8802b1;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #ec8003;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
</style>