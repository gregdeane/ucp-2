import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import UserDetailsForm from './UserDetailsForm';
import Applications from '../applications/Applications';

import * as userDetailsActions from '../../actions/user-details.actions';
import * as userRolesActions from '../../actions/user-roles.actions';
import * as visibilityActions from '../../actions/visibility.actions';

const UserCreationContainer = (props) => {
  console.log('roles', props.roles);
  return (
    <div className="dc-row dc-block-grid--small-1 dc-block-grid--medium-2 dc-block-grid--large-3">
      {
        props.userDetailsShown &&
        <UserDetailsForm heading="New User"
                         userDetails={props.userDetails}
                         updateUserDetails={props.actions.updateUserDetails}
                         toggleUserDetails={props.actions.toggleUserDetails}
                         toggleApplications={props.actions.toggleApplications} />
      }
      {
        props.applicationsShown &&
        <Applications heading="Applications"
                      products={props.products}
                      roles={props.roles}
                      applicationShown={props.applicationShown}
                      toggleApplication={props.actions.toggleApplication}
                      updateUserRoles={props.actions.updateUserRoles} />
      }
    </div>
  );
};

UserCreationContainer.propTypes = {
  admins: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  userDetails: PropTypes.object.isRequired,
  roles: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
  roles: state.userRoles,
  userDetailsShown: state.visibility.userDetailsShown,
  applicationsShown: state.visibility.applicationsShown,
  applicationShown: state.visibility.applicationShown
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...userDetailsActions,
    ...userRolesActions,
    ...visibilityActions
  }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreationContainer);
