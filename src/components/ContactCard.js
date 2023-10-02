import React from 'react';
import './ContactCard.css';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const ContactCard = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <div className="input-group">
            <span className="input-group-addon"><FiUser /></span>
            <input className="form-control" type="text" id="name" required />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-addon"><FiMail /></span>
            <input className="form-control" type="email" id="email" required />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <div className="input-group">
            <span className="input-group-addon"><FiMessageSquare /></span>
            <textarea className="form-control" id="message" required />
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
}

export default ContactCard;