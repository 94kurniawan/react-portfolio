import ava from "./../assets/img/ava3.svg";

function Main() {
    const header = <div className="flex items-center">
        <svg className="w-14 h-14 stroke-2 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <p className="text-xl text-blue-800 font-mono font-bold">...Hello World !</p>
    </div>;

    const intro = <div>
        <p className="text-2xl font-bold text-center">Senior Frontend Engineer / Developer & UI/UX Designer</p>
        <p className="text-center font-light py-2">I design and code beautifully simple things more than 6 years experience, combine tools and framework/library like Vue Js, React Js, Tailwind CSS, Bootstrap etc.</p>
        <div className="flex justify-center py-4">
            <div className="bg-blue-800 pt-4 px-2 rounded-full">
                <img className="w-36 h-36 rounded-full" src={ava} alt="bk" />
            </div>
        </div>
    </div>

    return (
        <div className="layout layout__main">
            <div className="layout__main--header">{header}</div>
            <div className="layout__main--content">
                {intro}
            </div>
            <div className="layout__main--footer">footer</div>
        </div>
    )
}

export default Main;