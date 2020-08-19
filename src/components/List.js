import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
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

const List = ({listID, title, cards}) => {
    return (
      <Droppable droppableId={ String(listID) } >
        { provided => (
            <ListContainer
              {...provided.droppableProps }
              ref={ provided.innerRef }
            >
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
            </ListContainer>
          )
        }
      </Droppable>
    );
}

export default List;