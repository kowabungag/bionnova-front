import * as styles from "./blogCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const BlogCard = ({ article }) => {
  const { t } = useTranslation();
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
        <h3 className={styles.cardTitle}>{t("blogCard.post.title")}</h3>
        <p className={styles.cardText}>{t("blogCard.post.excerp")}</p>
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
