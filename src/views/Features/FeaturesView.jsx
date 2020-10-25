import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";
import Card from "../../components/Card/Card.jsx";
import { Link } from 'react-router-dom';
import EntityForm from 'views/Entity/EntityForm';
import BaseComponent from "../../components/BaseComponent";
import SETTINGS from './settings';

class FeaturesView extends BaseComponent {
    constructor(props) {
        super(props);

        const id = this.props.match.params.id;

        this.state = {
            id: id,
            record: {}
        }

        this.settings = SETTINGS[id] || { columns: [] };
    }
    componentDidMount() {
        const { id } = this.state;

        this.getData(id);
    }
    async getData(id) {
        const result = await this.Hub.Services.Features.getById(id);

        if (result.Success) {
            this.setState({ record: result.Data, id });
        } else {
            this.props.notify({ message: result.Message, level: 'error' })
        }
    }
    render() {
        const page = this.props.match.params.page || 1;
        const { id, record } = this.state;

        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title={this.settings.title}
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <React.Fragment>

                                        <EntityForm record={record} path="/admin" entity="features" columns={this.settings.columns} readonly={true} />

                                        <center>
                                            <Link to={this.settings.backToParent && record.itemParent ? `/admin/features/${record.itemParent}` : `/admin/features/${page}`} className="btn btn-secondary btn-fill mr-5">Back</Link>
                                            <Link to={`/admin/features/edit/${encodeURIComponent(id)}/${page}`} className="btn btn-primary btn-fill">Edit</Link>
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

export default FeaturesView;