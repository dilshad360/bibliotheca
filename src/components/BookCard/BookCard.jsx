import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Airtable from "airtable";
import backendUrl from "../../const/backendUrl";
import Loader from "../Loader/Loader";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function BookCard() {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {

    const check = sessionStorage.getItem('books');

    if (check) {
      setBooks(JSON.parse(check));
    } else {
      base("Book")
      .select({ view: "Published" })
      .eachPage(
        (records, fetchNextPage) => {
          sessionStorage.setItem("books", JSON.stringify(records));
          setBooks(records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            return;
          }
        }
      );
    }
  };

  return (
    <div className={styles.main}>
      <h2>Books</h2>
      {books.length ? (
        <ul className={styles.books}>
          {books.map((book) => (
            <li  key={book.id} className={styles.book}>
                <img
                  className={styles.bookCover}
                  src={book.fields.coverPhoto[0].url}
                  alt={book.fields.title}
                  onClick={() => {navigate(`/book/${book.id}`)}}
                  />
              {/* <h5>{book.fields.title}</h5> */}
            </li>
          ))}
        </ul>
      ) : (
        <Loader />
      )}

    </div>
  );
}

export default BookCard;
