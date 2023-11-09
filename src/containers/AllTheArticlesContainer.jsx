import React from "react";
import Box from "@mui/material/Box";
import IndividualArticle from "../components/IndividualArticle";

const AllTheArticlesContainer = ({ articles }) => {
  return articles ? (
    <Box>
      {articles.map((article) => (
        <IndividualArticle
          key={`${article.rank}_${article.article}`}
          article={article}
        />
      ))}
    </Box>
  ) : (
    <></>
  );
};

export default AllTheArticlesContainer;
