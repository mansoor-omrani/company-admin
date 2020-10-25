import React from "react";
import BaseComponent from "../components/BaseComponent";
import { Pagination } from 'react-bootstrap';
import { range } from 'locustjs-extensions-array';
import { pagingCalc } from "locustjs-pagination";

class GridPagination extends BaseComponent {
    render() {
        const { getPage, page, pageSize, recordCount } = this.props;
        const paging = pagingCalc(page, recordCount, pageSize);
        const pages = range(paging.fromPage, paging.toPage + 1);

        return (<Pagination>
            <Pagination.First onClick={() => getPage(1)} />
            <Pagination.Prev onClick={() => paging.page > 1 ? getPage(paging.page - 1) : null} disabled={paging.page <= 1} />
            {pages.map(p => <Pagination.Item key={p} active={(p == paging.page ? true : false)} onClick={() => getPage(p)}>{p}</Pagination.Item>)}
            <Pagination.Next onClick={() => paging.page < paging.pageCount ? getPage(paging.page + 1) : null} disabled={paging.page >= paging.pageCount} />
            <Pagination.Last onClick={() => getPage(paging.pageCount)} />
        </Pagination>)
    }
}

export default GridPagination;