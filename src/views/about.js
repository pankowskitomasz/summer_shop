import React,{Component} from "react";
import AboutDesc from "../components/about-desc";
import AboutExt from "../components/about-ext";

class About extends Component{
    render(){
        return(          
            <main className="minh-100vh bg-about">     
                <AboutDesc/>
                <AboutExt/>
            </main>
        );
    }
}

export default About;