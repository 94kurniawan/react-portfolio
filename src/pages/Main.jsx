import React, {useState} from "react";
import Header from "./../components/Header";
import Intro from "./../components/Intro";
import About from "./../components/About";
import Skill from "./../components/Skill";
import TecnicalExperience from "./../components/TecnicalExperience";
import Colaboration from "./../components/Colaboration";
import Footer from "./../components/Footer";

let title = "Senior Frontend Engineer / Developer & UI/UX Designer"

function Main() {
    const [getName, setName] = useState({})
    const changeName = () => {
        setName({name:'changed name'})
    }
    return (
        <div className="layout layout__main">
            <div className="bg-yellow-400 p-3 text-center">
                <button onClick={() => changeName()} className="bg-gray-100 p-2">
                    {getName.name}
                </button>
            </div>
            <div className="layout__main--header"><Header /></div>
            <div className="layout__main--content">
                <div className="py-1">
                    <Intro 
                        title={title}
                    />
                </div>
                <div className="px-8 py-14 bg-blue-800 text-white">
                    <About />
                </div>
                <div className="grid grid-flow-row -mt-24 w-full ">
                    <Skill />
                    <TecnicalExperience />
                    <hr />
                    <Colaboration />
                    {/* Interest Colaboration.? */}

                    {/* Footer */}
                    <div className="layout__main--footer"><Footer /></div>
                </div>
            </div>
        </div>
    )
}

export default Main;