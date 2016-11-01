import React, { Component, PropTypes } from 'react';

import Button from '../../common/Button';

class Applications extends Component {

  constructor(props, context) {
    super(props, context);

    this.onNext = this.onNext.bind(this);
  }

  onNext() {
    console.log('onNext', this.props.userDetails);
  }

  render() {
    return (
      <div className="dc-column">
        <h2>{this.props.heading}</h2>
        <ul className="dc-list dc-list--is-scrollable">
          <li className="dc-list__item dc-list__item--is-interactive">
            First list element
            <div>
              --- Hidden content
            </div>
          </li>
          <li className="dc-list__item dc-list__item--is-interactive">Second list element</li>
          <li className="dc-list__item dc-list__item--is-interactive">Third list element</li>
        </ul>
        <Button type="submit"
                value="Next"
                onClick={this.onNext} />
      </div>
    );
  }
}

Applications.propTypes = {
  heading: PropTypes.string.isRequired
};

export default Applications;
