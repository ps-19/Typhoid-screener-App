import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const TimelineCard = () => {
  return (
    <>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="2021-07-31 Saturday"
          style={{ color: "#f4511e" }}
          dateInnerStyle={{ background: "#f4511e" }}
        >
          <h3 style={{ color: "#f4511e" }}>GET THE VACCINE</h3>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "60px",
              fontSize: "12px",
            }}
          >
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="2022-09-01 Tuesday"
          dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
        >
          <h3 style={{ color: "#61b8ff" }}>CONSULTING YOUR DOCTORS</h3>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "60px",
              fontSize: "12px",
            }}
          >
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="2022-07-31 Saturday"
          style={{ color: "#3b586b" }}
          dateInnerStyle={{ background: "#3b586b" }}
        >
          <h3 style={{ color: "#3b586b" }}>CERTIFIED NURSES</h3>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "60px",
              fontSize: "12px",
            }}
          >
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="2022-02-01 Monday"
          dateInnerStyle={{ background: "#76bb7f" }}
        >
          <h3 style={{ color: "#76bb7f" }}>COVID-19 CENTERS</h3>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "60px",
              fontSize: "12px",
            }}
          >
            Est incididunt sint eu minim dolore mollit velit velit commodo ex
            nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
            magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia
            irure reprehenderit laborum fugiat dolore in elit. Adipisicing do
            qui duis Lorem est.
          </p>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default TimelineCard;
