import React, { Component } from 'react';

class IndexPage extends Component {
  render() {
    return <div>IndexPage</div>;
  }
}

IndexPage.contextTypes = {
  router: React.PropTypes.object,
};

export default IndexPage;
