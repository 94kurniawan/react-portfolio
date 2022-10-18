function Main() {
    const header = <div>Hallo Nih, test test</div>;
    return (
        <div className="layout layout__main">
            <div className="layout__main--header">{header}</div>
            <div className="layout__main--content">content</div>
            <div className="layout__main--footer">footer</div>
        </div>
    )
}

export default Main;