const Course = require('../models/Course')
const createCourse = async (req, res) => {
  try {
    console.log(req.body)
    let course = new Course(req.body)
    course = await course.save()
    res.status(200).send({ success: true, message: "Course Created", data: '' })
  } catch (err) {
    console.log(err)
  }
}

const getCoursesList = async (req, res) => {
  try {
    console.log(req.body);
    let courses = await Course.find({});
    console.log(courses, "courses");
    res
      .status(200)
      .send({ success: true, message: "Course data fetch success", data: courses });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Something fetch error", data: "" });
  }
};

const getCourseForEdit = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "id");
    let course = await Course.findOne({ _id: id });
    console.log(course, "course..");
    res.status(200).send({ success: true, message: " edit ", data: course });
  } catch (error) {
    console.log(error);
    res.status(200).send({ success: false, message: " edit ", data: " " });
  }
};

const updateCourse = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id, "id");
    let course = await Course.findOne({ _id: id });
    console.log(course, "course");
    course.courseCode = req.body.courseCode;
    course.courseFullName = req.body.courseFullName;
    course.courseNickName = req.body.courseNickName;
    course.courseDuration = req.body.courseDuration;
    course.courseMode = req.body.courseMode;
    course.affilatedUniversity = req.body.affilatedUniversity;
    course = await course.save();
    res
      .status(200)
      .send({ success: true, message: "Course Udated Sucessfully", data: course });
  } catch (error) {
    console.error("Error updating course:", error);
    res
      .status(500)
      .send({ success: false, message: "something went wrong", data: "" });
  }
};

const deleteCourse = async (req, res) => {
  try {
    id = req.params.id;
    let course = await Course.deleteOne({ _id: id });
    res
      .status(200)
      .send({ success: true, message: "Course Deleted Succesfully", data: course });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "something went wrong", data: "" });
  }
};
module.exports = {
  createCourse,
  getCoursesList,
  getCourseForEdit,
  updateCourse,
  deleteCourse,
}