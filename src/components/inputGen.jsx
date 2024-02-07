import "../styles/inputGen.css";

function InputGen(props) {
  return (
    <div className="gen">
      <div>
        <label>Enter your Name:</label>
        <input
          type="text"
          readOnly={props.genData.readOnly}
          value={props.genData.name}
          onChange={(e) => props.handleGenUpdate("name", e.target.value)}
        />
      </div>
      <div>
        <label>Enter your Email:</label>
        <input
          type="email"
          readOnly={props.genData.readOnly}
          value={props.genData.email}
          onChange={(e) => props.handleGenUpdate("email", e.target.value)}
        />
      </div>
      <div>
        <label>Enter your Phone No:</label>
        <input
          readOnly={props.genData.readOnly}
          type="tel"
          value={props.genData.phoneNo}
          onChange={(e) => props.handleGenUpdate("phoneNo", e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputGen;
