import React from 'react'

import { WarscrollComponent } from "../warscroll";
import { EditorComponent } from "../editor";

const Anvil: React.FC = () => {
  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid text-center">
        <h1>
          AoS Hero
        </h1>
        <p>Sculpt your custom hero on the Anvil of Apotheosis</p>
      </div>
      <div className="row">
        <div className="col-md">
          <WarscrollComponent />
        </div>
        <div className="col-md">
          <EditorComponent />
        </div>
      </div>
    </div>
  )
}

export default Anvil