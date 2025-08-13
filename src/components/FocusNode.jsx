import {Handle, Position} from '@xyflow/react'

export function FocusNode(props) {
 
  return (
    <div className="focus-node">
      <div>
        
        <h3> {props.data.name} </h3>
        <p> {props.data.description} </p>

        
        <Handle type='target' position={Position.Top}/>
        <Handle type='source' position={Position.Bottom}/>
      </div>
    </div>
  );
}