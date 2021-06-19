import React from "react";
import Routes from "../../routes";
import Footer from "../shared/footer";
import Header from "../shared/header";
import Preloader from "../shared/preloader";
import SideBar from "../shared/sidebar";
//<Preloader />

export default function HomePage(props) {
    return (
        <>
            
            <div className="wrapper">
                <Header />
                <SideBar />
                <div class="content-wrapper">
                    <Routes />
                </div>
                <Footer />
            </div>
        </>
    )

}