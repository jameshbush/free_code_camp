import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { TestDemo } from "./TestDemo";
import { TributePage as Tribute } from "./00_responsive_web_design/00_tribute_page/TributePage";
import { SurveyForm as Survey } from "./00_responsive_web_design/01_survey_form/SurveyForm";
import { ProductLandingPage as Landing } from "./00_responsive_web_design/02_product_landing_page/ProductLandingPage";
import { TechnicalDocumentation as Docs } from "./00_responsive_web_design/03_technical_documentation/TechnicalDocumentation";
import { PersonalPortfolio as PPort } from "./00_responsive_web_design/04_personal_portfolio_page/PersonalPortfolio";

interface IProps {}
interface IState {}

const P_00 = "00_responsive_web_design";

export function App(props: IProps, state: IState) {
  return (
    <Router>
      <Switch>
        <Route path={`/${P_00}/00_tribute_page`} component={Tribute} />
        <Route path={`/${P_00}/01_survey_form`} component={Survey} />
        <Route path={`/${P_00}/02_product_landing_page`} component={Landing} />
        <Route path={`/${P_00}/03_technical_documentation`} component={Docs} />
        <Route path={`/${P_00}/04_personal_portfolio_page`} component={PPort} />
        <Route path="/" exact component={Home} />
        <Route path="/test-demo" component={TestDemo} />
      </Switch>
    </Router>
  );
}
