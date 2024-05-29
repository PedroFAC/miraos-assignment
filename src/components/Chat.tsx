import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const Chat = () => {
  const { treatmentPlan } = useContext(OrderContext);
  const { plan, providerName } = treatmentPlan;
  return (
    <>
      <div className="message-section">
        {Object.keys(treatmentPlan).includes('plan') && Object.keys(treatmentPlan).includes('providerName') && (
          <div className="treatment-message">
            <p>
              <strong>Treatment Plan:</strong> {plan}
            </p>
            <p>
              <strong>Provider Name:</strong> {providerName}
            </p>
          </div>
        )}
        <div className="message sent">
          Patient: I have been feeling unwell for the past few days.
        </div>
        <div className="message received">
          Provider: Can you describe your symptoms?
        </div>
        <div className="message sent">
          Patient: I have a runny nose, sore throat, and mild fever.
        </div>
      </div>
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
        />
        <button className="btn btn-secondary ml-2">Send Message</button>
      </div>
    </>
  );
};

export default Chat;
