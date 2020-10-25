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
import { Route } from "react-router";
import WorksList from "./WorksList";
import { renderComponent } from "../../util";

class Works extends React.Component {
  render() {
    const { notify } = this.props;

    return (
      <div className="content">
          <Route path="/admin/works" render={renderComponent(WorksList, { notify })} />
      </div>
    );
  }
}

export default Works;
