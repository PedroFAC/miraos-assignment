import { useContext } from "react";
import CareNavigatorView from "./CareNavigatorView";
import ProviderView from "./ProviderView";
import { OrderContext } from "../context/OrderContext";

const ViewContainer = () => {
  const { view, toggleView } = useContext(OrderContext);

  return (
    <div className="card mt-4">
      <div className="card-header d-flex justify-content-between">
        <span id="toggle-view" className="toggle-view">
          {view === "provider"
            ? "Provider View"
            : "Care Navigator View"}
        </span>
        <div>
          <button className="btn btn-secondary" onClick={toggleView}>
            {view == "provider"
              ? "Switch to Care Navigator View"
              : "Switch to Provider View"}
          </button>
        </div>
      </div>
      {view === "provider" ? <ProviderView /> : <CareNavigatorView />}
    </div>
  );
};

export default ViewContainer;
