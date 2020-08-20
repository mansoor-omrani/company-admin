import Locator from 'locustjs-locator';
import { AjaxBase } from './ajax';
import { BaseLogger } from './logger';

const ServiceHub = {}

Object.defineProperty(ServiceHub, 'Ajax', {
    get: function () {
        const result = Locator.Instance.resolve(AjaxBase);

        return result;
    }
});
Object.defineProperty(ServiceHub, 'Logger', {
    get: function () {
        const result = Locator.Instance.resolve(BaseLogger);

        return result;
    }
});

export default ServiceHub;