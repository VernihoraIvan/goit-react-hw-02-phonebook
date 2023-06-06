import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.section}>
        <h2 className={css.section_title}>{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
