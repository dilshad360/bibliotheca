import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Airtable from "airtable";
import backendUrl from "../../const/backendUrl";
import Loader from "../Loader/Loader";

const base = new Airtable({ apiKey: `${backendUrl.secretKey}` }).base(
  `${backendUrl.airtableBase}`
);

function BookCard() {

  const [books, setBooks] = useState([]);

  console.log(books.length)

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
      {/* <ul className={styles.books}> */}
        {books.length ? (
          <ul className={styles.books}>
            {books.map((book) => (
              <li className={styles.book}>
                <img
                  src={book.fields.coverPhoto[0].url}
                  alt={book.fields.title}
                />
                <h5>{book.fields.title}</h5>
              </li>
            ))}
          </ul>
        ) : (
          <Loader />
        )}

        {/* <li className={styles.book}>
          <img
            src="https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li>
        <li className={styles.book}>
          <img
            src="https://librarycatalog.cityofwoodland.org/bookcover.php?size=large&id=96e9ef3d-5743-4309-821a-7cecea2f35f4&type=overdrive"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li>
        <li className={styles.book}>
          <img
            src="https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li>
        <li className={styles.book}>
          <img
            src="https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li>
        <li className={styles.book}>
          <img
            src="https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li>
        <li className={styles.book}>
          <img
            src="https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li>
        <li className={styles.book}>
          <img
            src="https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li>
        <li className={styles.book}>
          <img
            src="https://kbimages1-a.akamaihd.net/4bbdbac2-792f-4a02-9e92-4ad35cdab9ce/1200/1200/False/atomic-habits-an-easy-and-proven-way-to-build-good-habits-and-break-bad-ones.jpg"
            alt=""
          />
          <h5>Atomic Habits</h5>
        </li> */}
      {/* </ul> */}
    </div>
  );
}

export default BookCard;
