import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const UserCreationContainer = (props) => {
  console.log('userInfo', props.userInfo);
  return (
    <div>
      <h1>User Creation Container</h1>
      <p>{props.admins[0].email}</p>
    </div>
  );
};

UserCreationContainer.propTypes = {
  admins: PropTypes.array.isRequired,
  userInfo: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  userInfo: state.userInfo
});

export default connect(
  mapStateToProps
)(UserCreationContainer);
