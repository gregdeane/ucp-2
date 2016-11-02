import React, {PropTypes} from 'react';

const Accordion = (props) => {

  // temp randomizer to set defaultChecked to true on some switches
  const getDefaultChecked = () => {
    let options = [true, false];
    let selection = Math.floor(Math.random() * options.length);
    return options[selection];
  };

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
                {
                  application.roles &&
                  <div className={'dc-accordion__content' + (props.applicationShown['a' + application.id] ? ' dc-accordion__content--show' : '')}>
                    <ul className="applications__roles">
                      {
                        application.roles &&
                        application.roles.map(role => {
                          return (
                            <li key={role.id}>
                              {role.name}
                              <div>
                                <input type="checkbox" id={'r' + role.id}
                                       className="dc-checkbox dc-checkbox--alt"
                                       defaultChecked={getDefaultChecked()} />
                                <label htmlFor={'r' + role.id}
                                       className="dc-label">
                                  Check this
                                </label>
                              </div>
                            </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                }
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
