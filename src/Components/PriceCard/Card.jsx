import React from "react";
import "./Card.css";

function Card(data) {
  return (
    <div className="col-lg-4 px-3 ">
      <div className="card mb-5">
        <div className="card-body">
          <h6 className="card-title text-center text-secondary">
            {data.cardData.title}
          </h6>
          <h1 className="card-price text-center">{data.cardData.price}</h1>
          <hr />
          <ul className="fa-ul">
            {data.cardData.features.accessable.map((feature) => (
              <li className="mb-3 fw-semibold">
                <span className="fa-li">
                  <i className="fas fa-check "></i>
                </span>
                {feature}
              </li>
            ))}
            {data.cardData.features.notAccessable.map((feature) => (
              <li className=" NA text-secondary mb-3 fw-semibold">
                <span className="fa-li">
                  <i className="fas fa-times"></i>
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="d-grid p-2">
            <a href="#" className="btn">
              BUTTON
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
