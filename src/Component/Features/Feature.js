import React, { Component } from "react";
import { FaRegHeart, FaDesktop, FaLocationArrow } from "react-icons/fa";
import '../Features/Feature.css';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaRegHeart />,
                title: "Responsive",
                info:
                    " Lorem ipsum dolor sit amet consectetur adipsing elit Cras suscipit arcu libero"
            },
            {
                icon: <FaDesktop />,
                title: "Multi Purpose",
                info:
                    " Lorem ipsum dolor sit amet consectetur adipsing elit Cras suscipit arcu libero"
            },
            {
                icon: <FaLocationArrow />,
                title: "Easy Customize",
                info:
                    " Lorem ipsum dolor sit amet consectetur adipsing elit Cras suscipit arcu libero "


            },

        ]
    };
    render() {
        return (
            <section className="services">

                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
