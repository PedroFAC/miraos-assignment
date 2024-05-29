import { ReactNode, createContext, useState } from "react";
import data from "./data.json";
import { Order, TreatmentPlan } from "./types";

interface OrderContext {
  view: "provider" | "care-navigator";
  orderData: Order;
  toggleView: () => void;
  treatmentPlan: TreatmentPlan;
  updateTreatmentPlan: (params: {
    patientMessage?: string;
    plan?: string;
    visitSummary?: string;
    providerName?: string;
  }) => void;
}
export const OrderContext = createContext<OrderContext>({} as OrderContext);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<"provider" | "care-navigator">(
    "care-navigator"
  );
  const orderData: Order = data;
  const toggleView = () => {
    setView(view === "provider" ? "care-navigator" : "provider");
  };
  const [treatmentPlan, setTreatmentPlan] = useState<TreatmentPlan>(
    {} as TreatmentPlan
  );
  const updateTreatmentPlan = (params: {}) => {
    setTreatmentPlan({ ...treatmentPlan, ...params });
  };

  return (
    <OrderContext.Provider
      value={{
        view,
        orderData,
        toggleView,
        treatmentPlan,
        updateTreatmentPlan,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
