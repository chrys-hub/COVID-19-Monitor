import React from 'react';
import './App.css';
import "./Grid/bootstrap.min.css";
import Boris from "./Img/boris.jpg";
import Shield from "./Img/shield.png";
import Work from "./Img/work.png";
import InternationalCovid from "./components/International";
import Specificcountry from "./components/specificcountry";
import Fightcorona from "./components/fightcorona";
function App() {
    return (
        <div className="App">
            <div className="App-header">
                <div class="jumbotron jumbotron-fluid bg-dark">
                    <div class="container">
                        <h1 class="display-4">COVID-19 MONITORING</h1>
                        <img src={Shield} alt="Shield" style={{maxWidth:`200px`,maxHeight:`200px`}}/>
                        <h4 class="lead">Corona virus monitoring Using API :coronavirus-19 and mathdro.id</h4>
                    </div>
                </div>

                <div>
                    <InternationalCovid/>
                </div>
                <div className="bg-dark">
                  <Specificcountry/>
                </div>
                <div>
                    <Fightcorona/>
                </div>
                <div class="jumbotron jumbotron-fluid bg-dark">
                    <div class="container">
                        <h1 class="display-4">ABOUT DEVELOPER</h1>
                        <img src={Boris} alt="Shield" style={{maxWidth:`400px`,maxHeight:`400px`}}/>
                        <h4 class="lead">Hello My Name Is Chrysna ardy and i am a Junior Front-End Web developer,i from Indonesia And i enjoying doing things and making things i'm also a guitarist,so don't hesitate to contact me from that facebook icon on the footer,have fun and if you wanted to use this project i also got the repo on github Just visit my github from that github icon on the footer,so that's it sorry i'm to shy to show my face (／≧ω＼) so i just upload some BORIS for my face repleacer,that's all see you.</h4>
                    </div>
                </div>
                <div class="jumbotron jumbotron-fluid bg-transparent">
                    <div class="container">
                        <h1 class="display-4">CREDITS</h1>
                        <img src={Work} alt="Shield" style={{maxWidth:`400px`,maxHeight:`400px`}}/>
                        <h4 class="lead">Images : <a style={{color:`white`}} href="https://pngtree.com/">https://pngtree.com/</a></h4>
                        <h4 class="lead">Article : <a style={{color:`white`}} href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html</a></h4>
                    </div>
                </div>
                <h3 class="lead">Made with &#10084; Chrysna ardy putra pratama @2020</h3>
            </div>
        </div>
    );
}

export default App;
