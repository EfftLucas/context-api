import { useDrag } from "react-dnd";

export interface ICardProps {
  id: string;
  title: string;
  status: 'new' | 'on-going' | 'completed'
  completed: boolean;
  handleRemove: (id: string) => void;
  handleComplete: (id: string) => void;
}

export function TodoCard({id, title, status, completed, handleComplete, handleRemove}: ICardProps){

  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: { id, title, status, completed },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={dragRef} key={id} style={{ opacity, backgroundColor: 'gray', padding: '20px', borderRadius: '5px', }}>
      <p style={{fontSize: '12px'}}>ID: {id}</p>
      <h1 style={{color: 'black'}}>{title}</h1>
      <p style={{color: 'black'}}>Status: {status}</p>
      <p style={{color: 'black'}}>Completed: {completed ? 'Yes' : 'No'}</p>
      <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
        <button style={{color: 'black', cursor: 'pointer'}} onClick={() => handleComplete(id)}>Complete</button>
        <button style={{color: 'black', cursor: 'pointer'}} onClick={() => handleRemove(id)}>Remove</button>
      </div>
    </div>
  )
}