import React, { Fragment } from 'react';
import Header from './Header';
import { CategorySection } from './CategorySections';

function CompanyInfo (props) {
  const { companyData } = props;
  const { effectOnEcosystem, politicalContributions, laborPractices, lawsuits, demographics } = companyData;
  console.log(companyData);
  return companyData ? (
    <main>
      <div className="company">
        <h1 className="company-name"> {props.companyData.name}</h1>
        <img className="single-company-logo" src={props.companyData.logo} alt={props.companyData.name + " logo"}/>
        <h3 className="company-rating"> {props.companyData.rating}</h3>
      </div>
      <section className="category company-snapshot">
        <div className="company-description">
          <p> {props.companyData.description}</p>
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
      </section>
      {effectOnEcosystem && <CategorySection categoryName='Effects on Ecosystem' categoryData={effectOnEcosystem} />}
      {politicalContributions && <CategorySection categoryName='Political Contributions' categoryData={politicalContributions} />}
      {laborPractices && <CategorySection categoryName='Labor Practices' categoryData={laborPractices} />}
      {lawsuits && <CategorySection categoryName='Lawsuits' categoryData={lawsuits} />}
      {demographics && <CategorySection categoryName='Demographics' categoryData={demographics} />}
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