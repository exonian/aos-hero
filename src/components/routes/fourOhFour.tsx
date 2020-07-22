import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../App';
import { logPageView } from '../../utils/analytics';
import FooterComponent from '../footer';

const FourOhFour: React.FC = () => {

  useEffect(() => {
    logPageView()
  }, [])

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <h1>
          Page not found
        </h1>
        <p>Try going to the <Link to={ ROUTES.ANVIL }>Anvil of Apotheosis</Link></p>
      </div>
      <FooterComponent />
    </div>
  )
}

export default FourOhFour