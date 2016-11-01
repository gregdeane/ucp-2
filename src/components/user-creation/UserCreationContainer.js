import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import UserDetailsForm from './UserDetailsForm';
import { updateUserDetails } from '../../actions/user-details.actions';

const UserCreationContainer = (props) => {
  return (
    <div>
      <h1>User Creation Container</h1>
      <UserDetailsForm heading="Create User"
                       userDetails={props.userDetails}
                       updateUserDetails={props.updateUserDetails} />
    </div>
  );
};

UserCreationContainer.propTypes = {
  admins: PropTypes.array.isRequired,
  userDetails: PropTypes.object.isRequired,
  updateUserDetails: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails
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
