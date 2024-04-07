"use client"
import axios from "axios";
import { useState, useContext, useEffect } from "react";

const Subsscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      const { data } = await axios.post("api/subscriber", {
        email,
      });

      // Handle success
      setSuccessMessage("Subscription successful!");
      setErrorMessage(""); // Reset error message
    } catch (error) {
      // Handle error
      setErrorMessage("Subscription failed. Please try again.");
      setSuccessMessage(""); // Reset success message
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscriber componentStyle">
      <div className="mt-5 " style={{ backgroundColor: "#12b0bc" }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-12 col-xxl-12 me-5 my-5">
            <div className="container text-center">
              <h2>
                <b style={{ color: "azure" }} className="text-uppercase">
                  subscribe for our blogs
                </b>
              </h2>
              <p style={{ color: "azure" ,textAlign:"center !important"}}>
                Sign up to receive email updates about the course
              </p>
              <div >
            <form onSubmit={handleSubmit}>
            
              <div className="input-group sebscribe">
                <input
                  type="text"
                  className="form-control text-center"
                  placeholder="Type email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-btn-primary"
                    style={{ backgroundColor: "#ef4444" }}
                    disabled={loading}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
          </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Subsscribe;
