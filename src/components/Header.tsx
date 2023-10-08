import '../index.css'

interface Props {
    handleClick: any,
}

function Header( props: Props) {

    return (
        <>
            <div className="header">
                <div 
                className="header-text"
                onClick={() => props.handleClick('init')}
                >
                    <h1>JENNIFER ENOS</h1>
                </div>
                <div className="logo-div">
                    <a href="https://github.com/len444"> <img className="logo" src="../src/assets/github-logo.png" /></a>
                    <a href="https://www.linkedin.com/in/jennifer-enos-75ba10269"><img className="logo"
                        src="../src/assets/LinkedIn_icon.svg" /></a>
                </div>
            </div>
        </>
    )
}

export default Header