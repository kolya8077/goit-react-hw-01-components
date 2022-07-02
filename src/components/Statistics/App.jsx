import data from 'components/Statistics/data';
import { Statistics } from 'components/Statistics/stats';
import { TextTitle } from 'components/Statistics/Statistic.styled';
import PropTypes from 'prop-types';

import css from 'components/Statistics/style.module.css';

export const Statis = () => {
  return (
    <section className={css.container}>
      <div className={css.statistics}>
        <TextTitle>{'Upload stats'}</TextTitle>
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
