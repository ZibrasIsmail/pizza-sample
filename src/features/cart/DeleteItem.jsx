import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleRemove}>
      Remove
    </Button>
  );
}
