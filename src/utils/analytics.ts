import ReactGA from 'react-ga'
import { isProd, isTest } from "./env";

if (!isTest && process.env.REACT_APP_GA_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_ID, {
    titleCase: false,
    gaOptions: { siteSpeedSampleRate: 100 },
  })
}
  
/**
 * Sends a Google Analytics event
 */
export const logPageView = () => {
  if (isProd) {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}