import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ProductPage.css";
import SideBarComponent from "../component/SideBar";
import { useNavigate } from "react-router-dom";
export const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
    console.log(products);
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#001220",
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%", borderRight: "1px solid grey" }}>
          <SideBarComponent />
        </div>
        <div
          style={{
            width: "80%",
            padding: "20px",
            gap: "10px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              textAlign: "left",
              gap: "10px",
            }}
          >
            {products.length > 0 &&
              products.map((e) => {
                return (
                  <div
                    className="card"
                    key={e.id}
                    onClick={() =>
                      navigate("/singleproductpage", { id: "e.id" })
                    }
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={e.image}
                        alt={e.title}
                        style={{
                          width: "50%",
                          height: "100%",
                          paddingRight: "5px",
                        }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h3>{e.title}</h3>
                        <h4>Price:- {e.price}</h4>
                      </div>
                    </div>
                    <div className="card__content">
                      <p className="card__title">{e.category}</p>
                      <p className="card__description">{e.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
