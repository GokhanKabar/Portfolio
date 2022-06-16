import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function topbar({ menuOpen,setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">
                    Gokhan Kabar
                    </a>
                <div className="itemContainer">
            <Person className="icon"/>
            <span><a href="https://github.com/GokhanKabar">Github</a></span>
                </div>
                <div className="itemContainer">
            <Mail className="icon"/>
            <span>gokhankabar@hotmail.fr</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                    
                </div>
            </div>
            </div>
            
        </div>
    )
}
