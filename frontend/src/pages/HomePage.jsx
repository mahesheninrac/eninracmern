import React, { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5000/api/users/")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container my-3">
      <div className="row ">
        {data.map((item) => (
          <div key={item._id} className=" col-md-3">
            <div className="card p-1 mb-2">
              <p>{item.name}</p>
              <p>{item.email}</p>
              {item.photo ? (
                <img
                  src={`http://localhost:5000/uploads/${item.photo}`}
                  alt=""
                />
              ) : (
                <p>No Image</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
