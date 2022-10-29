function Header() {
    return (
        <div className="flex items-center lg:w-3/4">
            <svg className="w-14 h-14 stroke-2 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="text-xl text-blue-800 font-mono font-bold">...Hello World !</p>
        </div>
    )
}

export default Header;