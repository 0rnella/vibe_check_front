import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function CompanyIcon (props) {
  return (
    <div className="company-widget">
      <Link className="company-logo" to={`/company/${props.id}`}>
        <img src={props.imageSource} alt={props.name + " logo"} />
      </Link>
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
          <h1><img className='App-logo' src='/vibecheck_logo.png' alt='Vibe Check' /></h1>
          <Nav />
          <p>Make better, more informed decisions about where you buy.</p>
        </header>
        <div className="icon-group">
          {this.state.companiesData.map(company => {
            const { logo, name, id } = company;
            return <CompanyIcon imageSource={logo} name={name} id={id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Homepage;
