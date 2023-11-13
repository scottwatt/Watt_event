import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import './ContactCard.css';

const ContactCard = () => {
    const [formStatus, setFormStatus] = useState('Send');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedGames, setSelectedGames] = useState([]);
    const [eventType, setEventType] = useState("");
    const [numAttendees, setNumAttendees] = useState("");
    const [errorMsg, setErrorMsg] = useState('');

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleOutsideClick = useCallback((e) => {
        if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowDropdown(false);
        }
    }, [showDropdown, dropdownRef]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleOutsideClick]);

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

        const formData = new FormData();
        formData.append("name", e.target.name.value);
        formData.append("email", e.target.email.value);
        formData.append("message", e.target.message.value);
        formData.append("eventType", eventType);
        formData.append("numAttendees", numAttendees);
        selectedGames.forEach(game => formData.append("selectedGames", game));

        if (selectedGames.length === 0) {
            setErrorMsg('Please select at least one game.');
            return;
        }

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
                        <p><FiPhone /> 661-558-7634</p>
                        <p><FiClock /> Available 24/7 for you</p>
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
                                    <textarea className="form-control" name="message"></textarea>
                                </div>
                            </div>
                            <br />

                            <div className="mb-3" ref={dropdownRef}>
                                <label className="form-label">Casino Games</label>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" onClick={toggleDropdown} required>
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
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="roullette" value="Roullette" onChange={handleGameSelection} checked={selectedGames.includes("Roullette")} />
                                                <label className="form-check-label" htmlFor="roullette">Roulette</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="craps" value="Craps" onChange={handleGameSelection} checked={selectedGames.includes("Craps")} />
                                                <label className="form-check-label" htmlFor="craps">Craps</label>
                                            </div>
                                        </div>
                                    )}
                                    {errorMsg && <div className="alert alert-danger mt-2">{errorMsg}</div>}
                                </div>
                            </div>
                            <br />

                            <div className="mb-3">
                                <label className="form-label" htmlFor="event">Event Type</label>
                                <select className="form-control" id="event" onChange={(e) => setEventType(e.target.value)} value={eventType} required>
                                    <option value="">-- Select an event --</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Work">Work</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Fundraiser">Fundraiser</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label" htmlFor="attendees">Estimated Attendees</label>
                                <input type="number" className="form-control" id="attendees" onChange={(e) => setNumAttendees(e.target.value)} value={numAttendees} required min="1" />
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