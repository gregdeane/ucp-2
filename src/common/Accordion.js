import React, {PropTypes} from 'react';

const Accordion = (props) => {

  const handlePermissionChange = (e) => {
    let el = e.target;
    let rollId = el.getAttribute('data-roleid');
    let rollName = el.getAttribute('data-rolename');

    props.onPermissionChange(`r${rollId}`, rollId, rollName, el.value, el.checked);
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
                    <ul className="applications-list">
                      {
                        application.roles &&
                        application.roles.map(role => {
                          let perm = props.roles['r' + role.id] || {};
                          return (
                            <li key={role.id}
                                className="applications-list__item">
                              {role.name}
                              <div>
                                <input type="checkbox"
                                       id={'r' + role.id}
                                       className="dc-checkbox dc-checkbox--alt"
                                       data-roleid={role.id}
                                       data-rolename={role.name}
                                       checked={perm && perm.status}
                                       value={perm.value || 'false'}
                                       onChange={handlePermissionChange} />
                                <label htmlFor={'r' + role.id} className="dc-label">&nbsp;</label>
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
  roles: PropTypes.object.isRequired,
  applicationShown: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onPermissionChange: PropTypes.func.isRequired
};

export default Accordion;
