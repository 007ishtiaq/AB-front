import React from "react";
import { ReactComponent as Samplesvg } from "../../images/nav category svg/grocery.svg";
import "./Catebanner.css";
import sampleImg from "../../images/catebanner/sample600x479.webp";

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
                    <div className="catenamecont">
                      <Samplesvg className="catebannersvg" />
                      <p>Dishwashers</p>
                    </div>
                    <div className="catenamecont">
                      <p>svg</p>
                      <p>Electric Kettle</p>
                    </div>
                    <div className="catenamecont">
                      <p>svg</p>
                      <p>Air Fryers</p>
                    </div>
                  </div>
                  <div className="catenamerow">
                    <div className="catenamecont">
                      <p>svg</p>
                      <p>Microwave Oven</p>
                    </div>
                    <div className="catenamecont">
                      <p>svg</p>
                      <p>Cooking Range</p>
                    </div>
                    <div className="catenamecont">
                      <p>svg</p>
                      <p>Hand Blander</p>
                    </div>
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
