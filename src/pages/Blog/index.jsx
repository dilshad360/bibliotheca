import React, { useState, useEffect } from "react";

import { useParams } from "react-router";
import styles from "./styles.module.css";
import moment from "moment";
import BlogSkeleton from "../../components/Skeleton/BlogSkeleton";
import { fetchRecordById } from "../../utils/airtableService";

function Blog() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPost = async () => {
    try {
      const tableName = "Blog";
      const recordId = `${params.id}`;
      const record = await fetchRecordById(tableName, recordId);
      setPost(record.fields);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.blog}>
      {post ? (
        <div>
          {post.coverPhoto && (
            <img src={post.coverPhoto[0].url} className={styles.cover} alt="" />
          )}

          <div className={styles.title}>
            <div className={styles.authdetails}>
              {/* {post.authorPhoto ? (
                <img src={post.authorPhoto[0].url} alt="" />
              ) : (
                <img src={noProfile} alt="" />
              )} */}
              <div className={styles.authtext}>
                <div className={styles.details}>
                  <h4>{post.author}</h4>
                  {post.department && (
                    <div className={styles.tag}>{post.department}</div>
                  )}
                  {post.year && <div className={styles.tag}>{post.year}</div>}
                </div>
                <h6>{moment(post.date_created).format("MMM D, YYYY")}</h6>
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
        <BlogSkeleton />
      )}
    </main>
  );
}

export default Blog;
