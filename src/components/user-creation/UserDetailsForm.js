import React, { Component, PropTypes } from 'react';

import TextField from '../../common/TextField';
import Button from '../../common/Button';

class UserDetailsForm extends Component {

  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onChange(name, value) {
    this.props.updateUserDetails(this.props.userDetails, name, value);
  }

  onNext() {
    this.props.toggleUserDetails();
    this.props.toggleApplications();
    console.log('onNext', this.props.userDetails);
  }

  render() {
    return (
      <div className="dc-column">
        <h2>{this.props.heading}</h2>
        <TextField name="firstName"
                   label="First Name"
                   placeholder="Enter First Name"
                   onChange={this.onChange} />
        <TextField name="lastName"
                   label="Last Name"
                   placeholder="Enter Last Name"
                   onChange={this.onChange} />
        <TextField name="email"
                   label="Email"
                   placeholder="Enter Email"
                   onChange={this.onChange} />
        <Button type="submit"
                value="Next"
                onClick={this.onNext} />
      </div>
    );
  }
}

UserDetailsForm.propTypes = {
  heading: PropTypes.string.isRequired,
  userDetails: PropTypes.object.isRequired,
  updateUserDetails: PropTypes.func.isRequired,
  toggleUserDetails: PropTypes.func.isRequired,
  toggleApplications: PropTypes.func.isRequired
};

export default UserDetailsForm;
