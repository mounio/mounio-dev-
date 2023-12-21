import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_a1eqhis', 'template_3o8389p', e.target, 'rDYYPImaq97J4VGhN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <div ref={form} className='contact'>
       <form onSubmit={sendEmail}>
        <div className="pers-info">
          <p>
            <label>Name</label>
            <input type="text" name="user_name" />
          </p>
          <p>
            <label>Email</label>
            <input type="email" name="user_email" />
          </p>
        </div>
        <p>
          <label>Message</label>
          <textarea name="message" />
        </p>

         <button type="submit"> Send </button>
        
      </form>
    </div>
  )
}



export default Contact