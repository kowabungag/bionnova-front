"use client";

import * as styles from "./blog.module.scss";
import Container from "@/components/Container/Container";
import BlogCard from "@/components/BlogCard/BlogCard";

import { useTranslation } from "react-i18next";

const blogArticles = [
  {
    id: 0,
    time: "7 июня, 2024",
    title: "Безопасность лекарств: Как выбрать надежного производителя?",

    text: `При выборе медикаментов безопасность и надежность должны быть на первом месте. В
                этой статье мы расскажем, на что обращать внимание при выборе производителя
                лекарств, как проверять качество продукции и что означает сертификация GMP.`,
    img: "../../../media/img/card-photo.png",
  },
  {
    id: 1,
    time: "13 декабря, 2024",
    title: "Безопасность лекарств: Как выбрать надежного производителя?",

    text: `При выборе медикаментов безопасность и надежность должны быть на первом месте. В
                этой статье мы расскажем, на что обращать внимание при выборе производителя
                лекарств, как проверять качество продукции и что означает сертификация GMP.`,
    img: "../../../media/img/card-photo.png",
  },
  {
    id: 2,
    time: "6 июля, 2024",
    title: "Безопасность лекарств: Как выбрать надежного производителя?",

    text: `При выборе медикаментов безопасность и надежность должны быть на первом месте. В
                этой статье мы расскажем, на что обращать внимание при выборе производителя
                лекарств, как проверять качество продукции и что означает сертификация GMP.`,
    img: "../../../media/img/card-photo.png",
  },
  {
    id: 3,
    time: "26 марта, 2023",
    title: "Безопасность лекарств: Как выбрать надежного производителя?",

    text: `При выборе медикаментов безопасность и надежность должны быть на первом месте. В
                этой статье мы расскажем, на что обращать внимание при выборе производителя
                лекарств, как проверять качество продукции и что означает сертификация GMP.`,
    img: "../../../media/img/card-photo.png",
  },
];

const BlogPage = (index) => {
  const { t } = useTranslation();
  return (
    <>
      <Container sizeZero>
        <h2 className={styles.title}>{t("blog.recentArticles")}</h2>
        <div className={styles.cardsWrapper}>
          {blogArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default BlogPage;
