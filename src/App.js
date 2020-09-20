import React from 'react';
import logo from './logo.svg';
import './App.css';

function CompanyIcon (props) {
    return (
    <div className="company-widget">
        <img className="company-logo" src={props.imageSource} alt={props.name + " logo"} />
        <h3>{props.name}</h3>
        <h4>Rating: {props.rating}</h4>
    </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companiesData: [],
            error: null
        }
    }

    componentDidMount () {
        fetch('https://vibe-check-companies.herokuapp.com/companies')
        .then(res => res.json())
        .then(result => {
            this.setState({ companiesData: result })
        },
        error => this.setState({ error }));
    }

    render() {
        return (
          <div className="App">
            <header className="App-header">
                <h1>Vibe Check</h1>
                <nav>
                  <a href="/">About Us</a>
                </nav>
                <p>Tagline</p>
            </header>
                <div className="icon-group">
                    {this.state.companiesData.map(company => <CompanyIcon imageSource={company.logo} name={company.name} />)}
                </div>
          </div>
        );
    }
}

export default App;
