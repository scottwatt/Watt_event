import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiMapPin, FiPhone } from 'react-icons/fi';
import './ContactCard.css';

const ContactCard = () => {
    const [formStatus, setFormStatus] = useState('Send');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", e.target.name.value);
        formData.append("email", e.target.email.value);
        formData.append("message", e.target.message.value);

        fetch("https://formspree.io/f/xoqopnpz", {
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            body: formData,
        })
        .then((response) => {
            return response.json().then(data => {
                if (response.ok) {
                    setFormStatus('Sent!');
                    e.target.reset();
                } else {
                    console.log(data);
                    setFormStatus('Error. Try again.');
                }
            });
        })
    }

    return (
        <div className="contact-card-container">
            <div className="flex-container">
                <div className="left-section">
                    <div className="business-info">
                        <h3>Watt Events</h3>
                        <p><FiMapPin /> Bakersfield, California</p>
                        <p><FiPhone /> 661-330-0115</p>
                        <div className="google-map">
                            <iframe
                                title="Watt Events Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.469528315297!2d-119.0187124847681!3d35.37329248026311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6b2d4a32d07b%3A0x9c5f06d5c8f9b9c!2sBakersfield%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1641847463644!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <div className="container mt-5">
                        <h2 className="mb-3">Contact Us</h2>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="name">Name</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><FiUser /></span>
                                    <input className="form-control" type="text" name="name" required />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="email">Email</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><FiMail /></span>
                                    <input className="form-control" type="email" name="email" required />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="message">Message</label>
                                <div className="input-group">
                                    <span className="input-group-addon"><FiMessageSquare /></span>
                                    <textarea className="form-control" name="message" required></textarea>
                                </div>
                            </div>

                            <button className="btn btn-primary" type="submit">
                                {formStatus}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;