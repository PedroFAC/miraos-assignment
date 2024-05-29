import { useContext } from "react";
import { OrderContext } from "../context";
import MiraAi from "./MiraAi";
import Intake from "./Intake";
import TreatmentPlan from "./TreatmentPlan";
import Chat from "./Chat";

const ProviderView = () => {
  const { orderData } = useContext(OrderContext)
  return (
    <div id="provider-view" className="card-body">
      <div className="always-shown">
        <div className="section-header">Chief Complaint</div>
        <p>{orderData.miraOSsummary.chiefComplaint}</p>
      </div>
      <MiraAi />
      <Intake />
      <TreatmentPlan />
      <Chat />
    </div>
  );    
};

export default ProviderView;
