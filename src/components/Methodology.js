import React, { Fragment } from 'react';
import Header from './Header';


function MethodologyPage () {
  return (
    <Fragment>
      <Header />
      <main className="info-page">
        <h2>Methodology</h2>
        <p>We chose a set of 24 companies that were commonly used by our group, and that we wanted to learn more about. All the data researched on each company is publicly available information. Sources are listed on each page.</p>

        <h3>Notes</h3>

        <h4>Demographics</h4>
        <p>
          The Local Racial Demographic and Local Average Household Income statistics for each company’s headquarters is sourced from publicly available census data. The Local Racial Demographic percentages are rounded up to the nearest 10th of a percent. The Local Average Household Income statistics are reported as mean income, unless otherwise noted as median income. Census data was not made publicly available until 1940, so for companies founded prior we have only provided the most recent data.
        </p>
        <p>
          Jobs Created statistics are pulled from various public sources.
        </p>
        <p>
          While we understand that the label of Hispanic/Latinx is not a racial category, we have included statistics regarding these individuals within the scope of this project, since the representation of Hispanic/Latinx individuals is statistically significant in the same way that racial identity is. We also know that white and Asian individuals are not typically underrepresented. Additionally, we acknowledge that multiracial identity and self-reporting is complex and often not reported in detailed segment (e.g. “Black and white” or “Asian and Latinx”).
        </p>
        <p>
          For our comparisons, we compare the most recent local racial demographics of each company to the overall racial demographics, in the same year, of the country each state is founded in. In this iteration, that source is: <a href="https://census.gov/prod/cen2010/briefs/c2010br-02.pdf" target="_blank" rel="noopener noreferrer">census.gov/prod/cen2010/briefs/c2010br-02.pdf</a>
        </p>

        <h4>Lawsuits and Settlements</h4>
        <p>
          All information on company lawsuits was acquired using the form 10-K, or annual reports, of each individual company. All information obtained is based on records accessed from 2015-2019, with updates being made accordingly for more recent data, although some info was unavilable.
        </p>
      </main>
    </Fragment>
  );
}

export default MethodologyPage;