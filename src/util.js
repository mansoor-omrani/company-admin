import React from 'react';

const renderComponent = (Component, props, pathAskey) => ({ history, match, location }) => (pathAskey ?
        (<Component history={history} match={match} location={location} key={location.pathname} {...props} />) :
        (<Component history={history} match={match} location={location} {...props} />)
    );

export {
    renderComponent
}