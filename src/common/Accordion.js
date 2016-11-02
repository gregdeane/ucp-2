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
