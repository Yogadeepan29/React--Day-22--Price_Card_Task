import React from "react";
import Card from "./Components/PriceCard/Card";

const App = () => {
  const priceDetails = [
    {
      title: "FREE",
      price: "$0/month",
      features: {
        accessable: [
          "Single User",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access",
        ],
        notAccessable: [
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
          "Monthly Status Reports",
        ],
      },
    },

    {
      title: "PLUS",
      price: "$9/month",
      features: {
        accessable: [
          "5 Users",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
        ],
        notAccessable: ["Monthly Status Reports"],
      },
    },

    {
      title: "PRO",
      price: "$49/month",
      features: {
        accessable: [
          "Unlimited Users",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
          "Monthly Status Reports",
        ],
        notAccessable: [],
      },
    },
  ];

  return <>
    <section className="pricing my-5 py-5">
      <div className="container">
        <div className="row">
          {
          priceDetails.map((element,index) => {
            return <Card cardData={element} key={index} />
          })
        }
        </div>
      </div>
      </section>
    </>
};

export default App;
