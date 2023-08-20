import "../../styles/Forms.css";

function EducationForm({ handleInputChange }) {
  return (
    <div className="form">
      <fieldset>
        <legend>Education Info</legend>
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="University"
          name="university"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
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

export default EducationForm;
