import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

const Index = (loginProps: any) => {
  return <div></div>;
};

const mapDispatchToProps = (dispatch: any) => ({});

const mapStateToProps = (state: any) => {
  return {};
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Index);
