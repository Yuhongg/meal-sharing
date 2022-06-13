import React, { useState, useEffect } from "react";
import "./HomePage.css";

export function Menu() {
  const [data, setData] = useState([]);
  const fetchURL = "/api/meals";
  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div className="menu-list">
      <h2>Available Meals:</h2>
      {data?.map((item) => (
        <ul className="menu-lists" key={item.id}>
          <a href={`/meals/reservations/${item.id}`}>
            <li>
              <div>{item.title}</div>
              <div>{item.price} DKK</div>
            </li>
          </a>
        </ul>
      ))}
    </div>
  );
}
