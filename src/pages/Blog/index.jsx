import React, { useState } from "react";
import Airtable from "airtable";
import { useEffect } from "react";
import { useParams } from "react-router";
import styles from "./styles.module.css";
import moment from "moment";
import Loader from "../../components/Loader/Loader";
import backendUrl from "../../const/backendUrl";
import noProfile from "../../assets/no_profile.jpg";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function Blog() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    getPost();
  });

  const getPost = async () => {
    base("Blog").find(`${params.id}`, (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      setPost(record.fields);
    });
  };

  return (
    <main className={styles.blog}>
      {post ? (
        <div>
          <img src={post.coverPhoto[0].url} className={styles.cover} alt="" />
          <div className={styles.title}>
            <div className={styles.authdetails}>
              {post.authorPhoto ? (
                <img src={post.authorPhoto[0].url} alt="" />
              ) : (
                <img src={noProfile} alt="" />
              )}
              <div className={styles.authtext}>
                <h4>{post.author}</h4>
                <h6>{moment(post.date_published).format("MMM d, YYYY")}</h6>
              </div>
            </div>
            <h2>{post.title}</h2>
          </div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Blog;
