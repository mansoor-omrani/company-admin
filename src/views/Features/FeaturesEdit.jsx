import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import { Link, Redirect } from 'react-router-dom';
import EntityForm from 'views/Entity/EntityForm';
import BaseComponent from "../../components/BaseComponent";
import { toJson } from 'locustjs-forms';
import SETTINGS from './settings';
import { isArray, isSomeString } from 'locustjs-base';
import { DICTIONARY_COLUMNS } from '../Entity/EntityColumns';

class FeaturesEdit extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            record: {},
            redirect: false
        }

        const id = this.props.match.params.id;
        this.settings = SETTINGS[id] || { columns: [] };
    }
    componentDidMount() {
        this.getData();
    }
    async getData() {
        const id = this.props.match.params.id;

        const result = await this.Hub.Services.Features.getById(id);

        if (result.Success) {
            this.setState({ record: result.Data });
        } else {
            this.props.notify({ message: result.Message, level: 'error' })
        }
    }
    onSaveClicked = async () => {
        const model = toJson('#frm-feature', null, true);
        const { record } = this.state;

        this.refineDictionaries(model);

        if (record.form) {
            if (!model.form) {
                model.form = {}
            }
            if (isArray(record.form.items)) {
                if (!isArray(model.form.items)) {
                    model.form.items = []
                }
                for (let item of record.form.items) {
                    model.form.items.push(item)
                }
            } else {
                model.form.items = null;
            }
        }

        if (isArray(record.items)) {
            if (!isArray(model.items)) {
                model.items = []
            }
            for (let item of record.items) {
                model.items.push(item)
            }
        } else {
            model.items = null;
        }

        const result = await this.Hub.Services.Features.save(model);
        const message = result.Message || (result.Success ? 'Record saved successfully' : 'There was a problem while saving the record');

        this.props.notify({ message: message, level: (result.Success ? 'success' : 'error') })

        if (result.Success) {
            setTimeout(_ => this.setState({ redirect : true }), 1000)
        }
    }
    onItemSave = (item, index) => {
        const { record } = this.state;

        if (!isArray(record.items)) {
            record.items = []
        }
        if (index < 0) {
            this.refineDictionaries(item);

            record.items.push(item);
        } else {
            if (index < record.items.length) {
                this.refineDictionaries(item);

                record.items[index] = item;
            } else {
                this.props.notify({ message: `item ${index} not found`, level: 'error' })
            }
        }

        this.setState({ record })
    }
    onItemDelete = index => {
        const { record } = this.state;

        if (!isArray(record.items)) {
            record.items = []
        }
        if (index >= 0 && index < record.items.length) {
            record.items.splice(index, 1)
        }

        this.setState({ record })
    }
    refineDictionaries(item) {
        for (let key of Object.keys(item)) {
            if (DICTIONARY_COLUMNS.indexOf(key) >= 0 && isSomeString(item[key])) {
                item[key] = JSON.parse(item[key])
            }
        }
    }
    onDictionaryChanged = (col, dictionary) => {
        const { record } = this.state;

        record[col] = dictionary;

        this.setState({ record })
    }
    onButtonDictionaryChanged = (name, dictionary) => {
        const { record } = this.state;

        record.button[name] = dictionary;

        this.setState({ record })
    }
    onFormDictionaryChanged = (col, dictionary) => {
        const { record } = this.state;

        record.form[col] = dictionary;

        this.setState({ record })
    }
    onFormItemSave = (item, index) => {
        const { record } = this.state;

        if (!record.form) {
            record.form = {}
        }
        if (!isArray(record.form.items)) {
            record.form.items = []
        }
        if (index < 0) {
            this.refineDictionaries(item);

            record.form.items.push(item);
        } else {
            if (index < record.form.items.length) {
                this.refineDictionaries(item);

                record.form.items[index] = item;
            } else {
                this.props.notify({ message: `form item ${index} not found`, level: 'error' })
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
    render() {
        const id = this.props.match.params.id;
        const page = this.props.match.params.page || 1;
        const { record, redirect } = this.state;

        if (redirect) {
            return (<Redirect to={this.settings.backToParent && record.itemParent ? `/admin/features/${record.itemParent}` : `/admin/features/${page}`} />)
        }

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title={this.settings.title || record.id}
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <React.Fragment>
                                        {record && 
                                        <EntityForm
                                            formId="frm-feature"
                                            path="/admin"
                                            entity="features"
                                            record={record}
                                            itemParent={record.itemParent}
                                            columns={this.settings.columns}
                                            onDictionaryChanged={this.onDictionaryChanged}
                                            itemsEditMode={this.settings.itemsEditMode || 'popup'}
                                            formItemsEditMode={this.settings.formItemsEditMode || 'inline'}
                                            onItemSave={this.onItemSave}
                                            onItemDelete={this.onItemDelete}
                                            onFormItemSave={this.onFormItemSave}
                                            onFormItemDelete={this.onFormItemDelete}
                                            onFormDictionaryChanged={this.onFormDictionaryChanged}
                                            onItemDictionaryChanged={this.onItemDictionaryChanged}
                                            onButtonDictionaryChanged={this.onButtonDictionaryChanged} />
                                        }
                                        <center>
                                            <Link to={`/admin/features/${encodeURIComponent(id)}/${page}`} className="btn btn-secondary btn-fill mr-5">Back</Link>
                                            <Link to="#" className="btn btn-success btn-fill" onClick={this.onSaveClicked}>Save</Link>
                                        </center>

                                    </React.Fragment>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default FeaturesEdit;