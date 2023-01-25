import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as globalActions from '../../redux/stores/app/actions';
import * as brandActions from '../../redux/stores/brands/actions';

// View component
import View from './view';

export const mapStateToProps = state => ({
  loading: state.App.loading,
});

export const mapDispatchToProps = dispatch => ({
  globalAction: bindActionCreators(globalActions, dispatch),
  brandActions: bindActionCreators(brandActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
