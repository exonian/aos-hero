import React from 'react'
import { Link } from 'react-router-dom';
import { ROUTES } from '../../App';

const fourOhFour: React.FC = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <h1>
          Page not found
        </h1>
        <p>Try going to the <Link to={ ROUTES.ANVIL }>Anvil of Apotheosis</Link></p>
      </div>
    </div>
  )
}

export default fourOhFour