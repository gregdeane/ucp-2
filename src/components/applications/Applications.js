import React, { Component, PropTypes } from 'react';

import Button from '../../common/Button';
import Accordion from '../../common/Accordion';

import './applications.scss';

class Applications extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.onPermissionChange = this.onPermissionChange.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  toggleAccordion(e) {
    let id = e.target.getAttribute('for');
    this.props.toggleApplication(this.props.applicationShown, id);
  }

  onPermissionChange(id, rollId, rollName, value, status) {
    // console.log('onPermissionChange');
    // console.log('id', id);
    // console.log('rollId', rollId);
    // console.log('rollName', rollName);
    // console.log('status', status);
    console.log('this.props', this.props);
    this.props.updateUserPermissions(this.props.permissions, id, rollId, rollName, value, status);
  }

  onNext() {
    console.log('Applications / onNext', this.props.userDetails);
  }

  render() {
    return (
      <div className="dc-column applications">
        <h2>{this.props.heading}</h2>
        <Accordion products={this.props.products}
                   permissions={this.props.permissions}
                   applicationShown={this.props.applicationShown}
                   onClick={this.toggleAccordion}
                   onPermissionChange={this.onPermissionChange} />
        <Button type="submit"
                value="Next"
                onClick={this.onNext} />
      </div>
    );
  }
}

Applications.propTypes = {
  heading: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  permissions: PropTypes.object.isRequired,
  applicationShown: PropTypes.object.isRequired,
  toggleApplication: PropTypes.func.isRequired,
  updateUserPermissions: PropTypes.func.isRequired
};

export default Applications;
