import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beat-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>

       { /*<img
          src={urlFor(heroBanner.image)}
          alt="doggo"
          className="hero-banner-image"
        />*/}
      </div>
      <div>
        <Link href="/product/ID">
          <button type="button">Shop Now</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
