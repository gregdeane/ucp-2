import React, { Component, PropTypes } from 'react';

import Button from '../../common/Button';

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
    const { applicationShown } = this.props;

    return (
      <div className="dc-column">
        <h2>{this.props.heading}</h2>
        <div className="dc-accordion">
          <div className="dc-accordion__item">
            <header className="dc-accordion__header"
                    htmlFor="a1"
                    onClick={this.toggleAccordion}>
              Accordion 1
            </header>
            <div className={'dc-accordion__content' + (applicationShown['a1'] ? ' dc-accordion__content--show' : '')}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </div>
          </div>
          <div className="dc-accordion__item">
            <header className="dc-accordion__header"
                    htmlFor="a2"
                    onClick={this.toggleAccordion}>
              Accordion 2
            </header>
            <div className={'dc-accordion__content' + (applicationShown['a2'] ? ' dc-accordion__content--show' : '')}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </div>
          </div>
          <div className="dc-accordion__item">
            <header className="dc-accordion__header"
                    htmlFor="a3"
                    onClick={this.toggleAccordion}>
              Accordion 3
            </header>
            <div className={'dc-accordion__content' + (applicationShown['a3'] ? ' dc-accordion__content--show' : '')}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </div>
          </div>
        </div>
        <Button type="submit"
                value="Next"
                onClick={this.onNext} />
      </div>
    );
  }
}

Applications.propTypes = {
  heading: PropTypes.string.isRequired,
  applicationShown: PropTypes.object.isRequired,
  toggleApplication: PropTypes.func.isRequired
};

export default Applications;
