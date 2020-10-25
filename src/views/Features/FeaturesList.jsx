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
import { Grid, Row, Col } from "react-bootstrap";
import EntityItems from "views/Entity/EntityItems";
import BaseComponent from '../../components/BaseComponent';
import Card from "../../components/Card/Card.jsx";
import GridPagination from "../GridPagination";

const PAGE_SIZE = 5;
const columns = [
  { name: 'id', title: 'Id', width: '250px' },
  { name: 'title', title: 'Title' },
  { name: 'picture', title: 'Picture', dataType: 'image' },
  { name: "description", title: "Description" },
  { name: 'hidden', title: 'Hidden', dataType: 'boolean', icon: 'model-icon pe-7s-check' }
];

class FeaturesList extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      data: {
        Page: 1,
        PageCount: 0,
        RecordCount: 0,
        PageSize: 0,
        Items: [],
        Paging: {
          fromRow: 1
        }
      }
    };

    this.page = parseInt(this.props.match.params.page || 1);
  }
  componentDidMount() {
    this.getPage(this.page);
  }
  async getPage(page = 1, pageSize = PAGE_SIZE) {
    const { title } = this.state;
    const result = await this.Hub.Services.Features.search({ page, pageSize, title });

    if (result.Success) {
      this.setState({ data: result.Data });
    } else {
      this.props.notify({ message: result.Message, level: 'error' })
    }
  }
  render() {
    const { data, title } = this.state;

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Features"
                category="Includes: carousel, accordion, services, page infos, etc."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <React.Fragment>

                    <div className="form-inline" style={{ marginLeft: '20px', marginBottom: '20px' }}>
                      <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" className="form-control" onChange={e => this.setState({ title: e.target.value })} value={title} />
                      </div>
                      <button type="button" className="btn btn-warning btn-fill btn-sm ml-5" onClick={_ => this.getPage(1)}>Search</button>
                    </div>

                    <EntityItems data={data.Items} canCreate={false} page={data.Page} columns={columns} fromRow={data.Paging.fromRow} editMode="navigate" entity="Features" path="/admin" />

                    <GridPagination getPage={p => this.getPage(p)} page={data.Page} recordCount={data.RecordCount} pageSize={data.PageSize} />

                  </React.Fragment>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FeaturesList;
