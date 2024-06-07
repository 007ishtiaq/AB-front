import React from "react";
import { Link } from "react-router-dom";
import "./Catebanner.css";
import sampleImg from "../../images/catebanner/sample600x479.webp";
import { ReactComponent as Dishwashersvg } from "../../images/homepage/catebanner/dishwasher.svg";
import { ReactComponent as Kettlesvg } from "../../images/homepage/catebanner/kettle.svg";
import { ReactComponent as Fryersvg } from "../../images/homepage/catebanner/fryer.svg";
import { ReactComponent as Ovensvg } from "../../images/homepage/catebanner/oven.svg";
import { ReactComponent as Cookingrangesvg } from "../../images/homepage/catebanner/cookingrange.svg";
import { ReactComponent as Blandersvg } from "../../images/homepage/catebanner/blander.svg";

export default function Catebanner() {
  return (
    <div class="cardcontainer">
      <div class="insidecont">
        <div class="contentcont">
          <div class="productsarea">
            <div className="catebannercont">
              <div className="cbannercont">
                <img src={sampleImg} alt="" />
              </div>
              <div className="ccatecont">
                <div className="catenameabove">
                  <p>Kitchen Appliances</p>
                  <span>
                    Top-Rated Kitchen Appliances: Elevate Your Culinary
                    Experience Today!
                  </span>
                </div>
                <div className="catenamebelow">
                  <div className="catenamerow">
                    <Link to={`/shop?Dishwashers`}>
                      <div className="catenamecont">
                        <Dishwashersvg className="catebannersvg" />
                        <p>Dishwashers</p>
                      </div>
                    </Link>
                    <Link to={`/shop?Kettle`}>
                      <div className="catenamecont">
                        <Kettlesvg className="catebannersvg" />
                        <p>Electric Kettle</p>
                      </div>
                    </Link>
                    <Link to={`/shop?Fryers`}>
                      <div className="catenamecont">
                        <Fryersvg className="catebannersvg" />
                        <p>Air Fryers</p>
                      </div>
                    </Link>
                  </div>
                  <div className="catenamerow">
                    <Link to={`/shop?Oven`}>
                      <div className="catenamecont">
                        <Ovensvg className="catebannersvg" />
                        <p>Microwave Oven</p>
                      </div>
                    </Link>
                    <Link to={`/shop?Cooking`}>
                      <div className="catenamecont">
                        <Cookingrangesvg className="catebannersvg" />
                        <p>Cooking Range</p>
                      </div>
                    </Link>
                    <Link to={`/shop?Blander`}>
                      <div className="catenamecont">
                        <Blandersvg className="catebannersvg" />
                        <p>Hand Blander</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
