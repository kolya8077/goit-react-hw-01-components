import data from 'components/Statistics/data';
import { Statistics } from './stats';
import { TextTitle } from './title';
import PropTypes from 'prop-types';

import css from './style.module.css';

export const Statis = () => {
  return (
    <section className={css.container}>
      <div className={css.statistics}>
        <TextTitle title="Upload stats" />
        <Statistics events={data} />
      </div>
    </section>
  );
};

TextTitle.prototype = {
  text: PropTypes.string.isRequired,
};

Statistics.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
