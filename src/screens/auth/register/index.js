import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../../redux/stores/auth/actions';
import * as globalActions from '../../../redux/stores/app/actions';

// View component
import View from './view';

export const mapStateToProps = state => ({
  loading: state.App.loading,
});

export const mapDispatchToProps = dispatch => ({
  globalAction: bindActionCreators(globalActions, dispatch),
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
