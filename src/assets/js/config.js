// Shared settings for the map, charts and data pages.
// This file loads first on each of those pages; everything here is a global.

// Where download files (score/, dots/, transit/) are hosted.
const FILES_BASE_URL = "https://transitcenter.github.io/ted-files";
// Summary CSVs ship with this site because the charts page fetches them.
const SUMMARY_BASE_URL = "/data/summary";

const regionKeys = ["BOS", "CHI", "LA", "NYC", "PHL", "SFO", "WAS"];
const periods = ["WEDAM", "WEDPM", "SATAM"];

// Fare year used for "affordable trips" in each region.
const fareYears = {
    "BOS": "f_2023",
    "CHI": "f_2020",
    "LA": "f_2020",
    "NYC": "f_2020",
    "PHL": "f_2020",
    "SFO": "f_2023",
    "WAS": "f_2023"
};
const fares2023 = regionKeys.filter((r) => fareYears[r] == "f_2023");

// Data dates, newest first. Add new dates to the top: the first entry is the default.
const dateList = [
    ['20250324', 'March 24, 2025'],
    ['20240304', 'March 4, 2024'],
    ['20230925', 'September 25, 2023'],
    ['20230327', 'March 27, 2023'],
    ['20220808', 'August 8, 2022'],
    ['20220328', 'March 28, 2022'],
    ['20210913', 'September 13, 2021'],
    ['20210712', 'July 12, 2021'],
    ['20210222', 'February 22, 2021'],
    ['20210118', 'January 18, 2021'],
    ['20201221', 'December 21, 2020'],
    ['20201116', 'November 16, 2020'],
    ['20201019', 'October 19, 2020'],
    ['20200921', 'September 21, 2020'],
    ['20200817', 'August 17, 2020'],
    ['20200720', 'July 20, 2020'],
    ['20200622', 'June 22, 2020'],
    ['20200511', 'May 11, 2020'],
    ['20200420', 'April 20, 2020'],
    ['20200316', 'March 16, 2020'],
    ['20200224', 'February 24, 2020'],
]
const defaultDate = dateList[0][0];
