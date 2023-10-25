import { useEffect, useState } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Collapse,
  Grid,
} from "@mui/material";
import LoadingAndErrorWrapper from "../utils/LoadingAndErrorWrapper";

const IndividualArticle = ({ article }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isCollapseDetails, setIsCollapsedDetails] = useState(null);
  const [articleSummary, setArticleSummary] = useState(null);

  useEffect(() => {
    if (!articleSummary && isCollapseDetails) {
      setIsLoading(true);

      const wikiArticleSummaryFetch = async (articleToFetch) => {
        try {
          const res = await fetch(`https://${articleToFetch.project}.org/api/rest_v1/page/summary/${articleToFetch.article}`);
          const apiResponse = await res.json();
          setArticleSummary(apiResponse.extract);
          setIsLoading(false);
          return apiResponse;
        } catch (error) {
          console.log(error); //for debugging
          setIsError(true);
          //   throw error;
        }
      };
      wikiArticleSummaryFetch(article);
    }
  }, [articleSummary, isCollapseDetails, article]);

  const cleanArticleTitle = (article) => {
    return article.article.replace(/_/g, " ");
  };

  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => setIsCollapsedDetails(!isCollapseDetails)}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Typography>
                <FormattedNumber value={article.rank} />
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8}>
              <Typography variant="h6">{cleanArticleTitle(article)}</Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3}>
              <Typography>
                <FormattedNumber value={article.views_ceil} />
                <FormattedMessage
                  id="article.cardViews"
                  description="Sub header for article view count"
                  defaultMessage=" views"
                />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>

      <Collapse in={isCollapseDetails}>
        <CardContent>
          <LoadingAndErrorWrapper isLoading={isLoading} isError={isError}>
            <Typography>{articleSummary}</Typography>
          </LoadingAndErrorWrapper>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default IndividualArticle;
