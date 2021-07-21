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
      teacherList: [
        {
          id: 1,
          name: "Олег",
          surname: "Хохлов",
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
          name: "Олег",
          surname: "Хохлов",
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
          name: "Олег",
          surname: "Хохлов",
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
          subjectOfTeaching: "Алгебра",
          opinion: 6.7,
          photo:
            "https://lh3.googleusercontent.com/proxy/SI7Ggs0CmX-Z9ijjZdPCrKvYj2Wh2wVag52vDsXaSBmb0_4aLToru_CDY-mv2DYEKb6XSPzSO4a6kjzXj0QGF4rvma3mPOIrPDEZnlF43zL9-T7MawIWo2DcwSXNZTq0eo57ZLBMfpZ0HQ",
          isVerified: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
        {
          id: 7,
          name: "Федор",
          surname: "Петров",
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
          subjectOfTeaching: "Русский язык",
          opinion: 8.0,
          photo: "https://pngimg.com/uploads/teacher/teacher_PNG75.png",
          isVerified: false,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis facere temporibus, debitis, harum adipisci assumenda cum perferendis sit a enim in, ea libero consequatur! Officiis suscipit consectetur illo libero?",
          price: {
            online: "999 руб скайп",
            offline: "1000 руб по договорненности",
          },
        },
      ],
    };
  },
  computed: {
    filteredTeacherList() {
      let filteredTeachers = this.teacherList;
      if (this.opinion && this.teachingSubject) {
        let opinionArray = this.opinion.split(",");
        filteredTeachers = this.teacherList.filter((teacher) => {
          return (
            teacher.opinion >= opinionArray[0] &&
            teacher.opinion <= opinionArray[1] &&
            teacher.subjectOfTeaching == this.teachingSubject
          );
        });
      } else if (this.opinion) {
        let opinionArray = this.opinion.split(",");
        filteredTeachers = this.teacherList.filter((teacher) => {
          return (
            teacher.opinion >= opinionArray[0] &&
            teacher.opinion <= opinionArray[1]
          );
        });
      } else if (this.teachingSubject) {
        filteredTeachers = this.teacherList.filter((teacher) => {
          return teacher.subjectOfTeaching == this.teachingSubject;
        });
      }

      return filteredTeachers;
    },
  },
  methods: {
    clearList() {
      (this.teachingSubject = null), (this.opinion = null);
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
</style>