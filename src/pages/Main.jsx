import ava from "./../assets/img/man.jpg";
import code from "./../assets/img/code.svg";
import data from "./../assets/img/data.svg";
import computer from "./../assets/img/computer.svg";
import computerAndPhone from "./../assets/img/computerAndPhone.svg";
import data2 from "./../assets/img/data2.svg";
import coffee from "./../assets/img/coffee.svg";
import coffeeMaker from "./../assets/img/coffeeMaker.svg";
import github from "./../assets/img/github.svg";
import twitter from "./../assets/img/twitter.svg";

function Main() {
    const header = <div className="flex items-center">
        <svg className="w-14 h-14 stroke-2 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <p className="text-xl text-blue-800 font-mono font-bold">...Hello World !</p>
    </div>;

    const intro = <div>
        <p className="text-3xl font-bold text-center">Senior Frontend Engineer / Developer & UI/UX Designer</p>
        <p className="text-center font-light py-2">I design and code beautifully simple things more than 6 years experience, combine tools and framework/library like Vue Js, React Js, Tailwind CSS, Bootstrap etc.</p>
        <div className="flex justify-center py-8 relative">
            <div className="px-1 bg-blue-500 rounded-full animate-spin">
                <div className="w-52 h-52 bg-white"> </div>
            </div>
            <img className="w-48 h-48 absolute rounded-full" src={ava} alt="bk" />
        </div>
        <div className="flex justify-center overflow-x-auto">
            <img className="w-16 h-16 self-center" src={code} alt="" />
            <img className="w-40 h-40 self-end" src={data} alt="" />
            <img className="w-52 h-52" src={computerAndPhone} alt="" />
            <img className="w-40 h-40 self-center" src={data2} alt="" />
            <img className="w-48 h-48 self-center" src={computer} alt="" />
            <img className="w-14 h-14 self-end" src={coffee} alt="" />
            <img className="w-28 h-28 self-end" src={coffeeMaker} alt="" />
        </div>
    </div>

    const experience = <div className="text-center">
        <p className="font-bold text-2xl">Hi, I'm Budi Kurniawan. Nice to meet you</p>
    </div>

    return (
        <div className="layout layout__main">
            <div className="layout__main--header">{header}</div>
            <div className="layout__main--content">
                <div className="py-1">
                    {intro}
                </div>
                <div className="p-8 bg-blue-800 text-white">
                    {experience}
                </div>
            </div>
            <div className="layout__main--footer">
                <div className="flex items-center gap-3">
                    <img className="w-8 h-8 stroke-blue-600" src={github} alt="" />
                    <img className="w-8 h-8" src={twitter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main;