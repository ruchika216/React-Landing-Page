import React, { Component } from 'react';
import { FaRegEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa";
import '../Contact/Contact.css';


class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 f-about">
                        <a href="index.html"><h1><span>R</span>uchika</h1></a>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Cras suscipit arcu libero vestibulum volutpat libero sollicitudin vitae Curabitur ac aliquam consectetur adipiscing elit Cras suscipit arcu libero
                        </p>
                    </div>
                    <div className="col-md-4 l-posts">
                        <h3 className="widgetheading">Latest Posts</h3>
                        <ul>
                            <li><a href="#">This is awesome post title</a></li>
                            <li><a href="#">Awesome features are awesome</a></li>
                            <li><a href="#">Create your own awesome website</a></li>
                            <li><a href="#">Wow, this is fourth post title</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 f-contact">
                        <h3 className="widgetheading">Stay in touch</h3>
                        <a href="#">
                            <p><i className="fa fa-envelope"></i> example@gmail.com</p>
                        </a>
                        <p><i className="fa fa-phone"></i> +345 578 59 45 416</p>
                        <p><i className="fa fa-home"></i> ghsadgjsjadl;hnbkjshdJLKkl;</p>
                    </div>

                </div>
            </div>
        )
    }

}
export default Contact;



