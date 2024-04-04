"use client"
import axios from 'axios';
import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);


    const validateEmail = (email) => {
        // You can use a more sophisticated email validation library or regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        // You can use a more sophisticated phone number validation library or regex
        return /^\d{10}$/.test(phone);
    };

    const handleContact = async (e) => {
        e.preventDefault();

        // More detailed form validation
        if (!name.trim()) {
            setAlert({ type: 'error', message: 'Please enter a name.' });
            return;
        }

        if (!validatePhone(phone.trim())) {
            setAlert({ type: 'error', message: 'Please enter a valid phone number.' });
            return;
        }

        if (!validateEmail(email.trim())) {
            setAlert({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        if (!msg.trim()) {
            setAlert({ type: 'error', message: 'Please enter a message.' });
            return;
        }
        setLoading(true);
        try {
            const { data } = await axios.post("http://45.77.247.238:5000/api/contact", {
                name,
                phone,
                email,
                msg,
            });

            // Handle success
            setAlert({ type: 'success', message: 'Your message was sent successfully!' });
        } catch (err) {
            // Handle error
            console.error(err);
            setAlert({ type: 'error', message: 'An error occurred. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h3 className="text-danger text-center my-5" style={{ marginTop: '7%' }}><b className="my-5">We are always egget to hear from you</b></h3>
            <p className="text-center mb-5">We ’ re here to help and answer any question you might have.
                We look forward to hearing from you!</p>
            <div className="my-5 wrapper">
                <p>Fill the form below so we can get to know you and you needs better.</p>
                <div className="card shadow rounded my-5">
                    <div className="card-body ">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <form action className="needs-validation" noValidate onSubmit={handleContact}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required />
                                        <div className="invalid-feedback">
                                            Please enter a name.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                        <input type="phone" className="form-control" placeholder="01********" required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter a phone.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                        <input type="email"
                                            className="form-control"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                        <div className="invalid-feedback">
                                            Please enter a email.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                            Message</label>
                                        <textarea className="form-control"
                                            value={msg}
                                            onChange={(e) => setMsg(e.target.value)}
                                            rows={3} required defaultValue={""} />
                                        <div className="invalid-feedback">
                                            Please enter a message.
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Submit'}
                                    </button>
                                </form>
                                {alert && (
                                    <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}>
                                        {alert.message}
                                    </div>
                                )}
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="my-4">
                                <LocationOnIcon />
                                
                                    <i className="fa fa-map-marker" style={{ fontSize: 24 }} /><b>Address</b>
                                    <p>SM Bhaban,Cha 75/C (3rd & 5ft floor)</p>
                                    <p>North Badda,Dhaka-1212</p>
                                    
                                </div>
                                <div className="my-4">
                                <LocalPhoneIcon />
                                    <i className="fa fa-phone" style={{ fontSize: 24 }} /><b>Contact info</b>
                                    
                                    <p>+8801896-214840-9</p>
                                    <p>+8801784889646</p>
                                </div>
                                <div className="my-4">
                                <AccessTimeIcon/>
                                    <i className="fa fa-clock-o" style={{ fontSize: 24 }} /><b>Hour of operation</b>
                                    <p>Monday-Friday 10:00AM-6:00PM </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact us end */}
        </div>

    );
}

export default ContactForm;
