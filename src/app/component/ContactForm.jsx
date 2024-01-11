// "use client"
// import axios from 'axios';
// import React, { useState } from 'react';

// const ContactForm = () => {
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [msg, setMsg] = useState("");

//     const [loading, setLoading] = useState(false);
//     const [alert, setAlert] = useState(null);


//     const validateEmail = (email) => {
//         // You can use a more sophisticated email validation library or regex
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     };

//     const validatePhone = (phone) => {
//         // You can use a more sophisticated phone number validation library or regex
//         return /^\d{10}$/.test(phone);
//     };

//     const handleContact = async (e) => {
//         e.preventDefault();

//         // More detailed form validation
//         if (!name.trim()) {
//             setAlert({ type: 'error', message: 'Please enter a name.' });
//             return;
//         }

//         if (!validatePhone(phone.trim())) {
//             setAlert({ type: 'error', message: 'Please enter a valid phone number.' });
//             return;
//         }

//         if (!validateEmail(email.trim())) {
//             setAlert({ type: 'error', message: 'Please enter a valid email address.' });
//             return;
//         }

//         if (!msg.trim()) {
//             setAlert({ type: 'error', message: 'Please enter a message.' });
//             return;
//         }
//         setLoading(true);
//         try {
//             const { data } = await axios.post("api/contact", {
//                 name,
//                 phone,
//                 email,
//                 msg,
//             });

//             // Handle success
//             setAlert({ type: 'success', message: 'Your message was sent successfully!' });
//         } catch (err) {
//             // Handle error
//             console.error(err);
//             setAlert({ type: 'error', message: 'An error occurred. Please try again later.' });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h3 className="text-danger text-center my-5" style={{ marginTop: '7%' }}><b className="my-5">We are always egget to hear from you</b></h3>
//             <p className="text-center mb-5">We ’ re here to help and answer any question you might have.
//                 We look forward to hearing from you!</p>
//             <div className="my-5 wrapper">
//                 <p>Fill the form below so we can get to know you and you needs better.</p>
//                 <div className="card shadow rounded my-5">
//                     <div className="card-body ">
//                         <div className="row">
//                             <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                                 <form action className="needs-validation" noValidate onSubmit={handleContact}>
//                                     <div className="mb-3">
//                                         <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
//                                         <input type="text"
//                                             className="form-control"
//                                             placeholder="Enter your name"
//                                             value={name}
//                                             onChange={(e) => setName(e.target.value)}
//                                             required />
//                                         <div className="invalid-feedback">
//                                             Please enter a name.
//                                         </div>
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
//                                         <input type="phone" className="form-control" placeholder="01********" required
//                                             value={phone}
//                                             onChange={(e) => setPhone(e.target.value)}
//                                         />
//                                         <div className="invalid-feedback">
//                                             Please enter a phone.
//                                         </div>
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
//                                         <input type="email"
//                                             className="form-control"
//                                             placeholder="name@example.com"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             required />
//                                         <div className="invalid-feedback">
//                                             Please enter a email.
//                                         </div>
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="exampleFormControlTextarea1" className="form-label">
//                                             Message</label>
//                                         <textarea className="form-control"
//                                             value={msg}
//                                             onChange={(e) => setMsg(e.target.value)}
//                                             rows={3} required defaultValue={""} />
//                                         <div className="invalid-feedback">
//                                             Please enter a message.
//                                         </div>
//                                     </div>
//                                     <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//                                         {loading ? 'Submitting...' : 'Submit'}
//                                     </button>
//                                 </form>
//                                 {alert && (
//                                     <div className={`alert ${alert.type === 'success' ? 'alert-success' : 'alert-danger'} mt-3`}>
//                                         {alert.message}
//                                     </div>
//                                 )}
//                             </div>
//                             <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
//                                 <div className="my-4">
//                                     <i className="fa fa-map-marker" style={{ fontSize: 24 }} /><b>Address</b>
//                                     <p>Suite 11, 41 Rickard Road, Bankstown, NSW-1000</p>
//                                 </div>
//                                 <div className="my-4">
//                                     <i className="fa fa-phone" style={{ fontSize: 24 }} /><b>Contact info</b>
//                                     <p>01******** </p>
//                                 </div>
//                                 <div className="my-4">
//                                     <i className="fa fa-clock-o" style={{ fontSize: 24 }} /><b>Hour of operation</b>
//                                     <p>Monday-Friday 10:00AM-6:00PM </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* contact us end */}
//         </div>

//     );
// }

// export default ContactForm;
"use client"
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../context/";
import { toast, ToastContainer } from "react-toastify";

const RegistrationForm = () => {
    const [phone, setPhone] = useState(0);
    const [name, setName] = useState("");
    const [password, setPas] = useState("");
    const [cpass, setcPass] = useState("")
    const [state, setState] = useContext(UserContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== cpass) {
            // Handle password mismatch error
            return;
        }
        // console.log(phone,password,name)
        try {
            setLoading(true);

            const { data } = await axios.post("api/register", {
                phone,
                password,
                name,

            });
            // console.log(data.error)
            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            } else {
                toast.success("User Create Successfull")
                // console.log(data)

                // update local storage, update user, keep token

                // update context
                setOk(true);
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
        }
    };

    return (
        <>
            <div>
                <h3 className="text-info text-center my-5" style={{ marginTop: '7%' }}><b className="my-5">Register</b></h3>
                <div className="wrapper1 card border border-white">
                    <form  className="needs-validation" noValidate onSubmit={handleSubmit}>
                    <ToastContainer/>
                     
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter your Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                            <div className="invalid-feedback">
                                Please enter a name.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                           <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter your Mobile number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            <div className="invalid-feedback">
                                Please enter a phone.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"
                                value={password}
                                onChange={(e) => setPas(e.target.value)}
                                required />
                            <div className="invalid-feedback">
                                Please enter a password.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Comfirm Password</label>
                            <input type="password" className="form-control"
                                value={cpass}
                                onChange={(e) => setcPass(e.target.value)}
                                required />
                            <div className="invalid-feedback">
                                Please enter a comfirm password.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-info w-100">Register</button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default RegistrationForm;