import React from "react";
import ReactGA from "react-ga";

const TRACKING_ID = `${import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID}`;

const GoogleAnalytics = () => {
  React.useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default GoogleAnalytics;
