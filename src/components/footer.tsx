import React from 'react'


const FooterComponent = () => {
    return (
      <div className="container">
        <DisclaimerComponent />
      </div>
    )
  }
  
export default FooterComponent
  
const DisclaimerComponent = () => {
  return (
    <div className={`row justify-content-center text-center`}>
      <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <small>
          Disclaimer: This tool is in no way endorsed or sanctioned by Games Workshop - it is unofficial and fan-made.<br />
          I take absolutely no credit for any of the Games Workshop content displayed above.<br />
          This tool was only ever intended to make it easier to use the Anvil of Apotheosis tool in General's Handbook
          2020, so please go buy it if you like this web version!
        </small>
      </div>
    </div>
  )
}