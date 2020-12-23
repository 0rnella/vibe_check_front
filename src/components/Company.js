import React, { Fragment } from 'react';
import Header from './Header';
import EcosystemCategory from './EcosystemCategory';
import LawsuitsCategory from './LawsuitsCategory';
import DemographicsCategory from './DemographicsCategory';
import PoliticsCategory from './PoliticsCategory';

function CompanyInfo (props) {
  const { companyData } = props;
  const { effectOnEcosystem, politicalContributions, lawsuits, demographics } = companyData;

  return companyData ? (
    <main>
      <section className="company-header">
        <img className="single-company-logo" src={props.companyData.logo} alt={`${props.companyData.name} logo`}/>
        <div>
          <h1 className="company-name">{props.companyData.name}</h1>
        </div>
      </section>
      <section className="category company-snapshot">
        <p> {props.companyData.description}</p>
        <h4>Year Founded: {props.companyData.yearFounded}</h4>
        <h4>Current CEO: {props.companyData.currentCEO}</h4>
        <h4>Annual Net Revenue: ${props.companyData.annualNetRevenue}</h4>
      </section>
      {demographics && <DemographicsCategory categoryData={demographics}/> }
      {effectOnEcosystem && <EcosystemCategory categoryData={effectOnEcosystem}/> }
      {politicalContributions && <PoliticsCategory categoryData={politicalContributions} />}
      {lawsuits && <LawsuitsCategory categoryData={lawsuits} />}
    </main>
  ): <main>Sorry, no information was found.</main>;
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
    return (
      <Fragment>
        <Header/>
        <CompanyInfo companyData={this.state.companyData}/>
      </Fragment>
    );
  }
}



export default Company;