import React from "react";
import "./CommentCard.scss";

function CommentCard({ firstname, lastname, email, comment }) {
  return (
    <>
      <div className="card-body my-comment">
        <div className="column-1">
          <img
            className="mr-3 rounded-circle my-photo"
            src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
            alt="Generic placeholder"
          />
          <p className="my-comment-text-2">
            {firstname} {lastname}
          </p>{" "}
          <p className="qwertyui">Verified Account</p>
          <a className="my-anchor" href={"mailto:" + email}>
            {email}
          </a>
        </div>
        <div className="column-1">
          <p className="my-comment-text">{comment}</p>
        </div>
      </div>
    </>
  );
}

export default CommentCard;
