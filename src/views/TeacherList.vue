<template>
  <div id="teacher-list-view">
    <h1>Список репититоров</h1>
    <div class="filter-container">
      <vs-sidebar right open square background="warn"
        ><template #header>Подбор по параметрам </template>
        <vs-sidebar-item>
          Предмет:
          <template
            ><vs-checkbox v-model="teachingSubject"> Математика </vs-checkbox
            ><vs-checkbox v-model="teachingSubject"> Алгебра </vs-checkbox
            ><vs-checkbox v-model="teachingSubject"> Физика </vs-checkbox>
            <vs-checkbox v-model="teachingSubject"> Химия </vs-checkbox>
            <vs-checkbox v-model="teachingSubject"> Русский язык </vs-checkbox>
          </template>
        </vs-sidebar-item>
        <vs-sidebar-item>
          Оценка:
          <template
            ><vs-checkbox v-model="opinion"> 1.0 - 3.0 </vs-checkbox
            ><vs-checkbox v-model="opinion"> 3.1 - 5.1 </vs-checkbox
            ><vs-checkbox v-model="opinion"> 5.2 - 7.2 </vs-checkbox>
            <vs-checkbox v-model="opinion"> 7.3 - 10.0 </vs-checkbox>
          </template>
        </vs-sidebar-item>
        <template #footer>
          <vs-button danger class="clear-list-btn" square
            >Очистить список</vs-button
          >
        </template>
      </vs-sidebar>
    </div>
    <div class="teacher-cards-container">
      <teacher-card
        v-for="(teacher, index) in teacherList"
        :key="index"
        :id="teacher.id"
        :photo="teacher.photo"
        :name="teacher.name"
        :surname="teacher.surname"
        :subjectOfTeaching="teacher.subjectOfTeaching"
        :opinion="teacher.opinion"
      ></teacher-card>
    </div>
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
      teachingSubject: "",
      opinion: "",
      teacherList: [
        {
          id: 1,
          name: "Олег",
          surname: "Хохлов",
          subjectOfTeaching: "Математика",
          opinion: 9.0,
          photo:
            "https://w7.pngwing.com/pngs/993/555/png-transparent-b-k-s-iyengar-alive-and-shine-center-teacher-yoga-author-teacher-face-head-author.png",
        },
        {
          id: 2,
          name: "Ольга",
          surname: "Иванова",
          subjectOfTeaching: "Физика",
          opinion: 5.0,
          photo: "https://pngimg.com/uploads/teacher/teacher_PNG75.png",
        },
        {
          id: 3,
          name: "Федор",
          surname: "Овчинников",
          subjectOfTeaching: "Химия",
          opinion: 7.0,
          photo: "https://pngimg.com/uploads/teacher/teacher_PNG24.png",
        },
        {
          id: 4,
          name: "Наталья",
          surname: "Петрова",
          subjectOfTeaching: "Алгебра",
          opinion: 6.7,
          photo:
            "https://lh3.googleusercontent.com/proxy/cMB5MXJXiQl9dOINNx688mLgnj85_7HxN4hQFVEGhO-bP-BdkaC-BwtyWQC1U1ZWZXSuf2bGXix3RqOrQgw7cEYIZI-Jyfuj-m6lyVYBeaIqeso4HKwMz1EEhYq3fWGiJWoZu_n2u0Hkog",
        },
        {
          id: 5,
          name: "Федор",
          surname: "Петров",
          subjectOfTeaching: "Информатика",
          opinion: 8.0,
          photo: "http://pngimg.com/uploads/teacher/teacher_PNG20.png",
        },
        {
          id: 5,
          name: "Рита",
          surname: "Федорова",
          subjectOfTeaching: "Русский язык",
          opinion: 8.0,
          photo: "https://pngimg.com/uploads/teacher/teacher_PNG75.png",
        },
      ],
    };
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
  width: 85%;
  display: flex;
  justify-content: space-around;
}

.clear-list-btn {
  width: 100%;
}
</style>