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
    this.props.updateUserDetails(this.props.userInfo.details, name, value);
  }

  onNext() {
    console.log('onNext');
  }

  render() {
    return (
      <div className="dc-column">
        <TextField name="firstName"
                   label="First Name"
                   placeholder="Enter First Name"
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
  userInfo: PropTypes.object.isRequired,
  updateUserDetails: PropTypes.func.isRequired
};

export default UserDetailsForm;
