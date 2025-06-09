"use client"
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../../context";
import SideNavbar from "@/app/component/SideNavbar";
import UserRoute from "../../component/router/UserRoute"
import Foter from "@/app/component/Foter";
import { toast } from "react-toastify";
import { SyncOutlined } from "@mui/icons-material";


const Profile = () => {

    const [phone, setPhone] = useState(0);

    const [name, setName] = useState("");
    const [father, setFather] = useState("");
    const [mother, setMother] = useState("");
    const [paddress, setPadd] = useState("");
    const [permanent, setPermanent] = useState("");
    const [education, setEducation] = useState();

    const [email, setEmail] = useState("");

    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [id, setId] = useState({});
    const [state, setState] = useContext(UserContext);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [ok, setOk] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (state && state.user) {
            setName(state.user.name)
            setEmail(state.user.email);
            setPhone(state.user.phone || '');
            setImage(state.user.image)
        }
    }, [state]);


    const handleImageChange = async (e) => {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("image", file);
      // setUploading(true);
      try {
        const response = await axios.post(
          "https://api.inochieducation.com/api/upload-image-file",
          formData
        );
        if (response && response.data && response.data) {
          setImage({
            url: response.data.url,
            public_id: response.data.public_id,
          });
          setUploading(false);
          setSuccessMessage("Image uploaded successfully.");
        } else {
          setErrorMessage("Failed to upload image. Please try again.");
        }
      } catch (err) {
        console.error("Error uploading image:", err);
        setErrorMessage("Failed to upload image. Please try again.");
      } finally {
        setUploading(false);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const userId = state.user._id;

      try {
        setLoading(true);

        const payload = {
          name,
          email,
          phone,
          father,
          mother,
          paddress,
          permanent, // There's a missing state for 'parent' in your useState declarations
          education,
          image,
        };
        // console.log('Payload:', payload);

        const response = await axios.put(
          `https://api.inochieducation.com/api/profile-update/${userId}`,
          payload
        );

        if (response.data.error) {
          setErrorMessage(response.data.error); // Handle the error message properly
          toast.error(data.error);

          setLoading(false);
        } else {
          // Update local storage, update user, keep token
          let auth = JSON.parse(localStorage.getItem("auth"));
          auth.user = response.data.user;
          localStorage.setItem("auth", JSON.stringify(auth));

          // Update context
          setState({ ...state, user: response.data });

          setOk(true);
          setLoading(false);
          setSuccessMessage("Profile updated successfully.");
        }
      } catch (err) {
        console.error("Error updating profile:", err);
        setErrorMessage("Failed to update profile. Please try again.");
        setLoading(false);
      }
    };

    return (
        <UserRoute>
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
                                    name="image"
                                    type="file" onChange={handleImageChange}

                                />

                            </div>
                        </div>
                        {/*  */}
                        <div className="mb-3 row">
                            <label htmlFor="exampleFormControlInput1" className="form-label col-sm-2 col-form-label">
                                Number
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter your Mobile number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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
                                    placeholder="Enter your Last Education"
                                    value={education}
                                    onChange={(e) => setEducation(e.target.value)}
                                    required
                                />

                            </div>
                        </div>
                        {/* Submit button */}
                        <div className="mb-3 row">
                            <div className="col-sm-10 offset-sm-2">

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={uploading} // Disable if image is still uploading
                                >
                                                                {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}

                                </button>
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
        </UserRoute>
    );
};

export default Profile;