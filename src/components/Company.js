import React from 'react';
import Header from './Header';
import '../styles/App.scss';

function CompanyInfo (props) {
  return (
    <div className="company">
      {/* In terms of hierarchy, props/companyData/Data we fetched for individual company */}
      <h2 className="company-name"> {props.companyData.name}</h2>
      <img className="company-logo" src={props.companyData.logo} alt={props.companyData.name + " logo"}/>
      <h3 className="company-rating"> {props.companyData.rating}</h3>
    </div>
  );
}
class Company extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      companyData: {},
      error: null
    };
  }

    

  componentDidMount () {
    fetch('https://vibe-check-companies.herokuapp.com/companies/' + this.props.match.params.id)
      .then(res => res.json())
      .then(result => {
        // grabbing individual company data anf storing it into companyInfo
        this.setState({ companyData: result });
      },
      error => this.setState({ error }));
        
  }
  render () {
    console.log('this.props', this.props); 
    console.log('company id', this.props.match.params); 
    return (
      <div className="Company">
        <div className="page-header">
          <Header/>
        </div>
        <div className="company-spotlight">
          {/* creating a companyInfo component */}
          <CompanyInfo companyData={this.state.companyData}/>
          {/* {this.state.companyInfo(company => {
            const { logo, name, id } = company;
            return <CompanyInfo key={name} logo={logo} id={id}/>;
          })} */}
        </div>
      </div>
    );
  }
}



export default Company;