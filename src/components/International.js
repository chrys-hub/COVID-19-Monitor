import React from 'react';
import axios from "axios";
import CountUp from "react-countup";
class CovidMonitor extends React.Component {
    state = {
        isLoaded: undefined,
        deathurl: 'https://corona.lmao.ninja/all',
        death: {}
    };

    componentDidMount() {
        axios.get(`${
            this.state.deathurl
        }`).then(res => this.setState({death: res.data, isLoaded: true})).catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <h2>INTERNATIONAL COVID-19 REPORT</h2>
                {
                this.state.isLoaded === true ? (
                   <div class="row" style={{padding:`50px`}}>
                    <div class="col-sm">
                    <h4>CONFIRMED:
                        <h4>
                        <CountUp
                        end={this.state.death.cases}
                        duration={20} 
                        />
                        </h4>
                        </h4>
                    </div>
                    <div class="col-sm">
                    <h4>RECOVERED:
                        <h4>
                        <CountUp
                        end={this.state.death.recovered}
                        duration={20} 
                        />
                        </h4>
                        </h4>
                    </div>
                    <div class="col-sm">
                    <h4>DEATHS:
                        <h4><CountUp
                        end={this.state.death.deaths}
                        duration={20} 
                        /></h4>
                        </h4>
                    </div>
                  </div>
                ) : (
                    <div style={
                        {padding: `50px`}
                    }>
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            } </div>
        );
    }
}

export default CovidMonitor;
