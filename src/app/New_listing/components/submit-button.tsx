import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type SubmitButtonProps = {
  label: string;
  toastMessage:string;
};

export default function SubmitButton({ label,toastMessage }: SubmitButtonProps,) {
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPending(true);
    
    setTimeout(() => {
      setPending(false);
      notify(); 
    }, 2000);
  };

  const notify = () => toast(toastMessage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce, 
  });

  return (
    <>
      <Button disabled={pending} type="submit" onClick={handleSubmit}>
        {pending ? "Submitting..." : label}
      </Button>

 <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/> 

    </>
  );
}
