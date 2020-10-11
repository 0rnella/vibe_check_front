import React, { Fragment } from 'react';
import Header from './Header';
import '../styles/Company.scss';

function CompanyInfo (props) {
  return (
    <Fragment>
      <div className="company">
        {/* In terms of hierarchy, props/companyData/Data we fetched for individual company */}
        <h1 className="company-name"> {props.companyData.name}</h1>
        <img className="company-logo" src={props.companyData.logo} alt={props.companyData.name + " logo"}/>
        {/* <h3> {props.companyData.industry}</h3> */}
        <h3 className="company-rating"> {props.companyData.rating}</h3>
      </div>
      <div className="company-snapshot">
        <div className="company-description">
          <h4> {props.companyData.description}</h4>
        </div>
        <div className="company-history">
          <h4>Year Founded: {props.companyData.yearFounded}</h4>
        </div>
        <div className="company-ceo">
          <h4>Current CEO: {props.companyData.currentCEO}</h4>
        </div>
        <div className="annual-revenue">
          <h4>Annual Net Revenue: ${props.companyData.annualNetRevenue}</h4>
        </div>
      </div>
      <div className="demographics">
        <h1>Demographics</h1>
      </div>
      <div className="labor-practices">
        <h1>Labor Practices</h1>
      </div>
      <div className="lawsuits">
        <h1>Lawsuits</h1>
      </div>
      <div className="political-contributions">
        <h1>Political Contributions</h1>
      </div>
      <div className="effects-on-ecosystem">
        <h1>Effects on Ecosystem</h1>
      </div>
      
    </Fragment>
    
    
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
        </div>
      </div>
    );
  }
}



export default Company;