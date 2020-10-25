import Locator from 'locustjs-locator';
import { AjaxBase } from './ajax';
import { LoggerBase } from 'locustjs-logging';
import { SubscriptionManagerBase } from 'locustjs-signals';
import { WorksServiceBase } from './Works';
import { FeaturesServiceBase } from './Features';

const ServiceHub = {};
const Services = {};

Object.defineProperty(Services, 'Works', {
    get: function () {
        const result = Locator.Instance.resolve(WorksServiceBase);

        return result;
    }
});
Object.defineProperty(Services, 'Features', {
    get: function () {
        const result = Locator.Instance.resolve(FeaturesServiceBase);

        return result;
    }
});

Object.defineProperty(ServiceHub, 'Ajax', {
    get: function () {
        const result = Locator.Instance.resolve(AjaxBase);

        return result;
    }
});
Object.defineProperty(ServiceHub, 'Logger', {
    get: function () {
        const result = Locator.Instance.resolve(LoggerBase);

        return result;
    }
});
Object.defineProperty(ServiceHub, 'StateManager', {
    get: function () {
        const result = Locator.Instance.resolve(SubscriptionManagerBase);

        return result;
    }
});
Object.defineProperty(ServiceHub, 'Services', {
    get: function () {
        return Services;
    }
});

export default ServiceHub;