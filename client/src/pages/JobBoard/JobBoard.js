import React, { Component } from 'react';
import Link from '../../components/Link';


export default class JobBoard extends Component {

    render() {
        return (
          <div>
            <Link/>
            <a href="/" onClick={() => this.props.history.goBack()} id="back-link">← Back to main page</a>
          </div>
        );
      }


}