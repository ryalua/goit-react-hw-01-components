import PropTypes from 'prop-types'; 
import { StatPage, Title, StatList, Item, Label,Percentage } from 'components/Statistics/Statistics.styled';

export const Statistics = ({  
  title, 
  stats
}) => {

  return (
    <StatPage>
      <Title>{title}</Title>

      <StatList>
        {stats.map(stat => (
          <Item
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatPage>
  );
  
};

Statistics.propTypes = {

  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

