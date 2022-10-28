import React, { useState } from "react";
import { Button, List, Avatar, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";

//internal imports
import { data } from "./components";
import "./Comments.css";
import Termsofuse from "../Termsofuse";

const Comments = () => {
  const [comments, setComments] = useState(data);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [visible, setVisible] = useState(false);

  const addComment = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      name: name,
      comment: comment,
    };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div className="comments-container">
      <div className="loaded-comments-container">
        <h2>Comments from Users</h2>
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar size={"large"} icon={<UserOutlined />} />}
                title={item.name}
                description={item.comment}
              />
            </List.Item>
          )}
        />
      </div>

      {/* to add a new comment */}
      <div className="add-comments-container">
        <h2>Leave a Comment for Us</h2>
        <h6>
          Racist, sexist, homophobic or generally hate filled comments have no
          place here. We recommend you follow this list of{" "}
          <span
            style={{
              display: "inline",
              color: "#043758",
              cursor: "pointer",
            }}
            onClick={() => {
              setVisible(true);
            }}
          >
            guidlines
          </span>
        </h6>
        <Modal
          visible={visible}
          footer={
            <Button
              type="primary"
              onClick={() => {
                setVisible(false);
              }}
            >
              OK
            </Button>
          }
          closable={true}
        >
          <Termsofuse />
        </Modal>
        <form name="comment" autoComplete="off" onSubmit={addComment}>
          <input
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            name="comment"
            value={comment}
            placeholder="Comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#043758",
              borderColor: "#043758",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
