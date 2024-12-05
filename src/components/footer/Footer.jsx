import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Jordan Walters. All rights reserved</div>
      <div className={styles.social}>
        <Link href={"https://github.com/Jordan-Walters-23"} target="_blank">
          <Image
            src="/github-mark-white.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="github logo"
          />
        </Link>
        <Link href={"https://www.youtube.com"} target="_blank">
          <Image
            src="/youtube.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="Youtube logo"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/-jordan-walters/"}
          target="_blank"
        >
          <Image
            src="/LinkedIn.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="LinkedIn logo"
          />
        </Link>
        <Link href={"https://www.instagram.com"} target="_blank">
          <Image
            src="/insta.png"
            width={20}
            height={20}
            className={styles.icon}
            alt="Instagram logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
