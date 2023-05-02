import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import "./signup.css";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });

    console.log(udata);

    const adddata = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);

        setUdata(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    };

    const senddata = async(e)=>{
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = udata;

        // if(fname === ""){
        //     toast.warn("please enter your name",{
        //         position: "top-center"
        //     })
        // }
        // else if(email === ""){
        //     toast.warn("please enter your email",{
        //         position: "top-center"
        //     })
        // }
        // else if(mobile === ""){
        //     toast.warn("please enter your phone no.",{
        //         position: "top-center"
        //     })
        // }
        // else if(password === ""){
        //     toast.warn("creat a password",{
        //         position: "top-center"
        //     })
        // }
        // else if(cpassword === ""){
        //     toast.warn("confirm your password",{
        //         position: "top-center"
        //     })
        // }
        // else{
        //     const res = await fetch("register",{
        //         method:"POST",
        //         headers:{
        //             "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify({
        //             fname,email,mobile,password,cpassword
        //         })
        //     });
        // }


        const res = await fetch("register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
        // console.log(data);


        if(res.status === 422 || !data){
            // alert("no data")
            toast.warn("invalid details",{
                position: "top-center",
            })
        }else{
            // alert("data succesfully added")
            toast.success("data succesfully added",{
                position: "top-center",
            })
            setUdata({...udata,fname:"",email:"",mobile:"",password:"",cpassword:""})
        }
    }

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname" placeholder='Enter your name'
                                onChange={adddata}
                                value={udata.fname}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" placeholder='Enter your email'
                                onChange={adddata}
                                value={udata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile" placeholder='Enter your mobile number'
                                onChange={adddata}
                                value={udata.mobile}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={udata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Password again</label>
                            <input type="password" name="cpassword" placeholder='Confirm your password'
                                onChange={adddata}
                                value={udata.cpassword}
                                id="passwordg" />
                        </div>
                        <button className="signin_btn" onClick={senddata}>Continue</button>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                    <Divider />
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default SignUp;