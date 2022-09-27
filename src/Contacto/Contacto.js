import "./Contacto.scss"

import { useForm } from "react-hook-form";
import {toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacto =()=>{
    const { register, handleSubmit, formState: { errors } }  = useForm();
    const onSubmit=()=>{
        renderAlert("¡Gracias por escribirme, pronto estare respondiendo!")
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
    // onSubmit={handleSubmit(onSubmit)}
    // action="c4da5ffe16f2017c6b7b40a809c770c7" method="POST"
    return (
        <div className="contacto">
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                    <div className="labelFormContacto">
                        <label>Nombre</label>
                        <input type="text" name="name" {...register("name", { required: true})} />
                        {errors.name && <p className="errorForm">Coloca tu nombre por favor</p>}
                    </div>

                    <div className="labelFormContacto">
                        <label >Email</label>
                        <input type="email" name="email" {...register("email", { required: true, minLength:8 })}/>
                        {errors.email && errors.email.type ==="required" && <p className="errorForm">¡Solo lo usare para responderte!</p>}
                        {errors.email && errors.email.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 5 caracteres..</p>)}
                    </div>
                    <div className="labelFormContacto textArea">
                        <label >¿Sobre que te gustaria que charlemos? </label>
                        <textarea type="text" name="mensaje" {...register("mensaje", { required: true, minLength:5, maxLength:200 })}></textarea>
                        {errors.mensaje && errors.mensaje.type ==="required" && <p className="errorForm">Por favor cuentame!</p>}
                        {errors.mensaje && errors.mensaje.type ==="minLength" && (<p className="errorForm">Al menos necesitamos 8 caracteres..</p>)}
                        {errors.mensaje && errors.mensaje.type ==="maxLength" && <p className="errorForm">Mensaje demasiado largo, mantente en los 200 caracteres por favor</p>}                     
                    </div>
                    <input type="submit" class="botonEnvio"/>
                </form>
                <ToastContainer
                    position="bottom-left"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
            pauseOnHover/>
        </div>
    )
}
export default Contacto;