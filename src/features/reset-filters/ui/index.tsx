import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui';
import { resetFilters } from '@/widgets/filter';

const ResetFilters: React.FC = () => {
  const dispath = useDispatch();

  const handleClick = () => {
    dispath(resetFilters());
  };

  return <Button onClick={handleClick}>Reset Filters</Button>;
};

export { ResetFilters };
