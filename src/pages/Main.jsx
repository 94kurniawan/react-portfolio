// Components
import Header from "./Header";
import Intro from "./Intro";
import Experience from "./Experience";
import Skills from "./Skills";
import TechnicalExperience from "./TechnicalExperience";
import CollaborationCompany from "./CollaborationCompany";
import InterestCollaboration from "./InterestCollaboration";
import Footer from "./Footer";

function Main() {
    return (
        <div className="layout layout__main">
            <div className="layout__main--header w-100 flex justify-center">
                <Header />
            </div>
            <div className="layout__main--content">
                <div className="py-1 w-100">
                    <Intro />
                </div>
                <div className="px-8 py-14 bg-blue-800 text-white w-100 flex justify-center">
                    <Experience />
                </div>
                <div className="grid grid-flow-row -mt-24 w-full ">
                    <Skills />
                    <TechnicalExperience />
                    <hr />
                    <CollaborationCompany />
                    <InterestCollaboration />
                    <div className="layout__main--footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;