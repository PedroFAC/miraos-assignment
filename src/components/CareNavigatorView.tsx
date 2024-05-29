import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import Chat from "./Chat";
import Intake from "./Intake";

const CareNavigatorView = () => {
  const { orderData } = useContext(OrderContext);
  const sendCareOptions = () => {
    alert("Care options: In-person clinic, virtual care, labs, navigation.");
  };
  return (
    <div id="care-navigator-view" className="card-body">
      <div className="always-shown">
        <div className="section-header">Chief Complaint</div>
        <p>{orderData.miraOSsummary.chiefComplaint}</p>
        <div className="section-header">Condition Category</div>
        <p>{orderData.miraOSsummary.conditionCategory}</p>
        <div className="section-header">Triage Level</div>
        <p>{orderData.miraOSsummary.triageLevel}</p>
        <div className="section-header">Mira Care Options</div>
        {orderData.miraCareOptions.map(({ description }, i) => (
          <p key={i}>{description}</p>
        ))}
      </div>
      <Intake />

      <div className="d-flex mb-3 mt-3">
        <button onClick={sendCareOptions} className="btn primary-action">
          Send Care Options
        </button>
        <button className="btn btn-danger ml-2">Cancel Order</button>
      </div>
      <Chat />
    </div>
  );
};

export default CareNavigatorView;
