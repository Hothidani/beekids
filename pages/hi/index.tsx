/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Hello = (props: any) => {
  return (
    <div>
      Hi guys.
      <br />
      I'm Daniel.
      <br />
      Wellcome to my website!!
      <br />
      Have a nice day!
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

export default compose(connect(mapStateToProps, null)(Hello));
