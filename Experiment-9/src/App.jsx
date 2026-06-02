import React, { useEffect, useState } from "react";
function App() {
  // Form Data State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  // Error State
  const [errors, setErrors] = useState({});
  // Success Message State
  const [success, setSuccess] = useState("");
  // API Users State
  const [users, setUsers] = useState([]);
  // Loading State
  const [loading, setLoading] = useState(true);
  // useEffect for API Fetching
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  // Handle Input Changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  // Form Validation Function
  const validateForm = () => {
    let newErrors = {};
    // Name Validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    // Email Validation
    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }
    // Password Validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };
  // Form Submit Function
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    // If Validation Errors Exist
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
      console.log(formData);
      // Clear Form Fields
      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Registration Form
        </h1>
        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray"
            }}
          />
          {
            errors.name && (
              <p
                style={{
                  color: "red",
                  marginTop: "0px"
                }}
              >
                {errors.name}
              </p>
            )
          }
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray"
            }}
          />
          {
            errors.email && (
              <p
                style={{
                  color: "red",
                  marginTop: "0px"
                }}
              >
                {errors.email}
              </p>
            )
          }
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray"
            }}
          />
          {
            errors.password && (
              <p
                style={{
                  color: "red",
                  marginTop: "0px"
                }}
              >
                {errors.password}
              </p>
            )
          }
          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Register
          </button>
        </form>
        {/* Success Message */}
        {
          success && (
            <p
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "15px",
                fontWeight: "bold"
              }}
            >
              {success}
            </p>
          )
        }
        {/* API Data Section */}
        <div
          style={{
            marginTop: "30px"
          }}
        >
          <h2
            style={{
              textAlign: "center"
            }}
          >
            User Data from API
          </h2>
          {
            loading ? (
              <p
                style={{
                  textAlign: "center"
                }}
              >
                Loading...
              </p>
            ) : (
              users.map((user) => (
                <div
                  key={user.id}
                  style={{
                    backgroundColor: "#f4f4f4",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "5px"
                  }}
                >
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}
export default App;