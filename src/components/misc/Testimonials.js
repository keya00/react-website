import React from "react";
import user1 from "../../images/patrick.png";
import user2 from "../../images/nan.jpg";
import "./Testimonials.css";

const Home = () => {
  return (
    <>
      <section className="content-container">
        <center>
          <div className="textArea">
            <h2>Testimonials</h2>
            <p>What others say about us.</p>
          </div>
        </center>
        <div className="cust-container">
          <img src={user1} alt="Avatar" style={{ width: "90px" }} />
          <p>
            <span>John Doe.</span> Director
          </p>
          <p>Great Movies to Watch</p>
        </div>

        <div className="cust-container">
          <img src={user2} alt="Avatar" style={{ width: "90px" }} />
          <p>
            <span>Rebecca Flex.</span> Reporter
          </p>
          <p>Nice enviroment to relax and enjoy</p>
        </div>
      </section>
    </>
  );
};

export default Home;
