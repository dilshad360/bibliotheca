import React, { useState } from "react";
import Airtable from "airtable";
import { useEffect } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Loader from "../../components/Loader/Loader";
import backendUrl from "../../const/backendUrl";
import styles from "./styles.module.css";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    base("Table 1")
      .select({ view: "Published" })
      .eachPage(
        (records, fetchNextPage) => {
          setPosts(records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
  };

  return (
    <div>
      {posts.length ? (
        <div className={styles.main}>
          {posts.map((post) => (
            <BlogCard key={post.id} id={post.id} post={post} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
