import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import noProfile from "../../assets/no_profile.jpg";
import moment from "moment";

function BlogCard({ post, id }) {
  return (
    <Link to={`/blog/${id}`}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            src={post.fields.coverPhoto[0].thumbnails.large.url}
            alt=""
          />
        </div>
        <div className={styles.text}>
          {/* {post.fields.tag && <h6>{post.fields.tag}</h6> } */}
          <h2>{post.fields.title}</h2>
          <div className={styles.details}>
            <div className={styles.author}>
              {/* {post.fields.authorPhoto ? (
                <img src={post.fields.authorPhoto[0].url} alt="" />
              ) : (
                <img src={noProfile} alt="" />
              )} */}
              <h3>{post.fields.author}</h3>
            </div>
            <div className={styles.date}>
              <h3>{moment(post.fields.date_published).format("MMM d, YYYY")}</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
