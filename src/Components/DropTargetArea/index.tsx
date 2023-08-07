import { useDrop } from 'react-dnd';
import { ITodo } from '../../Context/todoContext';

interface DropTargetAreaProps {
  status: 'new' | 'on-going' | 'completed';
  onDrop: (item: ITodo) => void; 
  children: React.ReactNode;
}

export function DropTargetArea({onDrop, status, children}: DropTargetAreaProps) {

  const [{isOver}, dropRef] = useDrop({
    accept: 'CARD',
    drop: (item: ITodo) => {
      onDrop({...item, status})
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })

  const backgroundColor = isOver ? 'lightgreen' : 'white';

  return (
    <div ref={dropRef} style={{ display: 'flex', flexDirection: 'column', margin: '30px', border: '1px solid black', borderRadius: '5px', padding: '10px', backgroundColor, width: '300px', minHeight: "300px", color: 'black', gap: '10px'}}>
      {status}
      {children}
    </div>
  )
}