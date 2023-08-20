import "../styles/CVPreview.css";

function CVPreview({ data, backgroundColor }) {
  return (
    <div className="cv-preview">
      <div
        className="name-container"
        style={(backgroundColor = { backgroundColor })}
      >
        <h1 className="title">
          {data.name.toUpperCase()} {data.lastName.toUpperCase()}
        </h1>
      </div>
      <section className="cv-section">
        <h2>Contact</h2>
        <div className="section-info">
          <h3>Email: {data.email}</h3>
          <h3>Phone: {data.phone}</h3>
        </div>
      </section>
      <section className="cv-section">
        <h2>Education</h2>
        <div className="section-info">
          <h3>{data.degree}</h3>
          <h4>{data.university}</h4>
          <h4>{data.location}</h4>
          <p>
            {data.startDate} - {data.endDate}
          </p>
        </div>
      </section>
      <section className="cv-section">
        <h2>Experience</h2>
        <div className="section-info">
          <h3>{data.jobTitle}</h3>
          <h4>{data.company}</h4>
          <h4>{data.position}</h4>
          <p>
            {data.jobStartDate} - {data.jobEndDate}
          </p>
        </div>
      </section>
    </div>
  );
}

export default CVPreview;
