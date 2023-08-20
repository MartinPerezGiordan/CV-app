import "../../styles/Forms.css";

function ExperienceForm({ handleInputChange }) {
  return (
    <div className="form">
      <fieldset>
        <legend>Experience Info</legend>
        <input
          type="text"
          placeholder="Job Title"
          name="jobTitle"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Company"
          name="company"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          onChange={handleInputChange}
        />
        <input
          type="date"
          placeholder="Start Date"
          name="startDate"
          onChange={handleInputChange}
        />
        <input
          type="date"
          placeholder="End Date"
          name="endDate"
          onChange={handleInputChange}
        />
      </fieldset>
    </div>
  );
}

export default ExperienceForm;
