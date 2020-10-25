import { AppServiceRemote, AppServiceFake } from "../appService"
import { pagingCalc } from 'locustjs-pagination';
const data = [];

class FeaturesServiceBase extends AppServiceRemote {
    search(data) { return {}; }
}

class FeaturesServiceRemote extends FeaturesServiceBase {
    constructor() {
        super({ path: '/features' });

        this.options.apis.search = '/search'
    }
    async search(data) {
        const result = await this._post('search', data);

        if (result.Success) {
            const paging = pagingCalc(result.Data.Page, result.Data.RecordCount, result.Data.PageSize, data.visiblePages);

            result.Data.Paging = paging;
        }

        return result;
    }
}

class FeaturesServiceFake extends AppServiceFake {
    constructor() {
        super(data)
    }
    search(data) { return {}; }
}

export { FeaturesServiceBase, FeaturesServiceRemote, FeaturesServiceFake }