"use client";

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import { Bounce, Flip, toast, ToastContainer } from 'react-toastify';



export default function InputForm() {
    const [formState , setFormState] = useState({
        Email:'',password:''
    });

    function handleEmail(e) {
        console.log(e);
        setFormState({...formState, Email: e.target.value});
    }
    function handlePass(e) {
        console.log(e);
        setFormState({...formState, password: e.target.value});
    }
    
    function handleFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('==========', formState);
        if(formState.Email === ''){
              toast.error('the email is required!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
                });
        }
        if(formState.password === ''){
              toast.error('the password is required!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Flip,
                });
        }
        
    }
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-10">
      <form onSubmit={handleFormSubmit} className="w-full max-w-md rounded-2xl border bg-background/80 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:p-8">
        <div className="mb-6 space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in by filling the details below.
          </p>
        </div>

        <FieldGroup className="gap-6">
        
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input value={formState.Email} onChange={handleEmail} id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>
          </FieldDescription>
        </Field>
        <div className="grid grid-cols-1 gap-4 w-full">
          <Field>
            <FieldLabel htmlFor="form-password">Password</FieldLabel>
            <Input value={formState.password} onChange={handlePass}  id="form-email" type="password" placeholder="**********" />
          </Field>
          
        </div>
        
        <Field
          orientation="horizontal"
          className="pt-2 [&>[data-slot=button]]:flex-1"
        >
          
          <Button type="submit">LogIn</Button>
        </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
