import React, { useEffect, useState } from "react";
import style from "./Reviews.module.css";
import { Table } from "react-bootstrap";
import axios from "axios";

export default function Reviews() {
  const [Reviews, setReviews] = useState([]);
  async function getReviews() {
    let { data } = await axios.get(
      `https://www.zahascarves.com/api/customerlink/all`,
      {
        headers: {
          Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
        },
      }
    );
    console.log(111);
    console.log(data.link.data);
    setReviews(data.link.data);
  }

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <>
      <h1 className="text-center bg-light text-dark rounded-3 fw-bold text-capitalize p-3 my-3">
        Reviews
      </h1>
      <div className="container">
        <div className="row">
          {Reviews.length > 0
            ? Reviews.map((review) => (
                <div className="col-md-3 text-center" key={review.id}>
                  <div className="item border border-3 p-2">
                    <img src={review.path} className="w-100 object-fit-cover" height={300} alt="" />
                    <p className="fw-bold pt-3">Name : {review.name}</p>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
