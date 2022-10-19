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
    base("Book")
      .select({ view: "Published" })
      .eachPage(
        (records, fetchNextPage) => {
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
  };

  return (
    <div className={styles.main}>
      <h1>Books</h1>
      {books.length ? (
        <ul className={styles.books}>
          {books.map((book) => (
            <li  key={book.id} className={styles.book}  onCLick={() => {navigate("/about")}} >
                <img
                  className={styles.bookCover}
                  src={book.fields.coverPhoto[0].url}
                  alt={book.fields.title}
                  onClick={() => {navigate(`/about/${book.id}`)}}
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
