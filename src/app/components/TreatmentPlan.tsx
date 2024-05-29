import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { OrderContext } from "../context";

const TreatmentPlan = () => {
  const { updateTreatmentPlan, treatmentPlan } = useContext(OrderContext);
  const [visitSummary, setVisitSummary] = useState(
    treatmentPlan.visitSummary || ""
  );
  const [plan, setPlan] = useState(treatmentPlan.plan || "");
  const [patientMessage, setPatientMessage] = useState(
    treatmentPlan.patientMessage || ""
  );
  const [providerName, setProviderName] = useState(
    treatmentPlan.providerName || ""
  );
  const [editing, setEditing] = useState(false);
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    callback: Dispatch<SetStateAction<string>>
  ) => {
    callback(event.target.value);
  };
  const params = { visitSummary, plan, patientMessage, providerName };
  const blockSubmit = Object.values(params).includes("");
  const handleSumbit = () => {
    updateTreatmentPlan(params);
  };

  return (
    <>
      <div className="collapsible-section">
        <div className="section-header">Treatment Plan</div>
        <div className="collapse-content">
          <p>
            <strong>Provider Name:</strong>
            {editing ? (
              <div className="row">
                <div className="col-sm-3">
                  <input
                    value={providerName}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleChange(e, setProviderName)}
                  />
                </div>
                <div className="col-sm">
                  <button
                    onClick={() => setEditing(false)}
                    disabled={providerName === ""}
                    className="btn primary-action"
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : (
              <>
                {" " + providerName}
                <span onClick={() => setEditing(true)} className="edit-button">
                  (Edit)
                </span>
              </>
            )}
          </p>
          <textarea
            name="visitSummary"
            className="form-control mb-2"
            placeholder="Type Visit Summary"
            value={visitSummary}
            onChange={(e) => handleChange(e, setVisitSummary)}
          />

          <textarea
            name="plan"
            className="form-control mb-2"
            placeholder="Add Treatment Plan"
            value={plan}
            onChange={(e) => handleChange(e, setPlan)}
          />

          <textarea
            name="patientMessage"
            className="form-control mb-2"
            placeholder="Add Patient Message"
            onChange={(e) => handleChange(e, setPatientMessage)}
            value={patientMessage}
          />
          <div className="d-flex mb-3">
            <button
              disabled={blockSubmit}
              onClick={handleSumbit}
              className="btn primary-action"
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentPlan;
