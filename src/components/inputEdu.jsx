import "../styles/inputEdu.css";

function InputEdu(props) {
  return (
    <div className="edu">
      <div>
        <label>Enter your University Name:</label>
        <input
          readOnly={props.eduData.readOnly}
          type="text"
          value={props.eduData.schoolName}
          onChange={(e) => props.handleEduUpdate("schoolName", e.target.value)}
        />
      </div>
      <div>
        <label>Enter your Degree:</label>
        <input
          readOnly={props.eduData.readOnly}
          type="text"
          value={props.eduData.level}
          onChange={(e) => props.handleEduUpdate("level", e.target.value)}
        />
      </div>
      <div>
        <label>Enter your completion Year:</label>
        <input
          readOnly={props.eduData.readOnly}
          type="number"
          value={props.eduData.year}
          onChange={(e) => props.handleEduUpdate("year", e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputEdu;
