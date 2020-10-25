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
/*
/entity/a-record-id
/entity/edit/a-record-id
/entity/new?itemParent=a-record-id

  data		[]
  noCreate    boolean
  editMode	'inline', 'popup', 'navigate'
  onSave		fn(record)
  onDelete	fn(index)
  onDictionaryChanged       fn(record)
  entity		'works'
  columns		[]
  fromRow		1
  readonly	true | false
  itemParent	''
  itemsEditMode	'inline', 'popup', 'navigate'
  onItemSave	              fn(item)
  onItemDelete	            fn(item)

columns
  name		    string
  title		    string
  gridExclude	boolean
  dataType	  'boolean', 'image'
  icon		    string
  className	  string
  maxWidth	  string
  width		    string
  readonly    boolean
  hidden		  boolean
  pattern     string
  keys        string (fixed values for dictionaries)
*/

import React, { createRef } from "react";
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import BaseComponent from '../../components/BaseComponent';
import EntityForm from "./EntityForm";
import { toJson } from 'locustjs-forms';
import { isObject } from "locustjs-base";
import { isArray } from 'locustjs-base';

class EntityItems extends BaseComponent {
  constructor() {
    super();

    this.state = {
      openSaveModal: false,
      openDeleteModal: false,
      adding: false,
      record: {},
      editingRow: -1,
      deletingRow: -1,
      viewing: false
    };

    this.table = createRef();
  }
  onEditing = (e) => {
    const index = e.target.dataset.index;

    this.setState({
      editingRow: index,
      record: this.props.data[index],
      openSaveModal: this.props.editMode == 'popup'
    })
  }
  onCancelEditing = () => {
    this.setState({
      adding: false,
      editingRow: -1,
      record: {},
      openSaveModal: false
    })
  }
  onDeleting = (e) => {
    const index = e.target.dataset.index;

    this.setState({
      deletingRow: index,
      record: {},
      openDeleteModal: true
    })
  }
  toggleSaveModal = () => {
    this.setState({ openSaveModal: !this.state.openSaveModal, editingRow: -1, record: {}, adding: false, viewing: false })
  }
  toggleDeleteModal = () => {
    this.setState({ openDeleteModal: !this.state.openDeleteModal, deletingRow: -1, record: {} })
  }
  onDelete = () => {
    if (typeof this.props.onDelete == 'function') {
      this.props.onDelete(this.state.deletingRow);
    }
    this.toggleDeleteModal();
  }
  onInlineSave = () => {
    const { onSave } = this.props;

    if (typeof onSave == 'function') {
      const { record, editingRow } = this.state;
      const newRecord = toJson(this.table.current);

      if (record.form && record.form.items) {
        if (!newRecord.form) {
          newRecord.form = {}
        }
        if (!isArray(newRecord.form.items)) {
          newRecord.form.items = []
        }

        newRecord.form.items = record.form.items;
      }

      onSave(newRecord, editingRow);
    }

    this.setState({ openSaveModal: false, editingRow: -1, adding: false, record: {} })
  }
  onModalSave = () => {
    const { formId, onSave } = this.props;

    if (typeof onSave == 'function') {
      const { record, editingRow } = this.state;
      const newRecord = toJson('#' + formId);

      if (record.form && record.form.items) {
        if (!newRecord.form) {
          newRecord.form = {}
        }
        if (!isArray(newRecord.form.items)) {
          newRecord.form.items = []
        }

        newRecord.form.items = record.form.items;
      }

      onSave(newRecord, editingRow);
    }

    this.setState({ openSaveModal: false, editingRow: -1, adding: false, record: {} })
  }
  onNew = () => {
    this.setState({
      adding: this.props.editMode == 'inline',
      record: {},
      openSaveModal: this.props.editMode == 'popup'
    })
  }
  renderRowButtons(record, i) {
    const { editMode, entity, path } = this.props;
    const { editingRow } = this.state;

    return (
      <td>
        {editMode != 'navigate' && editingRow == i ?
          <React.Fragment>
            <button type="button" className="btn btn-success btn-fill btn-sm mr-5" onClick={this.onInlineSave}>Save</button>
            <button type="button" className="btn btn-secondary btn-fill btn-sm" onClick={this.onCancelEditing}>Cancel</button>
            <input type="hidden" name="id" defaultValue={record.id} />
            <input type="hidden" name="itemParent" defaultValue={record.itemParent} />
            <input type="hidden" name="createdDate" defaultValue={record.createdDate} />
          </React.Fragment>
          :
          <React.Fragment>
            {editMode == 'navigate' ? <Link to={`${path}/${entity}/edit/${encodeURIComponent(record.id)}`} className="btn btn-primary btn-fill btn-sm mr-5">Edit</Link> : <button type="button" className="btn btn-primary btn-fill btn-sm mr-5" data-index={i} onClick={this.onEditing}>Edit</button>}
            <button type="button" className="btn btn-danger btn-fill btn-sm" data-index={i} onClick={this.onDeleting}>Delete</button>
          </React.Fragment>
        }
      </td>
    )
  }
  onDictionaryChanged = (name, dictionary) => {
    const { record } = this.state;

    record[name] = dictionary;

    this.setState({ record });
  }
  onButtonDictionaryChanged = (name, dictionary) => {
    const { record } = this.state;

    record.button[name] = dictionary;

    this.setState({ record })
  }
  onFormDictionaryChanged = (name, dictionary) => {
    const { record } = this.state;

    record.form[name] = dictionary;

    this.setState({ record })
  }
  onFormItemSave = (item, index) => {
    const { record } = this.state;

    if (!record.form) {
      record.form = {}
    }
    if (!record.form.items) {
      record.form.items = []
    }
    if (index < 0) {
      record.form.items.push(item);
    } else {
      if (index < record.form.items.length) {
        record.form.items[index] = item;
      } else {
        alert(`form item ${index} was not found!`)
      }
    }

    this.setState({ record })
  }
  onFormItemDelete = index => {
    const { record } = this.state;

    if (!record.form) {
      record.form = {}
    }
    if (!record.form.items) {
      record.form.items = []
    }
    if (index >= 0 && index < record.form.items.length) {
      record.form.items.splice(index, 1)
    }

    this.setState({ record })
  }
  renderCol(col, record) {
    const { entity, editMode, path, page } = this.props;
    const value = record[col.name];
    const jsonValue = isObject(value) ? JSON.stringify(value) : value;

    switch (editMode) {
      case 'navigate':
        return <Link to={`${path}/${entity.toLowerCase()}/${encodeURIComponent(record.id)}/${page || 1}`}>{value}</Link>;
      case 'popup':
        return <a href="#" onClick={_ => this.setState({ openSaveModal: true, viewing: true, record })}>{jsonValue}</a>;
      default:
        return <span>{jsonValue}</span>
    }
  }
  renderRow(record, i) {
    const { columns, editMode, fromRow, readonly } = this.props;
    const { editingRow } = this.state;

    return (<React.Fragment>
      <td>{i >= 0 ? (fromRow || 1) + i : ''}</td>
      {columns.filter(col => !(col.gridExclude || col.hidden || col.name == 'button' || col.name == 'form') || editMode == 'inline').map(col => {
        const key = 'td-' + i + '-' + col.name;
        const value = record[col.name];
        const jsonValue = isObject(value) ? JSON.stringify(value) : value;
        const isEditing = editMode == 'inline' && editingRow == i && !readonly;

        if (isEditing && !col.readonly) {
          if (col.dataType == 'boolean') {
            return (<td key={key}>
              <input type="checkbox" name={col.name} defaultChecked={value} />
            </td>)
          } else {
            return (<td key={key}>
              <input type="text" name={col.name} className="form-control" defaultValue={jsonValue} />
            </td>)
          }
        } else {
          if (col.dataType == 'boolean') {
            return (<td key={key}>
              <span className={(col.icon && value ? col.icon : "")}>{(col.icon && value ? "" : (value || '').toString())}</span>
              {isEditing && col.readonly ? <input type="hidden" name={col.name} defaultValue={value} /> : null}
            </td>)
          } else if (col.dataType == 'image') {
            return (<td key={key}>
              {value ? <img src={value} className="img-fluid" style={{ maxWidth: (col.maxWidth || '150px') }} /> : null}
              {isEditing && col.readonly ? <input type="hidden" name={col.name} defaultValue={value} /> : null}
            </td>)
          } else {
            return (<td key={key} className={`text-default ${col.className || ''}`}>
              {this.renderCol(col, record)}
              {isEditing && col.readonly ? <input type="hidden" name={col.name} defaultValue={jsonValue} /> : null}
            </td>)
          }
        }
      })}
      {readonly ? null : this.renderRowButtons(record, i)}
    </React.Fragment>)
  }
  render() {
    const {
      formId,
      data,
      columns,
      readonly,
      canCreate,
      itemParent,
      entity,
      path,
      editMode,
      itemsEditMode,
      formItemsEditMode,
      onItemSave,
      onItemDelete
    } = this.props;
    const { adding, openDeleteModal, openSaveModal, record, viewing } = this.state;

    return (
      <React.Fragment>
        {readonly || !canCreate ? null : editMode == 'navigate' ? <Link to={`${path}/${entity.toLowerCase()}/new?itemParent=${encodeURIComponent(itemParent)}`} className="btn btn-primary btn-fill btn-sm">New</Link> : <button type="button" className="btn btn-primary btn-fill btn-sm" onClick={this.onNew}>New</button>}

        <table ref={this.table} className="table table-striped table-hover entities">
          <thead>
            <tr>
              <th width="20">#</th>
              {columns.filter(col => !(col.gridExclude || col.hidden || col.name == 'button' || col.name == 'form') || editMode == 'inline').map(col => <th key={'th-' + col.name} width={col.width || ''}>{col.title}</th>)}
              {readonly ? null : <th style={{ minWidth: '130px' }}></th>}
            </tr>
          </thead>
          <tbody>
            {adding ? <tr>{this.renderRow({}, -1)}</tr> : null}
            {data.map((x, i) => (<tr key={i}>{this.renderRow(x, i)}</tr>))}
          </tbody>
        </table>

        <Modal show={openDeleteModal} onHide={this.toggleDeleteModal}>
          <Modal.Header>Delete Item</Modal.Header>
          <Modal.Body>
            Are you sure to delete this item?
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-danger btn-fill" onClick={this.onDelete}>Yes</button>
            <button className="btn btn-secondary btn-fill" onClick={this.toggleDeleteModal}>No</button>
          </Modal.Footer>
        </Modal>

        <Modal show={openSaveModal} onHide={this.toggleSaveModal}>
          <Modal.Header>{viewing ? 'View' : 'Edit'} Item</Modal.Header>
          <Modal.Body>
            <EntityForm 
              formId={formId}
              record={record}
              itemParent={itemParent}
              columns={columns}
              onDictionaryChanged={this.onDictionaryChanged}
              readonly={viewing}
              itemsEditMode={itemsEditMode}
              formItemsEditMode={formItemsEditMode}
              onItemSave={onItemSave}
              onItemDelete={onItemDelete}
              onFormItemSave={this.onFormItemSave}
              onFormItemDelete={this.onFormItemDelete}
              onFormDictionaryChanged={this.onFormDictionaryChanged}
              onButtonDictionaryChanged={this.onButtonDictionaryChanged} />
          </Modal.Body>
          <Modal.Footer>
            {viewing ? <button className="btn btn-secondary btn-fill" onClick={this.toggleSaveModal}>Close</button> :
              <React.Fragment>
                <button className="btn btn-secondary btn-fill" onClick={this.toggleSaveModal}>Cancel</button>
                <button className="btn btn-success btn-fill" onClick={this.onModalSave}>Save</button>
              </React.Fragment>}
          </Modal.Footer>
        </Modal>

      </React.Fragment>
    );
  }
}

export default EntityItems;
