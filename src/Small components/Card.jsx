//card inside of the dnd board//

import React from 'react';

function Card(props) {

    const dragStart = e=> {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }

  return (
    <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
    >
      <h2>
        {props.weight}
      </h2>

      <img src={props.img} />

      {props.children}
    </div>
  )
}

export default Card;
