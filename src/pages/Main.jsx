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
import coding from "./../assets/img/coding.svg";
import design from "./../assets/img/design.svg";

function Main() {
    const header = <div className="flex items-center lg:w-3/4">
        <svg className="w-14 h-14 stroke-2 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
        <p className="text-xl text-blue-800 font-mono font-bold">...Hello World !</p>
    </div>;

    const intro = <div className="">
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

    const experience = <div className="text-center pb-32 lg:w-3/4">
        <p className="font-bold text-2xl">Hi, I'm Budi Kurniawan. Nice to meet you</p>
        <p className="font-thin italic text-sm">a little story about me...</p>
        <p>With great motivation, I finally founded my own technology company with some friends called NULL REBORN in 2016. Running a company with limited resources and funds make the whole team especially me to concurrently and focus on multiple responsibilities in order to maintain company stability. I am CEO and also Product Owner, IT Consultant, and Frontend engineer, I have to do a job with a high level of stress, sometimes I have bad experience with time management when several task running at the same time. But the good thing I got is I became a person who dared to make decisions and solve the problems in a fairly limited time.</p>
        <p>As Frontend Engineer and Developer I have more than 6 years experience in building and integrating web app using modern CSS framework (Bootstrap, Tailwind CSS) and modern javascript framework (Vue JS, React Js).</p>
    </div>

    return (
        <div className="layout layout__main">
            <div className="layout__main--header w-100 flex justify-center">{header}</div>
            <div className="layout__main--content">
                <div className="py-1 w-100">
                    {intro}
                </div>
                <div className="px-8 py-14 bg-blue-800 text-white w-100 flex justify-center">
                    {experience}
                </div>
                <div className="grid grid-flow-row -mt-24 w-full ">
                    {/* skills */}
                    <div className="w-100 flex justify-center">
                        <div className="w-3/4 bg-white grid grid-flow-row grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-2 border-2 border-blue-800 rounded-2xl">
                            {/* <div className="p-4">
                                <div className="flex justify-center">
                                    <img className="w-14 h-14 self-end" src={design} alt="" />
                                </div>
                                <div className="font-bold text-center py-4">UI / UX</div>
                                <div>content</div>
                            </div> */}
                            <div className="p-4 lg:border-r">
                                <div className="flex justify-center">
                                    <img className="w-14 h-14 self-end" src={coding} alt="" />
                                </div>
                                <div className="font-bold text-center py-4">FrontEnd Engineer</div>
                                <div className="text-center text-blue-800 py-3 font-mono">Language I Speak & Framework:</div>
                                <div className="font-mono text-center py-2">HTML, CSS, JavaScript, Sass, Bootstrap, Tailwind Css, Vue Js, React Js, Kendo Ui.</div>
                                <div className="text-center text-blue-800 pt-9 pb-3 font-mono">Additional Tools:</div>
                                <div className="font-mono text-center py-2">
                                    <p>Version Control = Git</p>
                                    <p>Github, Gitlab, Azure DevOps</p>
                                    <p>WebStorm, VS Code, Atom</p>
                                    <p>Terminal, Command Prompt</p>
                                    <p>Linux, MacOs, Windows</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-center">
                                    <img className="w-14 h-14 self-end" src={design} alt="" />
                                </div>
                                <div className="font-bold text-center py-4">UI / UX</div>
                                <div>content</div>
                            </div>
                        </div>
                    </div>
                    {/* Technical Experience */}
                    <div className="px-8 py-24">
                        <p className="text-center font-bold text-2xl">Some of Technical Experience</p>
                        <p className="italic text-center font-light">and still counting ...</p>
                        <div className="w-100 flex justify-center">
                            <div className="w-3/4 py-6 grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-3">
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quasi, quod quibusdam expedita magni aut rerum dignissimos recusandae laborum commodi cupiditate officia, assumenda autem, consequuntur quaerat. Rem eum, quam qui non, provident ut dolore illo doloremque veritatis dolores iste veniam doloribus eveniet accusamus vel ex unde! Corporis debitis iusto nisi.</div>
                                <div className="bg-yellow-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quasi, quod quibusdam expedita magni aut rerum dignissimos recusandae laborum commodi cupiditate officia, assumenda autem, consequuntur quaerat. Rem eum, quam qui non, provident ut dolore illo doloremque veritatis dolores iste veniam doloribus eveniet accusamus vel ex unde! Corporis debitis iusto nisi.</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quasi, quod quibusdam expedita magni aut rerum dignissimos recusandae laborum commodi cupiditate officia, assumenda autem, consequuntur quaerat. Rem eum, quam qui non, provident ut dolore illo doloremque veritatis dolores iste veniam doloribus eveniet accusamus vel ex unde! Corporis debitis iusto nisi.</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quasi, quod quibusdam expedita magni aut rerum dignissimos recusandae laborum commodi cupiditate officia, assumenda autem, consequuntur quaerat. Rem eum, quam qui non, provident ut dolore illo doloremque veritatis dolores iste veniam doloribus eveniet accusamus vel ex unde! Corporis debitis iusto nisi.</div>
                                <div className="bg-yellow-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quasi, quod quibusdam expedita magni aut rerum dignissimos recusandae laborum commodi cupiditate officia, assumenda autem, consequuntur quaerat. Rem eum, quam qui non, provident ut dolore illo doloremque veritatis dolores iste veniam doloribus eveniet accusamus vel ex unde! Corporis debitis iusto nisi.</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quasi, quod quibusdam expedita magni aut rerum dignissimos recusandae laborum commodi cupiditate officia, assumenda autem, consequuntur quaerat. Rem eum, quam qui non, provident ut dolore illo doloremque veritatis dolores iste veniam doloribus eveniet accusamus vel ex unde! Corporis debitis iusto nisi.</div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Colaboration Company */}
                    <div className="px-8 py-24">
                        <p className="text-center font-bold text-2xl">I'm proud to have collaborated with some awesome companies:</p>
                        <p className="italic text-center font-light">and still counting ...</p>
                        <div className="w-100 flex justify-center">
                            <div className="w-3/4 py-6 grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-3">
                                <div className="p-4 bg-yellow-300 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</div>
                                <div className="p-4 bg-blue-300 rounded-lg">NULL REBORN</div>
                                <div className="p-4 bg-yellow-300 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</div>
                                <div className="p-4 bg-blue-300 rounded-lg">NULL REBORN</div>
                                <div className="p-4 bg-yellow-300 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</div>
                                <div className="p-4 bg-blue-300 rounded-lg">NULL REBORN</div>
                                <div className="p-4 bg-yellow-300 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</div>
                                <div className="p-4 bg-blue-300 rounded-lg">NULL REBORN</div>
                                <div className="p-4 bg-yellow-300 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</div>
                            </div>
                        </div>
                    </div>

                    {/* Interest Colaboration.? */}

                    {/* Footer */}
                    <div className="layout__main--footer">
                        <div className="flex items-center gap-3">
                            <img className="w-8 h-8 stroke-blue-600" src={github} alt="" />
                            <img className="w-8 h-8" src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;