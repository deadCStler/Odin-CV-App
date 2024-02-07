import "../styles/outputDisplay.css";

function OutputDisplay({ formData }) {
  return (
    <>
      <header>
        <h1>{formData.name === "" ? "Name" : formData.name}</h1>
        <div className="contacts">
          <h2>{formData.email === "" ? "Email" : formData.email}</h2>
          <h2>{formData.phoneNo === "" ? "PhoneNo" : formData.phoneNo}</h2>
        </div>
      </header>

      <div className="experience">
        <h1>Experience</h1>
        <div className="expDetails">
          <div>
            <h2>
              {formData.companyName === ""
                ? "Company Name"
                : formData.companyName}
            </h2>
            <h3>
              {formData.designation === ""
                ? "Designation"
                : formData.designation}
            </h3>
          </div>
          <div>
            <h3>{formData.dateFrom === "" ? "From" : formData.dateFrom}</h3>
            <h3>{formData.dateUntil === "" ? "Until" : formData.dateUntil}</h3>
          </div>
        </div>
        <h3>
          {formData.responsibilities === ""
            ? "Responsibilities"
            : formData.responsibilities}
        </h3>
      </div>

      <div className="education">
        <h1>Education</h1>
        <div>
          <h2>
            {formData.schoolName === "" ? "University" : formData.schoolName}
          </h2>
          <h3>{formData.year === "" ? "Graduation Year" : formData.year}</h3>
        </div>
        <h3>{formData.level === "" ? "Degree Name" : formData.level}</h3>
      </div>
    </>
  );
}

export default OutputDisplay;
