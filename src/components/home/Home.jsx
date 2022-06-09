import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <section class="container-fluid px-0">
      <div class="row align-items-center content">
        <div class="col-md-6 order-2 order-md-1">
          <img src="./images/milk.png" alt="" class="img-fluid" />
        </div>
        <div class="col-md-6 text-center order-1 order-md-2">
          <div class="row justify-content-center">
            <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
              <h2 class="">MUSEUM OF CANDY</h2>
              {/* <img
              src="imgs/lolli_icon.png"
              alt=""
              class="d-none d-lg-inline"
            /> */}
              <p class="lead">This is content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
