import { useContext, useReducer } from "react";
import { OrderContext } from "../context";

const reducer = (
  state: {
    displayIntake: boolean;
    displayPatientHistory: boolean;
    displayDiagnostic: boolean;
    displaySelfCareTips: boolean;
  },
  action: string
) => {
  if (action === "toggle_intake")
    return { ...state, displayIntake: !state.displayIntake };
  if (action === "toggle_patient_history")
    return { ...state, displayPatientHistory: !state.displayPatientHistory };
  if (action === "toggle_diagnostic")
    return { ...state, displayDiagnostic: !state.displayDiagnostic };
  if (action === "toggle_self_care_tips")
    return { ...state, displaySelfCareTips: !state.displaySelfCareTips };
  return { ...state };
};

const Intake = () => {
  const { orderData, view } = useContext(OrderContext);
  const { visitIntake } = orderData;
  const [
    {
      displayIntake,
      displayPatientHistory,
      displayDiagnostic,
      displaySelfCareTips,
    },
    dispatch,
  ] = useReducer(reducer, {
    displayDiagnostic: false,
    displaySelfCareTips: false,
    displayIntake: false,
    displayPatientHistory: false,
  });

  return (
    <>
      <div className="box-container">
        {view === "care-navigator" && (
          <>
            <div className="box" onClick={() => dispatch("toggle_diagnostic")}>
              <div className="section-header">Diagnostic</div>
            </div>
            <div
              className="box"
              onClick={() => dispatch("toggle_self_care_tips")}
            >
              <div className="section-header">Self-Care Tips</div>
            </div>
          </>
        )}
        <div className="box" onClick={() => dispatch("toggle_intake")}>
          <div className="section-header">Intake</div>
        </div>
        <div className="box" onClick={() => dispatch("toggle_patient_history")}>
          <div className="section-header">Patient History</div>
        </div>
      </div>
      {displayDiagnostic && (
        <div id="diagnostic-content" className="collapse-content">
          {orderData.diagnostic.map((diagnostic, i) => (
            <p key={i}>{diagnostic.name}</p>
          ))}
        </div>
      )}
      {displaySelfCareTips && (
        <div id="self-care-tips-content" className="collapse-content">
          {orderData.selfCareTips}
        </div>
      )}
      {displayIntake && (
        <div id="intake-content-provider" className="collapse-content">
          {visitIntake.map(
            ({ title, value }, i) =>
              title &&
              value && (
                <p key={i}>
                  {title}: {value}
                </p>
              )
          )}
        </div>
      )}
      {displayPatientHistory && (
        <div id="patient-history-content-provider" className="collapse-content">
          <p>Last Visit Date: 01/06/2022</p>
          <p>Type: In-person</p>
          <p>Chief Complaint: Cough</p>
          <p>Treatment: Prescribed cough syrup</p>
        </div>
      )}
    </>
  );
};

export default Intake;