import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import App from './components/app';
import App1 from './containers/container1'
// import MainScreen from '../components/MainScreen';
// import ProfileScreen from '../components/ProfileScreen';

export const AppNavigator = StackNavigator({
  First: { screen: App1 },
  Main: { screen: App },
 });

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);