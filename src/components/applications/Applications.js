import React, { Component, PropTypes } from 'react';

import Button from '../../common/Button';
import Accordion from '../../common/Accordion';

class Applications extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  toggleAccordion(e) {
    let id = e.target.getAttribute('for');
    this.props.toggleApplication(this.props.applicationShown, id);
  }

  onNext() {
    console.log('Applications / onNext', this.props.userDetails);
  }

  render() {
    return (
      <div className="dc-column">
        <h2>{this.props.heading}</h2>
        <Accordion products={this.props.products}
                   applicationShown={this.props.applicationShown}
                   onClick={this.toggleAccordion} />
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
  applicationShown: PropTypes.object.isRequired,
  toggleApplication: PropTypes.func.isRequired
};

export default Applications;
