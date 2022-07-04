import data from 'components/Statistics/data';
import { Statistics } from 'components/Statistics/stats';
import {
  TextTitle,
  Container,
  Statistic,
} from 'components/Statistics/Statistic.styled';
import PropTypes from 'prop-types';

export const Statis = () => {
  return (
    <Container>
      <Statistic>
        <TextTitle>{'Upload stats'}</TextTitle>
        <Statistics events={data} />
      </Statistic>
    </Container>
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

