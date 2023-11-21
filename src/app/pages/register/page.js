'use client'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Menu from "@/app/componentes/Menu";
import { postUser } from '@/app/functions/handlerAcessAPI';
import { ToastContainer, toast } from 'react-toastify';
import './page.css'

export default function Register() {
  const [registro, setRegistro] = useState({
    name: '', email: '', password: ''
  });

  const { push, refresh } = useRouter();

  const handlerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await postUser(registro);
      push('/pages/dashboard');
    } catch {
      return toast.error('Error');
  }

  const success = true;
   if (success) {
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      toast.error('Ocorreu um erro ao cadastrar o usuário.');
    }
  };
  return (
    <div>
      <Menu/>
  <h1>Register</h1>
  <div className='container'>
  <div className='card'>
  <form onSubmit={handlerFormSubmit}>
  <input
      placeholder='Name' type="name" onChange={(e) => { setRegistro({ ...registro, name: e.target.value }) }}/><br/>
    <input
      placeholder='E-mail' type="email" onChange={(e) => { setRegistro({ ...registro, email: e.target.value }) }}/><br/>
    <input
      placeholder='Password' type='password' onChange={(e) => { setRegistro({ ...registro, password: e.target.value }) }}/><br/>
    <button>Register</button>
  </form>
  </div></div>
  <ToastContainer/>
</div>
)
}