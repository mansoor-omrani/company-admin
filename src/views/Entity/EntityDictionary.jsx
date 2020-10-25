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
import React, { createRef } from "react";
import { Modal } from "react-bootstrap";
import BaseComponent from '../../components/BaseComponent';
import { toJson } from 'locustjs-forms';

class EntityDictionary extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      adding: false,
      editingKey: '',
      deletingKey: ''
    };

    this.table = createRef();
  }
  closeDeleteModal = () => {
    this.setState({ openDeleteModal: false, deletingKey: '' })
  }
  onDelete = () => {
    if (typeof this.props.onChanged == 'function') {
      let { data, name } = this.props;
      const { deletingKey } = this.state;

      delete data[deletingKey];

      this.props.onChanged(name, data);
    }
    this.closeDeleteModal();
  }
  onSave = () => {
    if (typeof this.props.onChanged == 'function') {
      let { data, name } = this.props;
      const record = toJson(this.table.current);

      if (!data) {
        data = {}
      }

      data[record.key] = record.value;

      this.props.onChanged(name, data);
    }
    
    this.setState({ editingKey: '', adding: false })
  }
  renderRow(key) {
    const { data, keys } = this.props;
    const { editingKey } = this.state;

    if (editingKey == key) {
      return (<React.Fragment>
                <td>
                  {keys ? 
                    <React.Fragment>
                      <span>{key}</span>
                      <input type="hidden" name="key" defaultValue={key} />
                    </React.Fragment>
                    :
                    <input type="text" name="key" className="form-control" defaultValue={key} />}
                </td>
                <td>
                  <input type="text" name="value" className="form-control" defaultValue={data ? data[key] : null} />
                </td>
                <td>
                  <button type="button" className="btn btn-success btn-fill btn-sm mr-5" onClick={this.onSave}>Save</button>
                  <button type="button" className="btn btn-secondary btn-fill btn-sm" onClick={() => this.setState({ editingKey: '', adding: false })}>Cancel</button>
                </td>
            </React.Fragment>)
    } else {
      return (<React.Fragment>
                <td><span>{key}</span></td>
                <td><span>{data ? data[key] : null}</span></td>
                <td>
                  <button type="button" className="btn btn-primary btn-fill btn-sm mr-5" onClick={() => this.setState({ editingKey: key })}>Edit</button>
                  {keys ? null: <button type="button" className="btn btn-danger btn-fill btn-sm" onClick={() => this.setState({ deletingKey: key, openDeleteModal: true })}>Delete</button>}
                </td>
            </React.Fragment>)
    }
  }
  render() {
    const { data, keys } = this.props;
    const { adding, openDeleteModal } = this.state;

    return (
      <React.Fragment>
        {keys ? null : <button type="button" className="btn btn-primary btn-fill" onClick={() => this.setState({ adding: true })}>New</button>}

        <table ref={this.table} className="table table-striped table-hover" style={this.props.style}>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
              <th width="130"></th>
            </tr>
          </thead>
          <tbody>
            {adding ? <tr>{this.renderRow('')}</tr> : null}
            {keys ? keys.map(key => <tr key={key}>{this.renderRow(key)}</tr>): Object.keys(data).map(key => <tr key={key}>{this.renderRow(key)}</tr>)}
          </tbody>
        </table>

        <Modal show={openDeleteModal} onHide={this.closeDeleteModal}>
          <Modal.Header>Delete Key</Modal.Header>
          <Modal.Body>
            Are you sure to delete this key?
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger btn-fill" onClick={this.onDelete}>Yes</button>
            <button className="btn btn-secondary btn-fill" onClick={this.closeDeleteModal}>No</button>
          </Modal.Footer>
        </Modal>

      </React.Fragment>
    );
  }
}

export default EntityDictionary;
