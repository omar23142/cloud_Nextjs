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
import {  Flip, toast  } from 'react-toastify';



export default function InputForm() {
    const [formState , setFormState] = useState({
        Name:'',Email:'',Phone:'', Country:'',Address:'', password:'', passwordConfirm:''
    });

    function handleCountry(value:string) {
        console.log('=======', value);
        setFormState({...formState,  Country: value })
    }
    function handleName(e) {
        console.log('ddddddddddddd', e);
        setFormState({...formState, Name: e.target.value});
    }
    function handleEmail(e) {
        console.log(e);
        setFormState({...formState, Email: e.target.value});
    }
    function handlePass(e) {
        console.log(e);
        setFormState({...formState, password: e.target.value});
    }
    function handlePassConf(e) {
        console.log(e);
        setFormState({...formState, passwordConfirm: e.target.value});
    }
    function handlePhone(e) {
        console.log(e);
        setFormState({...formState, Phone: e.target.value});
    }
    function handleAddress(e) {
        setFormState({...formState, Address:e.target.value});
    }
    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        if(formState.Name=== '')
        {
            toast.error('the Name is required!', {
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
        if(formState.Phone=== '')
        {
            toast.error('the Phone is required!', {
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
        if(formState.password=== '' || formState.passwordConfirm === '')
        {
            toast.error('the password & passwordconfirm is required!', {
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
        if(formState.password !==  formState.passwordConfirm )
        {
            toast.error('the password & passwordconfirm is not the same!', {
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
            Sign up by filling the details below.
          </p>
        </div>

        <FieldGroup className="gap-6">
        <Field>
          <FieldLabel htmlFor="form-name">User Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            // required
            value={formState.Name}
            onChange={handleName}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input value={formState.Email} onChange={handleEmail} id="form-email" type="email" placeholder="john@example.com" />
          <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription>
        </Field>
          
          <Field>
          <FieldLabel htmlFor="form-password">Password</FieldLabel>
          <Input value={formState.password} onChange={handlePass} id="form-email" type="password" placeholder="******" />
          <FieldDescription>
            We&apos;ll never share your password with anyone.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="form-password-confirm">Password Confirm</FieldLabel>
          <Input value={formState.passwordConfirm} onChange={handlePassConf} id="form-email" type="password" placeholder="******" />
          <FieldDescription>
          
          </FieldDescription>
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input value={formState.Phone} onChange={handlePhone}  id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <Select value={formState.Country} onValueChange={(value)=>handleCountry(value)}  defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input value={formState.Address} onChange={handleAddress} id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <Field
          orientation="horizontal"
          className="pt-2 [&>[data-slot=button]]:flex-1"
        >
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
