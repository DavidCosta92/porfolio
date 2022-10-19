import "./Contacto.scss"
import React, {useRef } from 'react';
import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';



const Contacto =()=>{
    const form = useRef();
    const { register, handleSubmit, formState: { errors } }  = useForm();
    const serviceID= "service_ikp6o26";
    const templateID= "template_9d1snnb";
    const publicKey= "SY9HJBbS46YCiQfNz";

    const onSubmit=()=>{
    /*e.preventDefault();*/
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
                console.log(result.text);
                renderAlert("¡Envio exitoso, pronto estare respondiendo!")
        }, (error) => {
                console.log(error.text);
                renderAlert("Lo lamanto pero ocurrio un error, por favor intenta nuevamente")
        });
    }

    function renderForm(){
        return (
            <form className="formulario"  ref={form} onSubmit={handleSubmit(onSubmit)}>
                <div className="labelFormContacto">
                    <label>Nombre</label>
                    <input type="text" name="name" id="name" {...register("name", { required: true})} />
                    {errors.name && <p className="errorForm">Coloca tu nombre por favor</p>}
                </div>

                <div className="labelFormContacto">
                    <label >Email</label>
                    <input type="email" name="email" id="email" {...register("email", { required: true, minLength:8 })}/>
                    {errors.email && errors.email.type ==="required" && <p className="errorForm">¡Solo lo usare para responderte!</p>}
                    {errors.email && errors.email.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 5 caracteres..</p>)}
                </div>
                <div className="labelFormContacto textArea">
                    <label >¿Sobre que te gustaria que charlemos? </label>
                    <textarea type="text" name="mensaje" id="mensaje" {...register("mensaje", { required: true, minLength:5, maxLength:200 })}></textarea>
                    {errors.mensaje && errors.mensaje.type ==="required" && <p className="errorForm">Por favor cuentame!</p>}
                    {errors.mensaje && errors.mensaje.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
                    {errors.mensaje && errors.mensaje.type ==="maxLength" && <p className="errorForm">Mensaje demasiado largo, mantente en los 200 caracteres por favor</p>}                     
                </div>
                <input type="submit" class="botonEnvio"/>
            </form>
        )
    }
    function renderAlert(msj){
        let theme='light';
        JSON.parse(localStorage.getItem("userThemePreference")) && (theme=JSON.parse(localStorage.getItem("userThemePreference")));
        if(theme=== 'light'){
            toast.success(msj, {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }else if(theme=== 'dark'){
            toast.success(msj, {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark'
                });
        }
    }

    return (
        <div className="contacto">
            <div className="contactoContainer">
                <p>¿ Hablamos ?</p>
                {renderForm()}
                    <ToastContainer
                        position="bottom-left"
                        autoClose={400000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover/>
            </div>
        </div>
    )
}
export default Contacto;