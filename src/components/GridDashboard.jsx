import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { FormattedMessage } from "react-intl";
import { Button, Grid, IconButton } from "@mui/material";
import FormatListBulleted from "@mui/icons-material/FormatListBulleted";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LanguageIcon from "@mui/icons-material/Language";
import ResultLimit from "./ResultLimit";
import CustomDatePicker from "./CustomDatePicker";
import LoadingAndErrorWrapper from "../utils/LoadingAndErrorWrapper";
import AllTheArticlesContainer from "../containers/AllTheArticlesContainer";
import CountrySearch from "./CountrySearch";

const DEFAULT_RESULT_LIMIT = 100;
const DEFAULT_COUNTRY_VALUE = "US";
const DEFAULT_START_VALUE_YESTERDAY = dayjs().add(-1, "day");
const WIKIMEDIA_API_BASE_URL =
  "https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country";

const GridDashboard = () => {
  const [resultsLimit, setResultsLimit] = useState(DEFAULT_RESULT_LIMIT);
  const [dateValue, setDateValue] = useState(DEFAULT_START_VALUE_YESTERDAY);
  const [countrySearchValue, setCountrySearchValue] = useState(
    DEFAULT_COUNTRY_VALUE
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [wikiArticles, setWikiArticles] = useState(undefined);

  useEffect(() => {
    const dateUrlParms = `${dateValue.format("YYYY")}/${dateValue.format(
      "MM"
    )}/${dateValue.format("DD")}`;
    const wikiApiUrlParams = `${countrySearchValue}/all-access/${dateUrlParms}`;

    const wikiArticleFetch = async (baseApiUrl, urlParams) => {
      setIsLoading(true);
      try {
        const res = await fetch(`${baseApiUrl}/${urlParams}`);
        const apiResponse = await res.json();
        const articlesByResultLimit = apiResponse.items[0].articles.slice(
          0,
          resultsLimit
        );
        setWikiArticles(articlesByResultLimit);
        setIsLoading(false);
        setIsError(false);
        return apiResponse;
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
        console.log(error); //for debugging
        return error;
      }
    };

    wikiArticleFetch(WIKIMEDIA_API_BASE_URL, wikiApiUrlParams);
  }, [dateValue, resultsLimit, countrySearchValue]);

  return (
    <>
      <Grid container spacing={2} className="filter-grid-container">
        <Grid item xs={3} sm={3} md={1} lg={1}>
          <IconButton
            aria-label="calendar"
            size="large"
            className="color__light-green"
          >
            <CalendarTodayIcon size="large" />
          </IconButton>
        </Grid>
        <Grid item xs={9} sm={9} md={2} lg={2}>
          <CustomDatePicker
            dateValue={dateValue}
            setDateValue={setDateValue}
            maxDate={DEFAULT_START_VALUE_YESTERDAY}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={1} lg={1}>
          <IconButton
            aria-label="form-list"
            size="large"
            className="color__light-orange"
          >
            <FormatListBulleted size="large" />
          </IconButton>
        </Grid>
        <Grid item xs={9} sm={9} md={2} lg={2}>
          <ResultLimit
            resultsLimit={resultsLimit}
            setResultsLimit={setResultsLimit}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={1} lg={1}>
          <IconButton
            aria-label="form-list"
            size="large"
            className="color__light-blue"
          >
            <LanguageIcon size="large" />
          </IconButton>
        </Grid>
        <Grid item xs={9} sm={9} md={2} lg={2}>
          <CountrySearch
            countrySearchValue={countrySearchValue}
            setCountrySearchValue={setCountrySearchValue}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Button
            variant="contained"
            className="search-button color__dark-green"
            onClick={() => {
              console.log("button clicked");
            }}
          >
            <FormattedMessage
              id="filterOptionsContainer.searchButton"
              description="Search button"
              defaultMessage="Search"
            />
          </Button>
        </Grid>
      </Grid>
      <LoadingAndErrorWrapper isLoading={isLoading} isError={isError}>
        <AllTheArticlesContainer articles={wikiArticles} />
      </LoadingAndErrorWrapper>
    </>
  );
};

export default GridDashboard;
