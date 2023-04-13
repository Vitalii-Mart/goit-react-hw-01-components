import PropTypes from 'prop-types';
import {
  Section,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
     {title && <Title>{title}</Title>} 

      <StatList>
        {stats.map(e => (
          <Item
            style={{
              backgroundColor: `${
                '#' + Math.floor(Math.random() * 16777215).toString(16)
              }`,
            }}
            key={e.id}
          >
            <Label>{e.label}</Label>
            <Percentage>{e.percentage}</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
