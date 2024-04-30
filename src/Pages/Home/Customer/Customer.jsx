import { useEffect, useState } from "react";
import "./Customer.css";
const Customer = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  });

  return (
    <div>
      <h1>this reaview section</h1>
    </div>
  );
};

export default Customer;
