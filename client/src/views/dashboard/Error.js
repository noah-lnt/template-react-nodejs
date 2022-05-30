import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="body">
          <div className="header"></div>
          <p className="m-auto">Erreur 404</p>

          <div className="footer">
            <h4 className="white mt-0">Contact</h4>
            <div className="d-flex white">
              <span>E-mail : </span>
              <a href="mailto:contact@sahadevia.fr" className="ml-5 white">
                contact@sahadevia.fr
              </a>
            </div>
            <div className="d-flex white">
              <span>Téléphone : </span>
              <a href="tel:0623761142" className="ml-5 white">
                06 23 76 11 42
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
