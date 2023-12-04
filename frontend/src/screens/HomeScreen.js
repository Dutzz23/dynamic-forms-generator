import React from 'react';
import ScreenNavbar, {NAVBAR_TABS} from "../components/screen/ScreenNavbar";
import ScreenFooter from "../components/screen/ScreenFooter";
import formIcon from "../../src/assets/media/formIcon.svg";
import candidateForm from "../../src/assets/media/candidate-form.svg";
import {Link} from "react-router-dom";
import ScreenTemplate from "../components/ScreenTemplate";

function HomeScreen(props) {
    return (
        <ScreenTemplate currentTab={NAVBAR_TABS.HOME}>
            <div className="container text-start px-2">
                <section className="row justify-content-start">
                    <h1 className="col-xl-10 display-1 mt-5">Welcome to Dynamic forms generator!</h1>
                    <p className="col-md-6 py-5 lead">
                        Revolutionize your form creation process with our intuitive Dynamic Form Generator!
                        Effortlessly craft customized forms tailored to your exact needs. From surveys to
                        registrations, our user-friendly interface empowers you to create, design, and deploy
                        dynamic forms seamlessly. Say goodbye to tedious form-building and hello to efficiency and
                        flexibility with our innovative tool.
                    </p>
                </section>
                <section className="row justify-content-start mt-5 border-top border-5 pt-5">
                    <div className="col-md-6">
                        <img src={formIcon} alt="" className="mh-100 mb-5"/>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="lead">
                            Experience the seamless journey of form creation like never before. Our app empowers users
                            with
                            an intuitive interface that effortlessly navigates through the intricate process of building
                            dynamic forms. From its user-friendly design to its robust features, every click resonates
                            with
                            efficiency and precision. Crafting tailored forms becomes an engaging experience, allowing
                            you
                            to shape and deploy surveys, registrations, and more with unmatched ease. Dive into a world
                            where form creation becomes a fluid, intuitive endeavor, simplifying your workflow and
                            elevating
                            your productivity.
                        </p>
                    </div>
                </section>
                <section className="row justify-content-start mt-5 border-top border-5 pt-5">
                    <div className="col-md-6 d-flex align-items-center">
                        <p className="lead">
                            Explore a universe of possibilities within our app—create bespoke forms tailored to your
                            requirements, seamlessly deploy them, and effortlessly gather insightful data. Crafted with
                            user collaboration in mind, our tool enables easy sharing, ensuring everyone involved stays
                            connected and informed. Dive into a treasure trove of analytics, where real-time statistics
                            provide a comprehensive view of your results. From creation to distribution, from user
                            interaction to data interpretation, our app is your all-in-one solution for form creation,
                            usage tracking, seamless sharing, and in-depth result analysis, putting the power of
                            comprehensive insights at your fingertips.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={candidateForm} alt="" className="mh-100 mb-5"/>
                    </div>
                </section>
                <section className="row justify-content-start mt-5 py-5">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <p className="lead text-center">
                            Don't by shy, create a form!
                        </p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <Link to="/createForm"
                            className="btn btn-dark px-5 py-3"
                        >Create a form</Link>
                    </div>
                </section>
            </div>
        </ScreenTemplate>
    );
}

export default HomeScreen;