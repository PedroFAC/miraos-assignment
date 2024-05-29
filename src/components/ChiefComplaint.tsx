import { OrderContext } from "@/context/OrderContext";
import { useContext } from "react";

const ChiefComplaint = () => {
  const { orderData, view } = useContext(OrderContext);

  return (
    <div className="always-shown">
      <div className="section-header">Chief Complaint</div>
      <p>{orderData.miraOSsummary.chiefComplaint}</p>
      {view === "care-navigator" && (
        <>
          <div className="section-header">Condition Category</div>
          <p>{orderData.miraOSsummary.conditionCategory}</p>
          <div className="section-header">Triage Level</div>
          <p>{orderData.miraOSsummary.triageLevel}</p>
          <div className="section-header">Mira Care Options</div>
          {orderData.miraCareOptions.map(({ description }, i) => (
            <p key={i}>{description}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default ChiefComplaint;
