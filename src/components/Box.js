export default function Box(props) {
  return (
    <div className="parent" style={{ width: "300px", textAlign: "right" }}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${props.coverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "300px",
          height: "175px",
          borderRadius: "10px",
          marginBottom: "15px",
        }}
      ></div>
      <div style={{ display: "flex" }}>
        <div style={{ float: "right" }}>
          <h3
            style={{
              marginBottom: "10px",
            }}
          >
            {props.title}
          </h3>
          <p>{props.desc}</p>
          <p>
            {props.posted} <span style={{ fontWeight: "bold" }}>.</span>{" "}
            {props.review}
          </p>
        </div>
        <div>
          <img
            src={props.logoImg}
            style={{
              width: "50px",
              height: "50px",
              marginLeft: "15px",
              borderRadius: "50%",
            }}
            alt="logo img"
          />
        </div>
      </div>
    </div>
  );
}
