import React, { Fragment } from 'react';
import Header from './Header';
import EcosystemCategory from './EcosystemCategory';
import LawsuitsCategory from './LawsuitsCategory';
import DemographicsCategory from './DemographicsCategory';
import PoliticsCategory from './PoliticsCategory';

function CompanyInfo (props) {
  const { companyData } = props;
  const {
    name,
    logo,
    description,
    yearFounded,
    currentCEO,
    annualNetRevenue,
    effectOnEcosystem,
    politicalContributions,
    lawsuits,
    demographics,

  } = companyData;

  return companyData ? (
    <main>
      {logo && <section className="company-header">
        <img className="single-company-logo" src={logo} alt={`${name} logo`}/>
        <div className="company-overview">
          <h1 className="company-name">{name}</h1>
          <p>{description}</p>
          <p>Year Founded: {yearFounded}</p>
          <p>Current CEO: {currentCEO}</p>
          <p>Annual Net Revenue: ${annualNetRevenue}</p>
        </div>
      </section>}
      {demographics && <DemographicsCategory categoryData={demographics}/> }
      {politicalContributions && <PoliticsCategory categoryData={politicalContributions} />}
      {lawsuits && <LawsuitsCategory categoryData={lawsuits} />}
      {effectOnEcosystem && <EcosystemCategory categoryData={effectOnEcosystem}/> }
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