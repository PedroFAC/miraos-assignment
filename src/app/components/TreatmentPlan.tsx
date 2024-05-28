const TreatmentPlan = () => {
  return (
    <>
      <div className="collapsible-section">
        <div className="section-header">Treatment Plan</div>
        <div className="collapse-content">
          <p>
            <strong>Provider Name:</strong> Ozita Cooper, MD{" "}
            <span className="edit-button">(Edit)</span>
          </p>
          <textarea className="form-control mb-2" placeholder="Type Visit Summary">
            Runny nose, sore throat, and mild fever
          </textarea>
          <textarea className="form-control mb-2" placeholder="Add Treatment Plan">
            Acetaminophen: 500 mg, Diphenhydramine: 25 mg, Guaifenesin: 200-400
            mg
          </textarea>
          <textarea className="form-control mb-2" placeholder="Add Patient Message">
            Make sure you have plenty of rest
          </textarea>
        </div>
      </div>
      <div className="d-flex mb-3">
        <button className="btn primary-action">
          Finish
        </button>
      </div>
    </>
  );
};

export default TreatmentPlan;
