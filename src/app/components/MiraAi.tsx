import { useContext, useState } from "react";
import { OrderContext } from "../context";

const MiraAi = () => {
  const { orderData } = useContext(OrderContext);
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = () => {
    setCollapse(!collapse);
  };
  const { reasonsForDx, rxRecommendation, rxExplanation, dx } =
    orderData.miraOSsummary;
  const { ICD10CMCode, diagnosis, probability } = dx[0];
  return (
    <div className="collapsible-section">
      <div className="section-header" onClick={toggleCollapse}>
        Mira AI
      </div>
      {collapse && (
        <div id="mira-ai-content">
          <p>
            <strong>Diagnosis:</strong> {diagnosis}
          </p>
          <p>
            <strong>Probability:</strong> {probability}
          </p>
          <p>
            <strong>ICD10CM Code:</strong> {ICD10CMCode}
          </p>
          <p>
            <strong>Explanation:</strong> {reasonsForDx}
          </p>
          <p>
            <strong>Recommended Rx:</strong>
          </p>
          <ul>
            {rxRecommendation.map((rx, i) => (
              <li key={i}>
                {rx.name}: {rx.dose}
              </li>
            ))}
          </ul>
          <p>
            <strong>Reasons for Dx:</strong> {rxExplanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default MiraAi;
