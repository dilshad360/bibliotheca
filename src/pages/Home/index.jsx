import React, { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import styles from "./styles.module.css";
import Hero from "../../components/Hero/Hero";
import BookCard from "../../components/BookCard/BookCard";
import BlogCardSkeleton from "../../components/Skeleton/BlogCardSkeleton";
import { fetchRecords } from "../../utils/airtableService";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const check = sessionStorage.getItem("posts");

    if (check) {
      setPosts(JSON.parse(check));
    } else {
      try {
        const tableName = "Blog";
        const filterBy = "{status} = 'Published'";
        const Records = await fetchRecords(tableName, filterBy);
        setPosts(Records);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Hero />
      <div className={styles.main}>
        <h2 className={styles.title}>Posts</h2>
        {posts.length ? (
          <div className={styles.posts}>
            {posts.map((post) => (
              <BlogCard key={post.id} id={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className={styles.posts}>
            <BlogCardSkeleton cards={6} />
          </div>
        )}
      </div>
      <BookCard />
    </div>
  );
}

export default Home;
