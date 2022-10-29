import ava from "./../assets/img/man.jpg";
import code from "./../assets/img/code.svg";
import data from "./../assets/img/data.svg";
import computer from "./../assets/img/computer.svg";
import computerAndPhone from "./../assets/img/computerAndPhone.svg";
import data2 from "./../assets/img/data2.svg";
import coffee from "./../assets/img/coffee.svg";
import coffeeMaker from "./../assets/img/coffeeMaker.svg";

function Intro() {
    return (
        <div className="">
            <div className="w-100 flex justify-center">
                <div className="w-3/4">
                    <p className="text-3xl font-bold text-center">Senior Frontend Engineer / Developer & UI/UX Designer</p>
                    <p className="text-center font-light py-2">I design and code beautifully simple things more than 6 years experience, combine tools and framework/library like Vue Js, React Js, Tailwind CSS, Bootstrap etc.</p>
                </div>
            </div>
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
    )
}

export default Intro;