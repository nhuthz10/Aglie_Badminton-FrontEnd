import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import "./EditCommentAndRating.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function EditCommentAndRating({ data, setIsOpen }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (data) {
      setComment(data.description);
      setRating(data.rating);
    }
  }, [data]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  return (
    <div className="comment-rating-form">
      <Rating
        name="product-rating"
        value={rating}
        defaultValue={0}
        precision={0.5}
        className="comment-rating"
        onChange={handleRatingChange}
      />
      <textarea
        className="coment-content"
        onChange={handleCommentChange}
        value={comment}
        placeholder="Viết phản hồi..."
      ></textarea>

      <div className="ctn_send_btn">
        <button className="contain_send_btn">Hoàn thành</button>
      </div>
    </div>
  );
}

export default EditCommentAndRating;
