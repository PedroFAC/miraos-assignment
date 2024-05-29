"use client";
import OrderDetails from "../components/OrderDetails";
import ViewContainer from "../components/ViewContainer";
import { OrderProvider } from "../context/OrderContext";

export default function Home() {
  return (
    <OrderProvider>
      <div className="container mt-4">
        <OrderDetails />
        <ViewContainer />
      </div>
    </OrderProvider>
  );
}
