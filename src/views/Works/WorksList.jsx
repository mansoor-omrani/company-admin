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
  { name: 'category', title: 'Category' },
  { name: 'title', title: 'Title' },
  { name: 'picture', title: 'Picture', dataType: 'image', gridExclude: true },
  { name: 'photo', title: 'Photo', dataType: 'image', gridExclude: false },
  { name: 'client', title: 'Client' },
  { name: 'link', title: 'Link', gridExclude: true },
  { name: 'createdDate', title: 'CreatedDate' },
  { name: 'website', title: 'Website', gridExclude: true },
  { name: 'location', title: 'Location', gridExclude: true },
  { name: 'shortDesc', title: 'Short Description', gridExclude: true },
  { name: 'fullDesc', title: 'Full Description', gridExclude: true },
  { name: 'active', title: 'Active', dataType: 'boolean', icon: 'model-icon pe-7s-check' },
  { name: 'hidden', title: 'Hidden', dataType: 'boolean', icon: 'model-icon pe-7s-check' }
];

class WorksList extends BaseComponent {
  constructor() {
    super();

    this.state = {
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
  }
  componentDidMount() {
    this.getPage(1);
  }
  async getPage(page = 1, pageSize = PAGE_SIZE) {
    const result = await this.Hub.Services.Works.getPage({ page, pageSize });

    if (result.Success) {
      this.setState({ data: result.Data });
    } else {
      this.props.notify({ message: result.Message, level: 'error' })
    }
  }
  onSave = async (record) => {
    const { data } = this.state;

    const result = await this.Hub.Services.Works.save(record);
    const message = result.Message || (result.Success ? 'Record saved successfully' : 'There was a problem while saving the record');

    this.props.notify({ message: message, level: (result.Success ? 'success' : 'danger') })
    this.getPage(data.Page);
  }
  onDelete = async (index) => {
    const { data } = this.state;

    const result = await this.Hub.Services.Works.deleteById(data[index].id);
    const message = result.Message || (result.Success ? 'Record was deleted successfully' : 'There was a problem while deleting the record');

    this.props.notify({ message: message, level: (result.Success ? 'success' : 'danger') })
    this.getPage(data.Page);
  }
  render() {
    const { data } = this.state;
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Our Works"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <React.Fragment>
                    <EntityItems data={data.Items} onSave={this.onSave} onDelete={this.onDelete} columns={columns} fromRow={data.Paging.fromRow} editMode="popup" entity="works" />

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

export default WorksList;
