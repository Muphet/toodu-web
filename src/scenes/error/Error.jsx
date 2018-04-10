// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./scenes/notFound/NotFound";

export default class Error extends Component {
  // static propTypes = {};

  render() {
    return (
      <div className="error">
        <Switch>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
