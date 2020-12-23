import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function CompanyIcon (props) {
  return (
    <div className="company-widget">
      <img className="company-logo" src={props.imageSource} alt={props.name + " logo"} />
      <h3>{props.name}</h3>
    </div>
  );
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companiesData: [],
      error: null
    };
  }

  componentDidMount () {
    fetch('https://vibe-check-companies.herokuapp.com/companies')
      .then(res => res.json())
      .then(result => {
        this.setState({ companiesData: result });
      },
      error => this.setState({ error }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Vibe Check</h1>
          <Nav />
          <p>Find out what your favorite companies are really about.</p>
        </header>
        <div className="icon-group">
          {this.state.companiesData.map(company => {
            const { logo, name, id } = company;
            return (<Link to={`/company/${id}`} key={name}>
              <CompanyIcon imageSource={logo} name={name} />
            </Link>);
          })}
        </div>
      </div>
    );
  }
}

export default Homepage;
