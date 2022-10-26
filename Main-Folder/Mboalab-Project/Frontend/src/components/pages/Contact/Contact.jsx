import { Form, Input, Button } from "antd";

//internal imports
import image from "../../../asset/image/contact.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "300px",
          width: "100%",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            padding: "20px",
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          <h1
            style={{
              color: "#fff",
            }}
          >
            How can we help you? <br />
          </h1>
          <h5
            style={{
              color: "#fff",
            }}
          >
            Contact us
          </h5>
        </span>
      </div>
      <div className="contact-flex-container">
        <div className="contact-flex-item item1">
          <Form.Item>
            <label>
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="First Name"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          <Form.Item>
            <label>
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Last Name"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          <Form.Item>
            <label>
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Email"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          <Form.Item>
            <label>
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>
            <Input
              placeholder="Phone Number"
              style={{ width: "100%", height: "40px" }}
            />
          </Form.Item>
          <Form.Item>
            <label>
              Message <span style={{ color: "red" }}>*</span>
            </label>
            <Input.TextArea
              placeholder="Message"
              style={{ width: "100%", height: "100px" }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="contact-button">
              Send
            </Button>
          </Form.Item>
        </div>
        <div className="contact-flex-item item2">
          <iframe
            title="map"
            src="https://maps.google.com/maps?width=213&amp;height=207&amp;hl=en&amp;q=Yaounde cameroon&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            frameborder="0"
            style={{
              border: 0,
              width: "100%",
              height: "365px",
              position: "relative",
              overflow: "hidden",
              background: "none",
              marginTop: "20px",
            }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
          <br />

          <div
            className="contact-details"
            style={{
              marginTop: "20px",
            }}
          >
            <p>31066, Yaoundé Cameroon</p>
            <p>
              <a href="tel:+237697465154">+237697465154</a>
            </p>
            <p>
              <a href="mailto:mboalab@gmail.com">mboalab@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
