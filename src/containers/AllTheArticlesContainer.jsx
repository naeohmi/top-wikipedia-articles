import React from "react";
import Box from "@mui/material/Box";
import IndividualArticle from "../components/IndividualArticle";

const AllTheArticlesContainer = ({ articles }) => {
  
  // IDEA - add data filter layer so main pages are not 
  // displayed, because eye sore to end user 
  // const isDoNotDisplayArticle = (article) => {
  //   const doNotDisplayList = [
  //     "Main_Page",
  //     "Special:Search",
  //     "Wikipedia:Featured_pictures",
  //   ];
  //   return doNotDisplayList.includes(article.article);
  // };

  return (
    <Box>
      {articles.map((article) => (
        <IndividualArticle
          key={`${article.rank}_${article.article}`}
          article={article}
        />
      ))}
    </Box>
  );
};

export default AllTheArticlesContainer;
