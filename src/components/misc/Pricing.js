import React from "react";
import "./Pricing.css";

const Home = () => {
  return (
    <React.Fragment>
      <section className="content-container">
        <div className="columns">
          <ul className="price">
            <li className="col-header">Basic</li>
            <li className="grey">$ 9.99 / year</li>
            <li>No HD Quality</li>
            <li>1 user</li>
            <li>1 screen</li>
            {/* <li>Communiity support</li> */}
            <li className="grey">
              <button className="button">Sign Up</button>
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="col-header" style={{ backgroundColor: "#37387a" }}>
              Pro
            </li>
            <li className="grey">$ 24.99 / year</li>
            <li>HD Quality</li>
            <li>2 Users</li>
            <li>1 Screen</li>
            {/* <li>3 days SLA support</li> */}
            <li className="grey">
              <button className="button">Sign Up</button>
            </li>
          </ul>
        </div>

        <div className="columns">
          <ul className="price">
            <li className="col-header">Premium</li>
            <li className="grey">$ 49.99 / year</li>
            <li>HD Quality</li>
            <li>4 Users</li>
            <li>5 Screen</li>
            {/* <li>24×7×365 premium support</li> */}
            <li className="grey">
              <button className="button">Sign Up</button>
            </li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
