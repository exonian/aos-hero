import React, { useEffect } from 'react'

import { logPageView } from '../../utils/analytics';

const Anvil: React.FC = () => {

  useEffect(() => {
    logPageView()
  }, [])

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <h1>
          AoS Hero
        </h1>
        <p>Forge your custom hero on the Anvil of Apotheosis</p>
        <p>Returning soon for AoS4</p>
      </div>
    </div>
  )
}

export default Anvil