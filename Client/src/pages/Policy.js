import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy-EpicEcom"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p> Welcome to EpicEcom! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website, make a purchase, or interact with our services.</p>

  <p>Contact Information: If you have any questions or concerns about our privacy practices, please contact us at privacy@epicecom.com.</p>

<p>Thank you for trusting EpicEcom with your personal information. We are committed to providing you with a safe and secure shopping experience.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
