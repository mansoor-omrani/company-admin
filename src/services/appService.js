import BaseService from './baseService';
import { API_BASE_URL } from '../constants';
import { pagingCalc } from 'locustjs-pagination';
import { isSomeObject } from 'locustjs-base';

class AppServiceRemote extends BaseService {
    constructor(options) {
        super();

        this.options = Object.assign({
            path: '',
            apis: {
                getPage: '/getpage',
                getById: '/getById',
                save: '/save',
                deleteById: '/deleteById'
            }
        }, options);
    }
    async _post(api, data) {
        try {
            return await this.Post(`${API_BASE_URL}${this.options.path}${this.options.apis[api]}`, data);
        } catch {
            return { Success: false, Status: 'NetworkError', Message: 'Please check your network connection.' }
        }
    }
    async getPage(data) {
        const result = await this._post('getPage', data);

        if (result.Success) {
            const paging = pagingCalc(result.Data.Page, result.Data.RecordCount, result.Data.PageSize, data.visiblePages);

            result.Data.Paging = paging;
        }

        return result;
    }
    getById(id) {
        return this._post('getById', { id });
    }
    save(model) {
        return this._post('save', model);
    }
    deleteById(id) {
        return this._post('deleteById', { id });
    }
}

class AppServiceFake extends BaseService {
    constructor(data) {
        this.data = data;
    }
    filter(record) { }
    getPage(data) {
        return new Promise(res => {
            const paging = pagingCalc(data.page, this.data.length, data.pagesize, data.visiblePages);
            const data = [];
            const from = paging.fromRow;
            const to = paging.toRow == paging.fromRow ? paging.fromRow + 1 : paging.toRow;

            for (let i = from; i < to; i++) {
                data.push(this.data[i - 1]);
            }

            res({ Success: true, Data: {
                Page: paging.page,
                PageSize: paging.pageSize,
                PageCount: paging.pageCount,
                RecordCount: paging.recordCount,
                Items: data
            }, Status: 'Success' });
        })
    }
    getById(id) {
        return new Promise(res => {
            const data = this.data.find(x => x.id == id);

            res({ Success: (data != null), Data: data, Status: (data == null ? 'NotFound' : 'Success') });
        });
    }
    save(model) {
        return new Promise(res => {
            let success = false;

            if (isSomeObject(model)) {
                if (model.id) {
                    for (let i = 0; i < this.data.length; i++) {
                        if (this.data[i].id == model.id) {
                            this.data[i] = model;
                            success = true;
                            break;
                        }
                    }
                } else {
                    this.data.push(model)
                }
            }

            res({ Success: success, Status: (success ? 'NotFound' : 'Success') });
        });
    }
    deleteById(id) {
        return new Promise(res => {
            let success = false;

            if (id) {
                for (let i = 0; i < this.data.length; i++) {
                    if (this.data[i].id == id) {
                        this.data.splice(i, 1);
                        success = true;
                        break;
                    }
                }
            }

            res({ Success: success, Status: (success ? 'NotFound' : 'Success') });
        });
    }
}

export {
    AppServiceRemote,
    AppServiceFake
};