import * as styles from "./blogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ article }) => {
  const { t } = useTranslation();
  // const BlogCardContent = [
  //   {
  //     id: 0,
  //     text: t("blogCard.post1.title"),
  //     excerp: t("blogCard.post0.excerp"),
  //   },
  //   {
  //     id: 1,
  //     text: t("blogCard.post1.title"),
  //     excerp: t("blogCard.post1.excerp"),
  //   },
  //   {
  //     id: 2,
  //     text: t("blogCard.post1.title"),
  //     excerp: t("blogCard.post2.excerp"),
  //   },
  // ];

  return (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={article.img}
        alt={article.title}
        width={500}
        height={412}
      />
      <span className={styles.cardTime}>{article.time}</span>
      <Link href={article.id.toString()}>
        <h3 className={styles.cardTitle}>{t("blogCard.post1.title")}</h3>
        <p className={styles.cardText}>{t("blogCard.post2.excerp")}</p>
      </Link>
      <div className={styles.cardTags}>
        {article.tags
          ? article.tags.map((tag, index) => (
              <Link href="#" className={styles.cardTag} key={index}>
                {tag}
              </Link>
            ))
          : ""}
      </div>
    </div>
  );
};

export default BlogCard;
