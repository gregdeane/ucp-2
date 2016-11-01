import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import UserDetailsForm from './UserDetailsForm';
import { updateUserDetails } from '../../actions/user-info.actions';

const UserCreationContainer = (props) => {
  return (
    <div>
      <h1>User Creation Container</h1>
      <UserDetailsForm heading="Create User"
                       userInfo={props.userInfo}
                       updateUserDetails={props.updateUserDetails} />
    </div>
  );
};

UserCreationContainer.propTypes = {
  admins: PropTypes.array.isRequired,
  userInfo: PropTypes.object,
  updateUserDetails: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserDetails: (userDetails, name, value) => {
      dispatch(updateUserDetails(userDetails, name, value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreationContainer);
