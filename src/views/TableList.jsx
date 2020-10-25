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
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { sortBy } from 'locustjs-extensions-array';

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import EntityItems from './Entity/EntityItems';
import EntityDictionary from './Entity/EntityDictionary';

class TableList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 'record-1', title: 'This is foo', disabled: false, text: 'foo text', itemParent: '', createdDate: '2020-10-16 15:10' },
        { id: 'record-2', title: 'This is bar', disabled: false, text: 'bar text', itemParent: '', createdDate: '2020-10-14 04:23' },
        { id: 'record-3', title: 'This is baz', disabled: false, text: 'baz text', itemParent: '', createdDate: '2020-10-11 18:47' }
      ],
      dictionary: {
        facebook: 'aaa',
        twitter: ''
      }
    }

    this.cols = [
      { name: 'title', title: 'Title', width: '30%' },
      { name: 'text', title: 'Text', width: '40%' },
      { name: 'createdDate', title: 'Created Date', gridExclude: true },
      { name: 'socials', title: 'Social Networking', gridExclude: true, keys: [ 'facebook', 'twitter', 'linkedin', 'skype' ] },
      { name: 'disabled', title: 'Disabeld', dataType: 'boolean', width: '50' },
    ]
  }
  onNew(x) {
    console.log(x)
  }
  onSave = (record) => {
    const { data } = this.state;

    if (record.socials) {
      record.socials = JSON.parse(record.socials);
    }

    if (!record.id) {
      record.id = 'record-' + (parseInt(sortBy(data, x => x.id)[data.length - 1].id.replace('record-', '')) + 1);
      data.push(record);
    } else {
      const index = data.findIndex(x => x.id == record.id);

      if (index >= 0) {
        data[index] = record;
      }
    }

    this.setState({ data })
  }
  onDelete = (index) => {
    const { data } = this.state;
    
    data.splice(index, 1);

    this.setState({ data })
  }
  onChange = (name, d) => {
    this.setState({ dictionary: d })
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Items"
                category="This is list of items in database"
                ctTableResponsive
                content={<EntityItems formId="frm-items" data={this.state.data} columns={this.cols} editMode="popup" onSave={this.onSave} onDelete={this.onDelete} />} />

              <Card
                  title="Dictionary"
                  category="This is list of key/values"
                  ctTableResponsive
                  content={<EntityDictionary data={this.state.dictionary} name="dictionary" onChange={this.onChange} />} />

              <Card
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
