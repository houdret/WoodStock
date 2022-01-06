import React from 'react';
import '../styles/Contact.css';
const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-titre">
                <h1>CONTACT US</h1>
            </div>
            <div className="contact-form">
            <input type="text" className="form-control" placeholder="FIRST NAME"/>
            <input type="text" className="form-control" placeholder="LAST NAME"/><br/>
            <input type="email" className="form-control" placeholder="MAIL ADDRESS"/>
            <textarea className="form-control" placeholder="MESSAGE" cols="60" rows="15"></textarea>
            </div>

        </div>
    )
}

export default Contact;
