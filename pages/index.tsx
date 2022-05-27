import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Index = (props: any) => {
  return <div>Hello</div>;
};

const mapStateToProps = (state: any) => {
  return {};
};

export default compose(connect(mapStateToProps, null)(Index));
