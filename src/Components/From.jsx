import React from 'react'
import emailjs from '@emailjs/browser';

const From = () => {

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_gvetc9h','template_mvykkn5',event.target,'al-qKtt-gjILwJ_XX')
    }
    return (
    <div className='div-form'>
        <form className='form-mail' onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name='user_name' />
        <label>Correo</label>
        <input type="email" name='user_email' />
        <label>Mensaje</label>
        <textarea name="user_message" id="" cols="30" rows="10" placeholder="Escribeme tu mensaje aquí"></textarea>
        <button>Enviar</button>
        </form>
    </div>
    )
}

export default From