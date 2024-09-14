import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Payment = () => {
    const {id,amount } = useParams()
    const { user, isLoaded } = useUser(); 
    const userEmail = user?.emailAddresses?.[0]?.emailAddress;
    const [data,setData]=useState({
        msg:"",
        transaction_id:"",
        signature:""
    })
    console.log(data,"abcd")
    const formref= useRef()


    async function initiatepayment(){

        try {
            const response = await axios.post("http://localhost:4000/backend/payment_esewa", {
                email:userEmail,
                transaction_id:id,
                amount,

            })
            const datares = response.data
            console.log(data,"response")
            setData({
                msg:datares.msg,
                transaction_id:datares.transaction_id,
                signature:datares.signature
            })
            

        } catch (error) {
            
        }

    }
    
    
    
    
    useEffect(()=>{
     initiatepayment()   
    },[])
    
    useEffect(()=>{
     if (data.signature){
        formref.current.submit()
     }   
    },[data]
    )




  return (
     
    <form style={{visibility: "hidden"}} ref={formref} action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
    <input type="text" id="amount" name="amount" value = {amount} required/>
    <input type="text" id="tax_amount" name="tax_amount" value ="0" required/>
    <input type="text" id="total_amount" name="total_amount" value={amount} required/>
    <input type="text" id="transaction_uuid" name="transaction_uuid" value={data.transaction_id}required/>
    <input type="text" id="product_code" name="product_code" value ="EPAYTEST" required/>
    <input type="text" id="product_service_charge" name="product_service_charge" value="0" required/>
    <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
    <input type="text" id="success_url" name="success_url" value="http://localhost:4000/backend/finalizePayment" required/>
    <input type="text" id="failure_url" name="failure_url" value="http://localhost:4000/backend/finalizePayment" required/>
    <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
    <input type="text" id="signature" name="signature" value = {data.signature}/>
    <input value="Pay" type="submit"/>
    </form>
   
  )
}
