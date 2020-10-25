/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch } from "react-router";
import FeaturesList from "./FeaturesList";
import FeaturesNew from "./FeaturesNew";
import FeaturesEdit from "./FeaturesEdit";
import { renderComponent } from "../../util";
import FeaturesView from "./FeaturesView";

class Features extends React.Component {
  render() {
    const { notify } = this.props;

    return (
      <Switch>
        <Route path="/admin/features" render={renderComponent(FeaturesList, { notify })} exact />
        <Route path="/admin/features/:page(\d+)" render={renderComponent(FeaturesList, { notify })} />
        <Route path="/admin/features/new" render={renderComponent(FeaturesNew, { notify })} />
        <Route path="/admin/features/edit/:id/:page(\d+)" render={renderComponent(FeaturesEdit, { notify }, true)} />
        <Route path="/admin/features/edit/:id" render={renderComponent(FeaturesEdit, { notify }, true)} />
        <Route path="/admin/features/:id/:page(\d+)" render={renderComponent(FeaturesView, { notify }, true)} />
        <Route path="/admin/features/:id" render={renderComponent(FeaturesView, { notify }, true)} />
        <Route path="/" render={_ => <h1>Not found</h1>} />
      </Switch>
    );
  }
}

export default Features;
