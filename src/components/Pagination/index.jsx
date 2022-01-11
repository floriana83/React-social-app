import { useState, useEffect } from "react";
import { http } from "./../../libs/http";
import { arrayGenerator } from "./../../libs/general";
import styles from "./Pagination.module.scss";

const Pagination = ({ setActualButtonNum }) => {
  const [totButtonNum, setTotButtonNum] = useState([]);

  useEffect(() => {
    http(`/friends`).then((friendsList) => {
      setTotButtonNum(Math.ceil(friendsList.length / 10));
    });
  });

  return (
    <ul className={styles.paginationList}>
      <button className={styles.__prevAndNext}>← Prev</button>
      {arrayGenerator(totButtonNum).map((index) => (
        <li key={index}>
          <button onClick={() => setActualButtonNum(index + 1)}>
            {index + 1}
          </button>
        </li>
      ))}
      <button className={styles.__prevAndNext}>Next →</button>
    </ul>
  );
};

export default Pagination;