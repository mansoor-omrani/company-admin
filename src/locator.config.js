import Locator, { Resolve } from 'locustjs-locator';
import { AjaxBase, AjaxUsingFetch } from './services/ajax';
import { LoggerBase, DynamicLogger } from 'locustjs-logging';
import { WorksServiceBase, WorksServiceRemote, WorksServiceFake } from './services/Works';
import { FeaturesServiceBase, FeaturesServiceRemote, FeaturesServiceFake } from './services/Features';
import { SubscriptionManagerBase, SubscriptionManagerDefault } from 'locustjs-signals';

function configureLocator(remote) {
    Locator.Instance.registerInstance(AjaxBase, new AjaxUsingFetch());
    Locator.Instance.registerInstance(LoggerBase, new DynamicLogger());
    Locator.Instance.registerInstance(SubscriptionManagerBase, new SubscriptionManagerDefault());

    if (remote) {
        Locator.Instance.register(WorksServiceBase, WorksServiceRemote);
        Locator.Instance.register(FeaturesServiceBase, FeaturesServiceRemote);
    } else {
        Locator.Instance.register(WorksServiceBase, WorksServiceFake);
        Locator.Instance.register(FeaturesServiceBase, FeaturesServiceFake);
    }
}

export default configureLocator;