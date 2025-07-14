import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
    emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID,
    ).then((result)=>{
        console.log(result.text);
        setStatus('Successful');
        setName('');
        setEmail('');
        setMessage('');
    },(error)=>{
        console.log(error.text);
        setStatus('Oops, something went wrong...');
        })
    }
    
    return(
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" 
                id="name" 
                name="from_name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" 
                id="email"
                name="from_email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" 
                name="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
                required></textarea>
            </div>
            <button type="submit">Send Email</button>
            {status && <p>{status}</p>}
        </form>
    );
}

export default EmailForm;