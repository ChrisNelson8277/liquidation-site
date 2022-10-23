import React from "react";
import { GoX } from "react-icons/go";
import { IconContext } from "react-icons/lib";
import ReactDOM from "react-dom";
function infoModal(props) {
  return ReactDOM.createPortal(
    <>
      <div className="modal-background">
        <div className="modal-test">
          <div className="modal-header">
            <IconContext.Provider
              value={{
                className: "exit-icon",
              }}
            >
              <GoX
                onClick={() => {
                  props.openModal(false);
                }}
              />
            </IconContext.Provider>
          </div>
          <div className="item-container">
            <div className="item-name">
              <h1>{props.name}</h1>
            </div>
            <br />
            <div className="modal-item">
              <img className="info-img" src={props.img} alt="liquidation"></img>
            </div>
            <div>
              <table className="item-table">
                <tbody className="item-table-body">
                  <tr>
                    <th scope="row">
                      <h5>Price:</h5>
                    </th>
                    <td>{props.price}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <h5>Condition:</h5>
                    </th>
                    <td>{props.condition}</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <h5>Category:</h5>
                    </th>
                    <td>{props.category}</td>
                  </tr>
                </tbody>
              </table>
              <div className="item-desc">
                <h3>Product Details:</h3>
                <p className="item-desc2">{props.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default infoModal;
