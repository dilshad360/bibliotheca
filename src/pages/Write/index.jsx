import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import Airtable from "airtable";
import backendUrl from "../../const/backendUrl";
import department from "../../const/departmentList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function Write() {
  const [values, setValues] = useState({
    title: "",
    content: "",
    author: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    status: "NEW"
  });

  const [contentEmpty, setcontentEmpty] = useState(false)

  const handleTitle = (e) => {
    setValues({ ...values, title: e.target.value });
  };
  const handleContent = (e) => {
    setValues({ ...values, content: e });
    setcontentEmpty(false)
  };
  const handleAuthor = (e) => {
    setValues({ ...values, author: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePhone = (e) => {
    setValues({ ...values, phone: e.target.value });
  };
  const handleDepartment = (e) => {
    setValues({ ...values, department: e.target.value });
  };
  const handleYear = (e) => {
    setValues({ ...values, year: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!values.content|| values.content==="<p><br></p>"){
      setcontentEmpty(true)
      notifyWarning();
      return;
    }
    base("Blog").create(
      [
        {
          fields: values,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          notifyError();
          return;
        }
        notifySuccess();
        clearForm();
      }
    );
  };

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    ],
  };

  const notifySuccess = () => toast.success("Thanks for being awesome! ✌");
  const notifyWarning = () => toast.warning("You forgot something! 🙁");
  const notifyError = () => toast.error("Something went wrong 😢");

  const clearForm = () => {
    setValues({
      ...values,
      title: "", 
      // content: "\n",
      author: "",
      department: "",
      year: "",
      email: "",
      phone: "",
    });
    // console.log(values)
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label>Author</label>
        <input
          type="text"
          placeholder="Name of author"
          value={values.author}
          onChange={handleAuthor}
          required
        />
        <label>Department</label>
        <select value={values.department} onChange={handleDepartment} required>
          <option>Select your department</option>
          {department.map((dept) => (
            <option value={dept.value} key={dept.value} >{dept.value}</option>
          ))}
        </select>
        <label>Join year</label>
        <input
          type="text"
          placeholder="Enter college joining year"
          value={values.year}
          onChange={handleYear}
          required
          maxLength="4"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email id"
          value={values.email}
          onChange={handleEmail}
          required
        />
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Your phone number"
          value={values.phone}
          onChange={handlePhone}
          required
        />
         <label>Title</label>
        <input
          type="text"
          placeholder="Title of your post"
          value={values.title}
          onChange={handleTitle}
          required
        />
        <label>Content</label>
        {contentEmpty && <p className={styles.contentEmpty}>You forgot to enter the content</p>}
        <ReactQuill
          className={styles.editor}
          modules={modules}
          value={values.content}
          onChange={handleContent}
          theme="snow"
        />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Write;
