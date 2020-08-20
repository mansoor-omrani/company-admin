import Locator, { Resolve } from 'locustjs-locator';
import { AjaxBase, AjaxUsingFetch } from './services/ajax';
import { BaseLogger, ConsoleLogger } from './services/logger';

function configureLocator() {
    Locator.Instance.registerInstance(AjaxBase, new AjaxUsingFetch());
    Locator.Instance.registerInstance(BaseLogger, new ConsoleLogger());
}

export default configureLocator;