import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import './ContactCard.css';

const ContactCard = () => {
    const [formStatus, setFormStatus] = useState('Send');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedGames, setSelectedGames] = useState([]);
    const [eventType, setEventType] = useState("");
    const [numAttendees, setNumAttendees] = useState("");

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleGameSelection = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedGames(prev => [...prev, value]);
        } else {
            setSelectedGames(prev => prev.filter(game => game !== value));
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // Convert form data to the appropriate format for submission
        const formData = new FormData();
        formData.append("name", e.target.name.value);
        formData.append("email", e.target.email.value);
        formData.append("message", e.target.message.value);
        formData.append("eventType", eventType);
        formData.append("numAttendees", numAttendees);
        selectedGames.forEach(game => formData.append("selectedGames", game));

        // Submit the form data to Formspree
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
                  e.target.reset();  // Reset the form fields
              } else {
                  console.log(data);  // Log the error data
                  setFormStatus('Error. Try again.');
              }
          });
      })
      
    }

    return (
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

                {/* Games dropdown checklist */}
                <div className="mb-3">
                  <br></br>
                    <label className="form-label">Casino Games</label>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown}>
                            Select Games
                        </button>
                        {showDropdown && (
                            <div className="dropdown-menu show">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="poker" value="Poker" onChange={handleGameSelection} checked={selectedGames.includes("Poker")} />
                                    <label className="form-check-label" htmlFor="poker">Poker</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="blackjack" value="Blackjack" onChange={handleGameSelection} checked={selectedGames.includes("Blackjack")} />
                                    <label className="form-check-label" htmlFor="blackjack">Blackjack</label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <br></br>

                {/* Event type dropdown */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="event">Event Type</label>
                    <select className="form-control" id="event" onChange={(e) => setEventType(e.target.value)} value={eventType}>
                        <option value="">-- Select an event --</option>
                        <option value="birthday">Birthday</option>
                        <option value="fundraiser">Fundraiser</option>
                    </select>
                </div>
                <br></br>

                {/* Number of attendees */}
                <div className="mb-3">
                    <label className="form-label" htmlFor="attendees">Estimated Attendees</label>
                    <input type="number" className="form-control" id="attendees" onChange={(e) => setNumAttendees(e.target.value)} value={numAttendees} min="1" />
                </div>


                <button className="btn btn-primary" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    );
}

export default ContactCard;


