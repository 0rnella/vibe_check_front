import React, { Fragment } from 'react';
import Header from './Header';
import { CategorySection } from './CategorySections';
import { VictoryPie } from 'victory';

function CompanyInfo (props) {
  const { companyData } = props;
  const { effectOnEcosystem, politicalContributions, laborPractices, lawsuits, demographics={} } = companyData;
  console.log(companyData);
  const manualArray = [{ x: "white", y: 0.2 },
    { x: "black", y: 0.2 },
    { x: "native", y: 0.2 },
    { x: "latinx", y: 0.2 },
    { x: "asian", y: 0.2 },
    { x: "otherMixedRace", y: 0.2 },
    { x: "women", y: 0.33 },
    { x: "men", y: 0.33 },
    { x: "otherGender", y: 0.33 }];

  //get into demographics object
  //demographics {asian : 0.2 , black: 0.2}
  //demographicsData[{x: "asian", y: 0.2}, {x: "black", y: 0.2}]
  const demoKeys = Object.keys(demographics);
  const filteredKeys = demoKeys.filter(key => key !== 'sources' && key !== "employeePopulation");
  console.log(filteredKeys);
  //demoKeys["asian", "black"]
  //foo => {x: foo, y:demographics.foo }
  const stringToObject = (identifier) => {
    const pieChartThing = { x: identifier, y: demographics[identifier] };
    return (pieChartThing);
  };
  //take out appropriate data from demographic object
  const demoPieChartData = filteredKeys.map(stringToObject);
  console.log("Demo Keys Map", demoPieChartData);
  console.log("Manual Array", manualArray);
  //put data into demographicsData array

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
      {effectOnEcosystem && <CategorySection categoryName='Effects on Ecosystem' categoryData={effectOnEcosystem} styling='effects-on-ecosystem'/> }
      {politicalContributions && <CategorySection categoryName='Political Contributions' categoryData={politicalContributions} styling='political-contributions' />}
      {laborPractices && <CategorySection categoryName='Labor Practices' categoryData={laborPractices} styling='labor-practices' />}
      {lawsuits && <CategorySection categoryName='Lawsuits' categoryData={lawsuits} styling='lawsuits' />}
      {demographics && <CategorySection categoryName='Demographics' categoryData={demographics} styling='demographics' />}
      
      <VictoryPie data={manualArray}/>
      {/* <VictoryPie data={[
        { x: "white", y: 0.2 },
        { x: "black", y: 0.2 },
        { x: "native", y: 0.2 },
        { x: "latinx", y: 0.2 },
        { x: "asian", y: 0.2 },
        { x: "otherMixedRace", y: 0.2 },
        { x: "women", y: 0.33 },
        { x: "men", y: 0.33 },
        { x: "otherGender", y: 0.33 }
      ]}/> */}
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