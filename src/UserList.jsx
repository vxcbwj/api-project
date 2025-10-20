import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "30px",
          }}
        >
          List of Users
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            padding: "20px",
          }}
        >
          {listOfUser.map((user) => (
            <div
              key={user.id}
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 2px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h2
                style={{
                  color: "#2c3e50",
                  marginTop: "0",
                  borderBottom: "2px solid #ecf0f1",
                  paddingBottom: "10px",
                }}
              >
                {user.name}
              </h2>
              <p
                style={{
                  margin: "8px 0",
                  color: "#3498db",
                  fontWeight: "bold",
                }}
              >
                Email: {user.email}
              </p>
              <p style={{ margin: "8px 0", color: "#555" }}>
                Phone: {user.phone}
              </p>
              <p style={{ margin: "8px 0", color: "#555" }}>
                Website: {user.website}
              </p>
              <p style={{ margin: "8px 0", color: "#555" }}>
                Company: {user.company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
