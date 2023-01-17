import coding from "./../assets/img/coding.svg";
import design from "./../assets/img/design.svg";

function Skill() {
    return (
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
                        <p>VS Code, Atom</p>
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
    )
}

export default Skill;