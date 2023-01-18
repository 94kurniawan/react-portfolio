import github from "./../assets/img/github.svg";
import twitter from "./../assets/img/twitter.svg";

function Footer() {
    return (
        <div className="flex items-center gap-3">
            <p>Footer Test</p>
            <img className="w-8 h-8 stroke-blue-600" src={github} alt="" />
            <img className="w-8 h-8" src={twitter} alt="" />
        </div>
    )
}

export default Footer;