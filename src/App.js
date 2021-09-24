import React, { Component , Fragment } from 'react';

import "tachyons" ;

import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';  

import Navbar from './Components/Header/Navbar';
import Main from './Components/Main/Main';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import RegisterPharmacy from './Components/RegisterPharmacy/RegisterPharmacy';
import FAQ from './Components/FAQ/FAQ';
import TermAndConditions from './Components/TermAndConditions/TermAndConditions';
import RegisterPharmacyRegister from './Components/RegisterPharmacyForm/RegisterPharmacyForm';
import RegisterPharmacyDetail from './Components/RegisterPharmacyForm/RegisterPharmacyForms/RegisterPharmacyDetail';
import RegisterPharmacyConfirm from './Components/RegisterPharmacyForm/RegisterPharmacyForms/RegisterPharmacyConfirm';
import ErrorPage from './Components/UI/ErrorPage';




class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/AboutUs" component={AboutUs}/>
            <Route path="/ContactUs" component={ContactUs}/>
            <Route exact path="/RegisterPharmacy" component={RegisterPharmacy}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/TermAndConditions" component={TermAndConditions}/>
            <Route exact path="/RegisterPharmacy/Register" component={RegisterPharmacyRegister}/>
            <Route exact path="/RegisterPharmacy/Register/Detail" component={RegisterPharmacyDetail}/>
            <Route exact path="/RegisterPharmacy/Register/Detail/Confirm" component={RegisterPharmacyConfirm}/>
            <Route path="/OnlineVisit" component={ErrorPage}/>
            <Route path="/OnlinePharmacy" component={ErrorPage}/>
            <Route path="/OnlineMarket" component={ErrorPage}/>
            <Route path="/HealthRecord" component={ErrorPage}/>
            </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
