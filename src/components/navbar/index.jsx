"use client";
import React from "react";
import styles from './ok.module.scss';
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/helper/navItems";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <header>
      <div className={styles["site-header"]}>
        <div className="ok-container">
          <Link href="/" className={styles["site-logo"]}>
            <Image
              width={200}
              height={40}
              src="/img/ok-calendar-logo.png"
              alt="OK Unicode Logo"
            />
          </Link>
        </div>
      </div>
      <nav className={styles["site-nav"]}>
        <div className="ok-container">
          <ul>
            {navItems.map((item) => (
              <li
                key={item.path}
                className={`${pathName === item.path ? styles["current-page"] : ""}`}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
