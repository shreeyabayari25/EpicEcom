import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - EpicEcom"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to EpicEcom, your ultimate destination for quality products tailored to every shopper. With personalized 'Women Mode' and 'Men Mode' features, we offer a unique browsing experience. Discover the latest fashion, tech gadgets, home essentials, and beauty products, all at competitive prices with unparalleled service. Thank you for choosing EpicEcom – where your shopping needs are our priority.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
