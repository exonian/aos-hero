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
        <p>Forge your custom hero on the Anvil of Apotheosis</p>
        <p>Website by <a href="https://twitter.com/rogue_michael">Michael Blatherwick</a>, everything else from Games Workshop.</p>
        <p>The site cannot yet do everything from the Anvil.<br />And it's currently an inconsistent mix of the <em>GHB 2020</em> and <em>Season of War: Thondia</em> versions.</p>
      </div>
      <div className="row">
        <div className="col-md-8">
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