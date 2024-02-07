import "../styles/inputExp.css";

function InputExp(props) {
  return (
    <div className="exp">
      <div>
        <label>Enter your Company Name:</label>
        <input
          readOnly={props.expData.readOnly}
          type="text"
          value={props.expData.companyName}
          onChange={(e) => props.handleExpUpdate("companyName", e.target.value)}
        />
      </div>
      <div>
        <label>Enter your designation:</label>
        <input
          readOnly={props.expData.readOnly}
          type="text"
          value={props.expData.designation}
          onChange={(e) => props.handleExpUpdate("designation", e.target.value)}
        />
      </div>
      <div>
        <label>Enter your Responsibilities:</label>
        <input
          readOnly={props.expData.readOnly}
          type="text"
          value={props.expData.responsibilities}
          onChange={(e) =>
            props.handleExpUpdate("responsibilities", e.target.value)
          }
        />
      </div>
      <div>
        <label>Enter the Joining Date:</label>
        <input
          readOnly={props.expData.readOnly}
          type="date"
          value={props.expData.dateFrom}
          onChange={(e) => props.handleExpUpdate("dateFrom", e.target.value)}
        />
      </div>
      <div>
        <label>Enter the Leavin Date:</label>
        <input
          readOnly={props.expData.readOnly}
          type="date"
          value={props.expData.dateUntil}
          onChange={(e) => props.handleExpUpdate("dateUntil", e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputExp;
