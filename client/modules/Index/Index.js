import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Index.css';

class Index extends Component {
  render() {
    return <div>Index</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Index.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
