import React from "react";
import { Image } from "react-bootstrap";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsEmojiSmile } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

const imageURL =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ComposerInput = React.memo(() => {
  return (
    <div className="composer">
      <div className="curveEdge"></div>
      <div className="composer-container">
        <div className="composer-header">
          <div className="header-left">
            <Image
              style={{ width: 20, height: 20, marginRight: 5 }}
              src={imageURL}
              roundedCircle
            />
            <span className="comment-text">1 Comment</span>
            <span className="date">Today, 9:38 AM</span>
          </div>
          <div className="header-right">
            <CiCircleCheck color="gray" size={24} style={{ marginRight: 5 }} />
            <HiOutlineDotsHorizontal color="gray" size={24} />
          </div>
        </div>
        <div className="composer-content">
          <Image
            style={{ width: 45, height: 45, marginRight: 10 }}
            src={imageURL}
            roundedCircle
          />
          <div className="reply">
            Hey <span className="mention">@Robert Mendez</span> can you share an
            ETA with angela?
          </div>
        </div>
        <div className="like-icon">
          <img src="like.png" alt="like" />
          <p>1</p>
        </div>
        <div className="reply-input">
          <input placeholder="Reply internally..." />
          <div className="reply-icons">
            <HiOutlineDotsHorizontal className="icon" color="gray" size={24} />
            <BsEmojiSmile className="icon" color="gray" size={24} />
            <IoSend className="icon" color="gray" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ComposerInput;
