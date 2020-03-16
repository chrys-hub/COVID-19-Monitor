import React from 'react';
import Doctor from "../Img/doctor.png";
import Sneeze from "../Img/sneezingwoman.png";
import Wash from "../Img/washhand.png";
import Quarantine from "../Img/quarantine.png";
import Cough from "../Img/cough.png";
import Mask from "../Img/mask.png";
import Sleep from "../Img/sleep.png";
import Spray from "../Img/spray.png";
class Fight extends React.Component{
    render(){
        return(
            <div>
                   <div class="jumbotron jumbotron-fluid bg-transparent">
                    <div class="container">
                        <h1 class="display-4">HOW TO PROTECT YOURSELF</h1>
                        <img src={Doctor} alt="Shield" style={{maxWidth:`400px`,maxHeight:`400px`}}/>
                        <h4 class="lead">How to protect yourself frrom corona virus</h4>
                    </div>
                </div>
                <h1>Know How It Spread</h1>
                    <div className="row" style={{textAlign:`left`,padding:`20px`}}>
                        <div className="col-4">
                            <center>
                        <img src={Sneeze}/>
                        </center>
                        </div>
                        <div className="col-8">
                        <ul>
                            <li><h4>There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).</h4></li>
                            <li><h4>The best way to prevent illness is to avoid being exposed to this virus.</h4></li>
                            <li><h4>The virus is thought to spread mainly from person-to-person.</h4>
                            <ul>
                                <li><h4>Between people who are in close contact with one another (within about 6 feet).</h4></li>
                                <li><h4>Through respiratory droplets produced when an infected person coughs or sneezes.</h4></li>
                            </ul>
                            </li>
                            <li><h4>These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs.</h4></li>
                        </ul>
                        </div>
                    </div>

                    <div className="bg-dark" style={{padding:`20px`}}>
                    <h1 style={{marginTop:`30px`}}>Take Steps To Protect Yourself</h1>
                    <div className="row" style={{textAlign:`left`,padding:`20px`}}>
                        <div className="col-4">
                            <center>
                        <img src={Wash}/>
                        </center>
                        </div>
                        <div className="col-8">
                            <h3>Clean your hands often</h3>
                        <ul>
                            <li><h4>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</h4></li>
                            <li><h4>If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.</h4></li>
                            <li><h4>Avoid touching your eyes, nose, and mouth with unwashed hands.</h4></li>
                        </ul>
                        </div>
                    </div>
                    <div className="row" style={{textAlign:`left`,padding:`20px`}}>
                        <div className="col-4">
                            <center>
                        <img src={Quarantine}/>
                        </center>
                        </div>
                        <div className="col-8">
                            <h3>Avoid close contact</h3>
                        <ul>
                            <li><h4>Avoid close contact with people who are sick</h4></li>
                            <li><h4>Put distance between yourself and other people if COVID-19 is spreading in your community. This is especially important for people who are at higher risk of getting very sick.</h4></li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-transparent" style={{padding:`20px`}}>
                    <h1 style={{marginTop:`30px`}}>Take Steps To Protect Others</h1>
                    <div className="row" style={{textAlign:`left`,padding:`20px`}}>
                        <div className="col-4">
                            <center>
                        <img src={Sleep}/>
                        </center>
                        </div>
                        <div className="col-8">
                            <h3>Stay home if you’re sick</h3>
                        <ul>
                            <li><h4>Stay home if you are sick, except to get medical care.</h4></li>
                        </ul>
                        </div>
                    </div>
                    <div className="row" style={{textAlign:`left`,padding:`20px`}}>
                        <div className="col-4">
                            <center>
                        <img src={Cough}/>
                        </center>
                        </div>
                        <div className="col-8">
                            <h3>Cover coughs and sneezes</h3>
                        <ul>
                            <li><h4>Cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow.</h4></li>
                            <li><h4>Throw used tissues in the trash.</h4></li>
                            <li><h4>Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.</h4></li>
                        </ul>
                        </div>
                    </div>
                    <div className="row" style={{textAlign:`left`,padding:`20px`}}>
                        <div className="col-4">
                            <center>
                        <img src={Mask}/>
                        </center>
                        </div>
                        <div className="col-8">
                            <h3>Wear a facemask if you are sick</h3>
                        <ul>
                            <li><h4>If you are sick: You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s office. If you are not able to wear a facemask (for example, because it causes trouble breathing), then you should do your best to cover your coughs and sneezes, and people who are caring for you should wear a facemask if they enter your room.</h4></li>
                            <li><h4>If you are NOT sick: You do not need to wear a facemask unless you are caring for someone who is sick (and they are not able to wear a facemask). Facemasks may be in short supply and they should be saved for caregivers.</h4></li>
                        </ul>
                        </div>
                    </div>
                    <div className="row" style={{textAlign:`left`,padding:`20px`}}>
                        <div className="col-4">
                            <center>
                        <img src={Spray}/>
                        </center>
                        </div>
                        <div className="col-8">
                            <h3>Clean and disinfect</h3>
                        <ul>
                            <li><h4>Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</h4></li>
                            <li><h4>If surfaces are dirty, clean them: Use detergent or soap and water prior to disinfection</h4></li>
                        </ul>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Fight;