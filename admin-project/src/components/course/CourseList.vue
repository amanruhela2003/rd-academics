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
    <div v-if="courseList.length">
      <h1>Course List</h1>
      <!-- {{ userList }} -->
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Course Code</th>
            <th scope="col">Course Full Name</th>
            <th scope="col">Course Nick Name</th>
            <th scope="col">Course Duration</th>
            <th scope="col">Course Mode</th>
            <th scope="col">Affilated University</th>
            <th scope="col">Action</th>
          </tr>
          <tr v-for="(course, index) in courseList" :key="index">
            <td>{{ course.courseCode }}</td>
            <td>{{ course.courseFullName }}</td>
            <td>{{ course.courseNickName }}</td>
            <td>{{ course.courseDuration }}</td>
            <td>{{ course.courseMode }}</td>
            <td>{{ course.affilatedUniversity }}</td>
            <td>
              <button class="btn btn-primary" @click="openEditPage(course._id)">
                Edit
              </button>
              <button class="btn btn-primary p-1" @click="deleteCourse(course._id)">
                Delete
              </button>
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div v-else>
      <h1>No Record Found</h1>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import router from "@/router";
  export default {
    name: "CourseList",
    data() {
      return {
        courseList: [],
      };
    },
    created() {
      this.getCoursesList();
    },
    methods: {
      async getCoursesList() {
        let result = await axios({
          method: "get",
          url: "http://localhost:3000/course/list",
        });
        console.log(result);
        this.courseList = result.data.data;
      },
      openEditPage(id) {
        router.push({ path: "/course/edit" + "/" + id });
      },
      async deleteCourse(id) {
        let result = await axios({
          method: "delete",
          url: "http://localhost:3000/course/delete/" + id,
        });
        if (result.data.success) {
          this.getCoursesList();
        }
      },
    },
  };
  </script>
  