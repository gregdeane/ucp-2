import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserDetailsForm from './UserDetailsForm';
import * as userActions from '../../actions/user-details.actions';

const UserCreationContainer = (props) => {
  return (
    <div className="dc-row dc-block-grid--small-1 dc-block-grid--medium-2 dc-block-grid--large-3">
      {
        props.userDetailsShown &&
        <UserDetailsForm heading="New User"
                         userDetails={props.userDetails}
                         updateUserDetails={props.actions.updateUserDetails} />
      }
    </div>
  );
};

UserCreationContainer.propTypes = {
  admins: PropTypes.array.isRequired,
  userDetails: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
  userDetailsShown: state.visibility.userDetailsShown
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreationContainer);
