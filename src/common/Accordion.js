import React, {PropTypes} from 'react';

const Accordion = (props) => {
  return (
    <div className="dc-accordion">
      {
        props.products.map(product => {
          return product.applications.map(application => {
            return (
              <div key={application.id}
                   className="dc-accordion__item">
                <header className="dc-accordion__header"
                        htmlFor={'a' + application.id}
                        onClick={props.onClick}>
                  {application.name}
                </header>
                <div className={'dc-accordion__content' + (props.applicationShown['a' + application.id] ? ' dc-accordion__content--show' : '')}>

                </div>
              </div>
            );
          });
        })
      }
    </div>
  );
};

Accordion.propTypes = {
  products: PropTypes.array.isRequired,
  applicationShown: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Accordion;
