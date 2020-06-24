import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Home from './Home';
import {getAllEvents} from './../../redux/actions/dataActions';

const mapStateToProps = state => ({
  events: state.data.events,
  loading: state.data.loading_events,
});

const mapDispatchToProps = {getAllEvents};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
