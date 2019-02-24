import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownContent extends Component {
  render () {
    const { children, className, ...dropdownContentProps } = this.props;
    let useUl = dropdownContentProps.useUl;
    dropdownContentProps.className = `dropdown__content ${className}`;
    delete dropdownContentProps.useUl;
    if (useUl) {
      return (
        <ul {...dropdownContentProps}>
          {children}
        </ul>
      );
    } else {
      return (
        <div {...dropdownContentProps}>
          {children}
        </div>
      );
    }
  }
}

DropdownContent.displayName = 'DropdownContent';

DropdownContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

DropdownContent.defaultProps = {
  className: ''
};

export default DropdownContent;
