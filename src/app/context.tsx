import { ReactNode, createContext, useState } from "react";
import data from './data.json'
import { Order } from "./types";

interface OrderContext {
    view: 'provider' | 'care-navigator'
    orderData: Order
    toggleView: () => void
}
export const OrderContext = createContext<OrderContext>({} as OrderContext);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<'provider' | 'care-navigator'>("care-navigator");
  const orderData: Order = data;
  const toggleView = () => {
    setView(view === 'provider' ? 'care-navigator' : 'provider')
  }

  return (
    <OrderContext.Provider value={{ view, orderData, toggleView }}>
      {children}
    </OrderContext.Provider>
  );
};
