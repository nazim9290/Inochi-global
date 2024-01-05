"use client"
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../../context";
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
const Dashbord = () => {


    const [name, setName] = useState("");
    const [father, setFather] = useState("");
    const [mother, setMother] = useState("");
    const [paddress, setPadd] = useState("");
    const [permanent, setPermanent] = useState("");
    const [number, setNumber] = useState(0);
    const [education, setEducation] = useState();

    const [email, setEmail] = useState("");
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState({});
    const [state, setState] = useContext(UserContext);

    useEffect(() => {
        if (state && state.user) {
            console.log("user from state => ", state.user);
            setName(state.user.name)
            setEmail(state.user.email)
        }
    }, [state && state.user]);
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        setUploading(true);
        try {
            const { data } = await axios.post("/upload", formData);
            setId({
                id: data.public_id,
            });
            setUploading(false);
        } catch (err) {
            console.error('Error uploading image:', err);
            setUploading(false);
            setSuccessMessage('');
            setErrorMessage("Failed to upload image. Please try again.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(name, email, password, secret);
            setLoading(true);
            const { data } = await axios.put(`/profile-update`, {


                name,
                email,
                password,

            });
            console.log("update response => ", data);
            if (data.error) {
                toast.error(data.error);
                setLoading(false);
            } else {
                // update local storage, update user, keep token
                let auth = JSON.parse(localStorage.getItem("auth"));
                auth.user = data;
                localStorage.setItem("auth", JSON.stringify(auth));
                // update context
                setState({ ...state, user: data });
                setOk(true);
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="d-flex">
                <SideNavbar />
                <div className="w-75" style={{ marginLeft: 'auto' }}>
                    {/* here i wanna show a from  and use update for  */}
                    <h1>Student Profile</h1>
                    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Name:
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Father Name:
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Father Name"
                                    value={father}
                                    onChange={(e) => setFather(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Mother Name:
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Mother Name"
                                    value={mother}
                                    onChange={(e) => setMother(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Present Address
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Present Address"
                                    value={paddress}
                                    onChange={(e) => setPadd(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Permanent Address
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Permanent Address"
                                    value={permanent}
                                    onChange={(e) => setPermanent(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Profile Pic
                            </label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    placeholder="Upload Your Profile"
                                    type="file" onChange={handleImageChange}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Permanent Address
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter your Mobile number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your valid Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Last Education
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your Permanent Address"
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div className="d-flex">
                <div className="w-100" style={{ marginTop: 'auto' }}>
                    <Foter />
                </div>
            </div>
        </>
    );
};

export default Dashbord;