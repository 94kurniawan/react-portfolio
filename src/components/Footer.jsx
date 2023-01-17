import github from "./../assets/img/github.svg";
import twitter from "./../assets/img/twitter.svg";

let note = 'Test note dari luar fungsi'

function Footer() {
    const test = () => {
        return 'test fungsi'
    }
    return (
        <div className="flex items-center gap-3">
            <p>{note} | {test()}</p>
            <img className="w-8 h-8 stroke-blue-600" src={github} alt="" />
            <img className="w-8 h-8" src={twitter} alt="" />
        </div>
    )
}

export default Footer;