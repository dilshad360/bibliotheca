import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Airtable from "airtable";
import backendUrl from "../../const/backendUrl";
import Loader from "../../components/Loader/Loader";
import styles from "./styles.module.css";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function Book() {
  const params = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    getBook();
  });

  const getBook = async () => {
    base("Book").find(`${params.id}`, (err, record) => {
      if (err) {
        console.error(err);
        return;
      }
      setBook(record.fields);
    });
  };

  return (
    <div className={styles.main}>
      {book ? (
        <div className={styles.book}>
          <img src={book.coverPhoto[0].url} className="" alt="" />
          <div className={styles.details}>
            <h2>{book.title}</h2>
            <h5><span>Author:</span> {book.author}</h5>
            <p
            dangerouslySetInnerHTML={{ __html: book.content }}
            ></p>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Book;
