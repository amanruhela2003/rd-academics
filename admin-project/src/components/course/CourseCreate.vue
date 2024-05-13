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
    <div class="container">
      <div class="alert bg-success my-3">
        <h1 class="text-center" style="color: white">Create Course</h1>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="field my-3">
            <label for="" class="form-label">Course Code</label>
            <input type="text" class="form-control" v-model="courseCode" />
          </div>
          <div class="field my-3">
            <label for="" class="form-label">Course Full Name</label>
            <input type="text" class="form-control" v-model="courseFullName" />
          </div>
          <div class="field my-3">
            <label for="" class="form-label">Course Nick Name</label>
            <input type="text" class="form-control" v-model="courseNickName" />
          </div>
          <div class="field my-3">
            <label for="" class="form-label">Course Duration</label>
            <input type="text" class="form-control" v-model="courseDuration" />
          </div>
          <div class="field my-3">
            <label for="" class="form-label">Course Mode</label>
            <select class="form-control" v-model="courseMode">
                <option value="Semester">Semester</option>
                <option value="Yearly">Yearly</option>
            </select>    
          </div>
          <div class="field my-3">
            <label for="" class="form-label">Affilated University</label>
            <input type="text" class="form-control" v-model="affilatedUniversity" />
          </div>
  
          <button @click="createCourse()">Create Course</button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import router from "@/router";
  
  export default {
    data() {
      return {
        courseCode: "",
        courseFullName: "",
        courseNickName: "",
        courseDuration: "",
        courseMode: "",
        affilatedUniversity: "",

      };
    },
    methods: {
      async createCourse() {
        try {
          let data = {
            courseCode: this.courseCode,
            courseFullName: this.courseFullName,
            courseNickName: this.courseNickName,
            courseDuration: this.courseDuration,
            courseMode: this.courseMode,
            affilatedUniversity: this.affilatedUniversity,
          };
          let result = await axios.post("http://localhost:3000/course/create", data);
          console.log(result);
          if (result.data.success) {
            router.push({ path: "/course/list" });
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  