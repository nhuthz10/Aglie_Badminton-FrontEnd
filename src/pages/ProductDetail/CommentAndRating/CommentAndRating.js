import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import "./CommentAndRating.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import Modal from "@mui/material/Modal";
import EditCommentAndRating from "../EditCommentAndRating/EditCommentAndRating";
import avatarDefault from "../../assets/default-avatar.png";

const formatDate = (date) => {
  const dateTime = dayjs(date);
  const formattedTime = dateTime.format("DD/MM/YYYY HH:mm:ss");
  return formattedTime;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  background: "white",
  borderRadius: 8,
  padding: 20,
};

function CommentAndRating() {
  const [allFeedback, setAllFeeddack] = useState([]);
  const [currentFeedback, setCurrentFeedback] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  let handleUpdateFeedback = (description, rating, id) => {
    setCurrentFeedback({
      id: id,
      description: description,
      rating: rating,
    });
    setIsOpen(true);
  };

  return (
    <div className="feedback-container">
      <div className="comment-rating-form">
        <div className="review-item">
          <div className="user-info">
            <img src={avatarDefault} alt="Avatar" className="user-avatar" />
            <div className="wrap-user-name">
              <div className="user-name">Minh Nhut</div>
              <div className="timestamp">13/2/2024</div>
            </div>
          </div>
          <Rating
            style={{ fontSize: "3.675rem", margin: "10px 0" }}
            value={5}
            precision={0.5}
            readOnly
          />
          <div className="user-comment">Sản phẩm tốt</div>
          <div className="edit-feedback">
            <div className="edit-feedback-btn" style={{ marginLeft: "auto" }}>
              Chính sửa
            </div>
            <div className="edit-feedback-btn">Xóa</div>
          </div>
        </div>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <div style={{ ...style }}>
          <div
            style={{ fontSize: "2.4rem", fontWeight: 600, marginBottom: 16 }}
          >
            ĐÁNH GIÁ SẢN PHẨM
          </div>
          <EditCommentAndRating
            setIsOpen={setIsOpen}
            data={currentFeedback}
          ></EditCommentAndRating>
        </div>
      </Modal>
    </div>
  );
}

export default CommentAndRating;
