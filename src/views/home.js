import React,{Component} from "react";
import HomeTop from "../components/home-top";


class Home extends Component{
    render(){
        return(          
            <main className="minh-100vh bg-home d-flex align-items-center">     
                <HomeTop backLink={this.props.backLink}/>
            </main>
        );
    }
}

export default Home;