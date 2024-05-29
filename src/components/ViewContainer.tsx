import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import ChiefComplaint from "./ChiefComplaint";
import MiraAi from "./MiraAi";
import TreatmentPlan from "./TreatmentPlan";
import Intake from "./Intake";
import Chat from "./Chat";

const ViewContainer = () => {
  const { view, toggleView } = useContext(OrderContext);

  return (
    <div className="card mt-4">
      <div className="card-header d-flex justify-content-between">
        <span id="toggle-view" className="toggle-view">
          {view === "provider" ? "Provider View" : "Care Navigator View"}
        </span>
        <div>
          <button className="btn btn-secondary" onClick={toggleView}>
            {view == "provider"
              ? "Switch to Care Navigator View"
              : "Switch to Provider View"}
          </button>
        </div>
      </div>
      <div id={`${view}-view`} className="card-body">
        <ChiefComplaint />
        {view === "provider" && <MiraAi />}
        <Intake />
        {view === "provider" && <TreatmentPlan />}
        <Chat />
      </div>
    </div>
  );
};

export default ViewContainer;
