import ReactGA from 'react-ga'
import { isProd, isTest, isDev } from "./env";

if (!isTest && process.env.REACT_APP_GA_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_ID, {
    titleCase: false,
    gaOptions: { siteSpeedSampleRate: 100 },
  })
}
  
/**
 * Sends a Google Analytics page view event
 */
export const logPageView = () => {
  if (isProd) {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
}

/**
 * Generic wrapper for logging events
 * Will print to console in dev, will actually log in prod
 */
const logToGA = (event: { category: string; action: string; label: string }) => {
  if (isDev) {
    console.log(`GA Event: `, event)
  } else if (isProd) {
    ReactGA.event(event)
  }
}

/**
 * Used for logging individual units, traits, abilities, etc
 * @param type
 * @param name
 */
export const logSelection = (type: string, name: string) => {
  if (!type || !name) return

  logToGA({
    category: `${type}`,
    action: `Selection`,
    label: `${name}`,
  })
}