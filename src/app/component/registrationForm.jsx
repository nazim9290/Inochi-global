"use client"
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../context/";
import { toast, ToastContainer } from "react-toastify";

const RegistrationForm = () => {
    const [phone, setPhone] = useState(0);
    const [name, setName] = useState("");
    const [email,setEmail]=useState(" ")
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
            toast.error("your password not maching");
            return;
        }
        try {
            setLoading(true);

            const { data } = await axios.post("api/register", {
                phone,
                password,
                name,
                email
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
                setName(" ");
                setPhone(0);
                setcPass(" ");
                setPas(" ")
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
                            <label className="form-label">Email</label>
                            <input type="text"
                                className="form-control"
                                placeholder="Enter your Full Name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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