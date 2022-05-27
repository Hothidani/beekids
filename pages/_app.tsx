import 'assets/scss/app.scss';

import React, { useEffect, useState } from 'react';
import { connect, useDispatch, ConnectedProps } from 'react-redux';
import { appWithTranslation } from 'i18next-config';

import { wrapper } from 'redux/store';

interface IMembershipProps extends PropsFromRedux {
  checkLoginAction: () => any;
  Component: any;
  pageProps: any;
}

const MyApp = (props: IMembershipProps) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

const mapDispatchToProps = (dispatch: any) => ({});

const mapStateToProps = (state: any) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof withConnect>;

export default wrapper.withRedux(withConnect(appWithTranslation(MyApp)));
