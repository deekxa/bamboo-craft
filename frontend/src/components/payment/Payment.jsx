import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Payment = () => {
  const { id, amount } = useParams();
  const { user, isLoaded } = useUser();
  const userEmail = user?.emailAddresses?.[0]?.emailAddress;
  const [data, setData] = useState({
    msg: "",
    transaction_id: "",
    signature: ""
  });

  const formref = useRef();

  async function initiatePayment() {
    try {
      const response = await axios.post("http://localhost:4000/backend/payment_esewa", {
        email: userEmail,
        transaction_id: id,
        amount,
      });
      const dataRes = response.data;
      setData({
        msg: dataRes.msg,
        transaction_id: dataRes.transaction_id,
        signature: dataRes.signature
      });
    } catch (error) {
      console.error("Payment initiation error", error);
    }
  }

  useEffect(() => {
    initiatePayment();
  }, []);

  useEffect(() => {
    if (data.signature) {
      formref.current.submit();
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        style={{ visibility: "hidden" }}
        ref={formref}
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
        className="w-full max-w-xs"
      >
        <input type="text" id="amount" name="amount" value={amount} required />
        <input type="text" id="tax_amount" name="tax_amount" value="0" required />
        <input type="text" id="total_amount" name="total_amount" value={amount} required />
        <input type="text" id="transaction_uuid" name="transaction_uuid" value={data.transaction_id} required />
        <input type="text" id="product_code" name="product_code" value="EPAYTEST" required />
        <input type="text" id="product_service_charge" name="product_service_charge" value="0" required />
        <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
        <input type="text" id="success_url" name="success_url" value="http://localhost:4000/backend/finalizePayment" required />
        <input type="text" id="failure_url" name="failure_url" value="http://localhost:4000/backend/finalizePayment" required />
        <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
        <input type="text" id="signature" name="signature" value={data.signature} />
        <input value="Pay" type="submit" />
      </form>
      {data.msg && (
        <div className="text-center p-4 bg-white shadow-lg rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-4">Payment Status</h2>
          <p>{data.msg}</p>
        </div>
      )}
    </div>
  );
};
