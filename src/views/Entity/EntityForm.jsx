import React from 'react';
import BaseComponent from "../../components/BaseComponent";
import EntityDictionary from './EntityDictionary';
import EntityItems from './EntityItems';
import {
  BOOLEAN_COLUMNS,
  NUMERIC_COLUMNS,
  DATETIME_COLUMNS,
  ALIGN_COLUMNS,
  TEXTAREA_COLUMNS,
  DICTIONARY_COLUMNS
} from './EntityColumns';

class EntityForm extends BaseComponent {
  constructor() {
    super();

    this.state = {
    }
  }
  renderItems(prefix, object, formName, columns, onSave, onDelete, editMode) {
    const { readonly, formId, path, entity } = this.props;

    return (
      <React.Fragment>
        <div className="form-group">
          <div className="control-label col-sm-3">
            <span className="form-section">{prefix.toUpperCase()}ITEMS</span>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
            <EntityItems
              formId={(formId || "frm-save") + '-' + (formName.replace(/\./g, '-')) + "items"}
              entity={entity}
              canCreate={true}
              path={path}
              columns={columns}
              readonly={readonly}
              data={object.items || []}
              itemParent={object.id}
              editMode={editMode || 'popup'}
              onSave={onSave}
              onDelete={onDelete} />
          </div>
        </div>
      </React.Fragment>)
  }
  renderButton() {
    const { record, columns, readonly, onButtonDictionaryChanged } = this.props;
    const colButton = columns.find(col => col.name == 'button');

    if (colButton) {
      return (<React.Fragment>
        <div className="form-group">
          <div className="control-label col-sm-3">
            <span className="form-section">BUTTON</span>
          </div>
        </div>
        {this.renderObject((record.button || {}), colButton.columns, 'button.', onButtonDictionaryChanged)}
        {readonly ? null : <input type="hidden" name="buttonParent" defaultValue={record.id} />}
      </React.Fragment>);
    }

    return null;
  }
  renderForm() {
    const { record, columns, readonly, formItemsEditMode, onFormItemSave, onFormItemDelete, onFormDictionaryChanged } = this.props;
    const colForm = columns.find(col => col.name == 'form');

    if (colForm) {
      return (<React.Fragment>
        <div className="form-group">
          <div className="control-label col-sm-3">
            <span className="form-section">FORM</span>
          </div>
        </div>
        {this.renderObject((record.form || {}), colForm.columns, 'form.', onFormDictionaryChanged, onFormItemSave, onFormItemDelete, formItemsEditMode)}
        {readonly ? null : <input type="hidden" name="formParent" defaultValue={record.id} />}
      </React.Fragment>)
    }

    return null;
  }
  renderCheckbox(prefix, col, record) {
    const key = prefix + col.name;
    const { readonly } = this.props;
    const value = record[col.name];
    const checked = value && value.toString() != 'false';

    return (
      <div key={key} className="form-group">
        <label className="control-label col-sm-3" htmlFor={key}>{col.title}</label>
        <div className="col-sm-8">
          {readonly ? <div className="readonly">
            <span className={(col.icon && checked ? col.icon : "")}>
              {(col.icon && checked ? "" : (value || '').toString())}
            </span>
          </div> : <input type="checkbox" className="checkbox" name={key} defaultChecked={checked} />}
        </div>
      </div>
    );
  }
  renderSelect(prefix, col, items, record) {
    const key = prefix + col.name;
    const { readonly } = this.props;
    const value = record[col.name];

    return (
      <div key={key} className="form-group">
        <label className="control-label col-sm-3" htmlFor={key}>{col.title}</label>
        <div className="col-sm-8">
          {readonly ?
            <div className="readonly">{value}</div>
            :
            <select className="form-control" name={key}>
              {items.map(item => <option key={item} value={item} selected={value == item}></option>)}
            </select>}
        </div>
      </div>
    );
  }
  renderTextArea(prefix, col, record) {
    const key = prefix + col.name;
    const { readonly } = this.props;
    const value = record[col.name];

    return (
      <div key={key} className="form-group">
        <label className="control-label col-sm-3" htmlFor={key}>{col.title}</label>
        <div className="col-sm-8">
          {readonly ? <p className="readonly">{value}</p> : <textarea className="form-control" name={key} defaultValue={value}></textarea>}
        </div>
      </div>
    );
  }
  renderInput(prefix, col, record) {
    const key = prefix + col.name;
    const { readonly } = this.props;
    const value = record[col.name];
    let type = col.type;

    if (!type) {
      if (NUMERIC_COLUMNS.indexOf(col.name) >= 0) {
        type = 'number'
      } else if (DATETIME_COLUMNS.indexOf(col.name) >= 0) {
        type = 'date'
      } else if (col.name == 'email') {
        type = 'email'
      } else {
        type = 'text'
      }
    }

    return (
      <div key={key} className="form-group">
        <label className="control-label col-sm-3" htmlFor={key}>{col.title}</label>
        <div className="col-sm-8">
          {readonly ? <div className="readonly">{value}</div> : <input type={type} pattern={col.pattern || ''} className="form-control" name={key} defaultValue={value} />}
        </div>
      </div>
    );
  }
  renderDictionary(prefix, col, record, onChanged) {
    const key = prefix + col.name;
    const { readonly } = this.props;
    const value = record[col.name];

    return (
      <div key={key} className="form-group">
        <label className="control-label col-sm-3" htmlFor={key}>{col.title}</label>
        <div className="col-sm-8">
          {readonly ? <div className="readonly">
            <table className="table table-striped">
              {Object.keys(value).map(key => (<tr key={key}>
                <td>{key}</td>
                <td>{value[key]}</td>
              </tr>))}
            </table>
          </div>
            :
            <React.Fragment>
              <EntityDictionary name={col.name} data={value} keys={col.keys} onChanged={onChanged} style={{ marginBottom: '-10px' }} />
              <input type="hidden" name={key} defaultValue={JSON.stringify(value)} />
            </React.Fragment>}

        </div>
      </div>
    );
  }
  renderObject(object, columns, prefix, onDictionaryChanged, onItemSave, onItemDelete, itemsEditMode) {
    const colItems = columns.find(col => col.name == 'items');

    return (
      <React.Fragment>
        {columns.filter(col => !col.hidden && !Array.isArray(col.columns)).map(col => {
          let result = null;

          if (object) {
            do {
              if (BOOLEAN_COLUMNS.indexOf(col.name) >= 0) {
                result = this.renderCheckbox(prefix, col, object);
                break;
              }

              if (ALIGN_COLUMNS.indexOf(col.name) >= 0) {
                result = this.renderAlign(prefix, col, ['left', 'center', 'right'], object);
                break;
              }

              if (TEXTAREA_COLUMNS.indexOf(col.name) >= 0) {
                result = this.renderTextArea(prefix, col, object);
                break;
              }

              if (DICTIONARY_COLUMNS.indexOf(col.name) >= 0) {
                result = this.renderDictionary(prefix, col, object, onDictionaryChanged);
                break;
              }

              result = this.renderInput(prefix, col, object);
            } while (false);
          }

          return result;
        })}
        {colItems ? this.renderItems(prefix, object, prefix, colItems.columns, onItemSave, onItemDelete, itemsEditMode) : null}
      </React.Fragment>
    )
  }
  render() {
    const { record, formId, columns, itemParent, itemsEditMode, onItemSave, onItemDelete, onDictionaryChanged } = this.props;

    return (
      <React.Fragment>
        <form id={formId || "frm-save"} className="form-horizontal">
          {this.renderObject(record, columns, '', onDictionaryChanged, onItemSave, onItemDelete, itemsEditMode)}
          <input type="hidden" name="id" defaultValue={record.id} />
          <input type="hidden" name="itemParent" defaultValue={record.itemParent || itemParent} />
          {columns.filter(col => col.hidden).map(col => <input key={col.name} type="hidden" name={col.name} defaultValue={record[col.name]} />)}
          {this.renderButton()}
          {this.renderForm()}
        </form>
      </React.Fragment>
    )
  }
}

export default EntityForm;