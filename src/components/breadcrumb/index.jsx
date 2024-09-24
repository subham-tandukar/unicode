import React from "react";
import styles from "./ok.module.scss";
import Link from "next/link";

export default function Breadcrumb({ prevPage = [], currentPage }) {
  return (
    <>
      <div className={styles["breadcrumb"]}>
        <ul>
          <li>
            <Link href="https://www.onlinekhabar.com/" target="_blank">
              Online Khabar
            </Link>
          </li>
          {prevPage.length > 0 &&
            prevPage.map((item, i) => (
              <li key={i}>
                <Link href={item.endPoint}>{item.pageName}</Link>
              </li>
            ))}
          <li className={styles["active"]}>{currentPage}</li>
        </ul>
      </div>
    </>
  );
}
