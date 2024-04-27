import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/";
import { toast, ToastContainer } from "react-toastify";

const SeminerBook = () => {
    const [phone, setPhone] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [state, setState] = useContext(UserContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("saminer test")
        try {
            setLoading(true);

            const { data } = await axios.post("/api/seminer-book", {
                phone,
                name,
                email
            });
            if (data.error) {
                setLoading(false);
                toast.error(data.error);
                setErrorMessage("data.error");
                console.log("error");
                email(" ")
            } else {
                setOk(true);
                setLoading(false);
                setName("");
                setPhone(0);
                console.log("saminer test")
                toast.success("Your Seminer Booking Confirm")
                setSuccessMessage(" Seminer Booking Confirm")
                console.log("successfull")
            }
        } catch (err) {
            setLoading(false);
        }
    };

    return (
        <>
            <div>
                <h3 className="text-info text-center my-5" style={{ marginTop: '7%' }}>
                <b className="my-5">Book Seminer</b></h3>
                {/* {errorMessage} */}
                {/* {successMessage } */}

                <div className="wrapper1 card border border-white">
                    <form className="needs-validation text-center"
                     noValidate onSubmit={handleSubmit}>

                        <ToastContainer />
                        <div className="mb-3">
                            <label className="form-labe">Name : </label>
                            <input type="text"
                                class="form-contro"
                                placeholder="Enter your Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                            <div className="invalid-feedback">
                                Please enter a name.
                            </div>
                        </div>
                       
                        <div className="mb-12 sm-12">
                            <label className="form-labe">Email : </label>
                            <input type="text"
                                className="form-contro"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <div className="invalid-feedback">
                                Please enter an email.
                            </div>
                        </div>
                        <br />
                        <div className="mb-12 sm-12 lastf">
                            <label className="form-labe">Phone : </label>
                            <input
                                type="name"
                                className="form-contro "
                                placeholder="Enter your Mobile number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <div className="invalid-feedback">
                                Please enter a phone.
                            </div>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-outline-info w-100">Book Seminer</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SeminerBook;



