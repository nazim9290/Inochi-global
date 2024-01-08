import axios from "axios";
import React, { useContext, useState } from 'react';
import { useRouter } from "next/navigation";
import { UserContext } from "../../context";

const Review = () => {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [state] = useContext(UserContext);
  const router = useRouter();

  const submithandle = async (e) => {


    e.preventDefault();
    try {
      console.log(review)
      setLoading(true);
      const { data } = await axios.post("api/create-review", { review });
      setMessage(data.message); // Assuming the server returns a message property
    } catch (error) {
      setError("An error occurred while submitting the review.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Feel Free To Say About us</h1>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form className="needs-validation" noValidate onSubmit={submithandle}>
        
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Review
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Please feel free to say about us"
            required
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <div className="invalid-feedback">Please enter a review.</div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Review;
