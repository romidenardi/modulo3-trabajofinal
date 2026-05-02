import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Contact = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm(); 

  const onSubmit = (formData) => {
    reset();
  }

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label> <br />
          <input 
            {...register("name", 
            {required:"El campo es obligatorio"      
            })} 
            type="text"/> <br />
            {errors.name && <p>{errors.name.message}</p>}      
        </div>
        <div>
          <label>Email</label> <br />
          <input 
            {...register("email", 
            {required:"El campo es obligatorio",
            pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:"Formato inválido"}
            })} 
            type="email"/> <br />
          {errors.email && <p>{errors.email.message}</p>} 
        </div>
        <div>
          <label>Mensaje</label> <br />
          <textarea 
            {...register ("message", 
            {required:"El campo es obligatorio"      
            })} 
            type="text"/> <br />
            {errors.message && <p>{errors.message.message}</p>}      
        </div>        
        <div>
          <button type="submit">Enviar</button>
        </div>      
      </form>
    </div>
  );
};
