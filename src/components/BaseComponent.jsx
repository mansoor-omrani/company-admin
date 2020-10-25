import React, { Component } from "react";
import ServiceHub from '../services/serviceHub';

class BaseComponent extends Component {
    constructor(props) {
        super(props);

        this.Hub = ServiceHub;
    }
}

export default BaseComponent;