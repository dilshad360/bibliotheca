import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import moment from "moment";


function BlogCard({ post, id }) {
  return (
    <Link to={`/blog/${id}`}>
      <div className={styles.card}>
        <div>
          <div className={styles.author}>
            {post.fields.authorPhoto ? (
              <img src={post.fields.authorPhoto[0].url} alt="" />
            ) : (
              <img
                src="https://i.pinimg.com/736x/2a/40/6b/2a406bf58db22cc7818ad1ff48c158cf.jpg"
                alt=""
              />
            )}
            <h3>{post.fields.author}</h3>
          </div>
          <div className={styles.text}>
            <h2>{post.fields.title}</h2>
          </div>
          <div className={styles.details}>
            <div className={styles.date}>
              <h3>{moment(post.datePublished).format("MMM d, YYYY")}</h3>
            </div>
            {post.fields.tag && <h6>{post.fields.tag}</h6> }
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src={post.fields.coverPhoto[0].thumbnails.large.url} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
