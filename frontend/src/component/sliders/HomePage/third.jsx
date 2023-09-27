import React from "react";

export const Third = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        alignItems: "center",
        backgroundColor: "transparent",
        gap: "25px",
        color: "black",
        width: "95.5%",
        margin: "auto",
        marginTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          padding: "10px",
          borderRadius: "10px",
          height: "390px",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71iesyTiJ7L._AC_SY135_.jpg"
            alt="image1"
          />
          <h6>Bacca Bucci Mens Majest…</h6>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71cdueK5ecL._AC_SY135_.jpg"
            alt="image2"
          />
          <h6>Bacca Bucci Mens Majest…</h6>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61a75x5j6hL._AC_SY135_.jpg"
            alt="image3"
          />
          <h6>Bacca Bucci Mens Majest…</h6>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71kigmLed4L._AC_SY135_.jpg"
            alt="image4"
          />
          <h6>Bacca Bucci Mens Majest…</h6>
        </div>
      </div>
      <div
        style={{
          height: "390px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <div style={{ backgroundColor: "white", mixBlendMode: "normal" }}>
          <h4>Great Indian Festival | Coming Soon</h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_CC_1X._SY304_CB576938243_.jpg"
            alt="image11"
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          padding: "10px",
          borderRadius: "10px",
          height: "390px",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_TV_1X._SY116_CB578640810_.jpg"
            alt="image21"
          />
          <h6>Up to 60% off on TVs Up to 60% off on TVs</h6>
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Jersey_1X._SY116_CB578640810_.jpg"
            alt="image22"
          />
          <h6>Jerseys starting ₹999 Jerseys starting ₹999</h6>
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Cricket_1X._SY116_CB578640810_.jpg"
            alt="image23"
          />{" "}
          <h6>Up to 60% off on cricket bats Up to 60% off on cricket bats</h6>
        </div>
        <div>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_QC_Mob_1X._SY116_CB578640810_.jpg"
            alt="image24"
          />{" "}
          <h6>Up to 40% off on mobile phones Up to 40% off on mobile phones</h6>
        </div>
      </div>
    </div>
  );
};
