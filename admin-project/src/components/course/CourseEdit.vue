<template>
   <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bootstrap demo</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
    </head>
  <div>
    <h1>This is Edit Page</h1>

    <div class="container">
      <div class="alert bg-success my-3">
        <h4 class="text-center" style="color: white">Update Course</h4>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="field my-3">
            <label for="" class="form-label">Course Code</label>
            <input
              type="text"
              class="form-control"
              name="courseCode"
              v-model="courseCode"
            />
          </div>
          <!-- Other form fields -->
          <div class="field my-3">
              <label for="" class="form-label">Course Full Name</label>
              <input
                type="text"
                class="form-control"
                name="courseFullName"
                v-model="courseFullName"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Course Nick Name</label>
              <input
                type="text"
                class="form-control"
                name="courseNickName"
                v-model="courseNickName"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Course Duration</label>
              <input
                type="text"
                class="form-control"
                name="courseDuration"
                v-model="courseDuration"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Course Mode</label>
              <input
                type="text"
                class="form-control"
                name="courseMode"
                v-model="courseMode"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Affilated University</label>
              <input
                type="text"
                class="form-control"
                name="affilatedUniversity"
                v-model="affilatedUniversity"
              />
            </div>
          <button class="btn btn-primary" @click="updateCourse()">update</button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import axios from "axios";
import router from "@/router";

export default {
  name: "CourseEdit",
  data() {
    return {
      courseCode: "",
      courseFullName: "",
      courseNickName: "",
      courseDuration: "",
      courseMode: "",
      affilatedUniversity: "",
      courseId: null // Initialize courseId
    };
  },
  async created() {
    await this.getCourseData();
  },
  methods: {
    async getCourseData() {
      try {
        const route = useRoute();
        let id = route.params.id;
        this.courseId = id;
        const result = await axios.get(
          "http://localhost:3000/course/for/edit/" + id
        );
        // Set data from API response to form fields
        this.courseCode = result.data.data.courseCode;
        this.courseFullName = result.data.data.courseFullName;
        this.courseNickName = result.data.data.courseNickName;
        this.courseDuration = result.data.data.courseDuration;
        this.courseMode = result.data.data.courseMode;
        this.affilatedUniversity = result.data.data.affilatedUniversity;
      } catch (error) {
        console.error("Error fetching Course data:", error);
      }
    },
    async updateCourse() {
      try {
        let data = {
          courseCode: this.courseCode,
          courseFullName: this.courseFullName,
          courseNickName: this.courseNickName,
          courseDuration: this.courseDuration,
          courseMode: this.courseMode,
          affilatedUniversity: this.affilatedUniversity
        };
        let result = await axios({
          method: "put",
          url: "http://localhost:3000/course/edit/" + this.courseId,
          data: data
        });
        console.log(result, "result");
        if (result.data.success) {
          router.push({ path: "/course/list" });
        }
      } catch (error) {
        console.error("Error updating Course:", error);
      }
    }
  }
};
</script>
