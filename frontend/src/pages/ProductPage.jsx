import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ProductPage.css";
import SideBarComponent from "../component/SideBar";
import { useNavigate } from "react-router-dom";
import Pagination from "../component/Pagination";
import PaginationComp from "../component/Pagination";
import { useDispatch } from "react-redux";
import { getData } from "../redux/dataReducer/action";
export const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
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
          <div className="text-white-500 pb-2 mt-5">
            <PaginationComp />
          </div>
        </div>
      </div>
    </div>
  );
};
