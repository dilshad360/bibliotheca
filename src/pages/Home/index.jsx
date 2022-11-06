import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import BlogCard from "../../components/BlogCard/BlogCard";
import Loader from "../../components/Loader/Loader";
import backendUrl from "../../const/backendUrl";
import styles from "./styles.module.css";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    base("Blog")
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
      <Hero/>
      <div className={styles.main}>
      <h2 className={styles.title}>Posts</h2>
      {posts.length ? (
        <div className={styles.posts}>
          {posts.map((post) => (
            <BlogCard key={post.id} id={post.id} post={post} />
          ))}
        </div>
      ) : (
        <Loader />
        )}
        </div>
        <BookCard/>
    </div>
  );
}

export default Home;
