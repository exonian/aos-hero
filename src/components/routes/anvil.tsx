import React, { useEffect } from 'react'

import { WarscrollComponent } from "../warscroll/warscroll";
import { EditorComponent } from "../editor";
import { logPageView } from '../../utils/analytics';
import FooterComponent from '../footer';

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
        <p>Sculpt your custom hero on the Anvil of Apotheosis</p>
        <p>Website by <a href="https://twitter.com/rogue_michael">Michael Blatherwick</a>, everything else from GHB 2020.</p>
      </div>
      <div className="row">
        <div className="col-md-auto">
          <WarscrollComponent />
        </div>
        <div className="col-md">
          <EditorComponent />
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default Anvil