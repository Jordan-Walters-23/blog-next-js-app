import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

// Replace content with linkedIn blog posts
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}></p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/818819/pexels-photo-818819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jane Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/18327490/pexels-photo-18327490/free-photo-of-multi-colored-labels-screening-on-standing-man-in-eyeglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="blog image"
            fill={true}
            className={styles.image} 
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          Class senectus turpis fusce urna; eros habitant facilisis. Habitant
          molestie orci scelerisque dolor, scelerisque maximus curabitur
          vehicula nascetur. Pharetra luctus erat donec phasellus maecenas.
          Mauris rhoncus sit nunc sapien pharetra commodo gravida habitasse. Sit
          primis lobortis porta elementum justo, a gravida aliquam eget. Duis
          quisque consequat ultricies duis vivamus quis porta nisl? Habitasse
          sit sapien elementum torquent odio aliquet. Vivamus a vehicula rhoncus
          urna lobortis libero non.
          <br />
          <br />
          Imperdiet odio gravida suspendisse suscipit morbi. Fringilla iaculis
          neque dis velit; habitant velit. Viverra aenean dis praesent suscipit
          fames ad. Eros tempus ex sed eget ultricies leo suscipit lacus. Eu
          urna ipsum vel aliquet elementum eleifend tempus egestas. Penatibus
          nascetur euismod tortor ultrices maecenas; per nec finibus
          ullamcorper. Fusce ullamcorper maximus hendrerit erat amet netus per.
          Luctus urna auctor integer rutrum egestas duis volutpat.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
