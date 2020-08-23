import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Card from './Card';
import AddActionButton from './AddActionButton';

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`

const List = ({listID, index, title, cards}) => {
    return (
      <Draggable draggableId={ String(listID) } index={ String(index) }>
        { provided => (
          <ListContainer
            ref={ provided.innerRef }
            {...provided.dragHandleProps }
            {...provided.draggableProps}
          >
            <Droppable droppableId={ String(listID) }>
              { provided => (
                  <div ref={ provided.innerRef }
                  { ...provided.droppableProps }>
                    <h4>{ title }</h4>
                    { cards.map((card, index) =>
                      <Card
                        id={ card.id }
                        key={ card.id }
                        index={ index }
                        text={ card.text }
                    />)}
                    
                    { provided.placeholder }
                    <AddActionButton listID={ listID }/>
                  </div>
                )
              }
            </Droppable>
          </ListContainer>
        ) }        
      </Draggable>
    );
}

export default List;