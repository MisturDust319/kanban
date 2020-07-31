import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Card from './Card';
import AddActionButton from './AddActionButton';

const List = ({listID, title, cards}) => {
    return (
      <Droppable droppableId={ String(listID) } >
        { provided => (
            <div
              {...provided.droppableProps }
              ref={ provided.innerRef }
              style={styles.container}
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
            </div>
          )
        }
      </Droppable>
    );
}

const styles={
    container: {
      backgroundColor: '#dfe3e6',
      borderRadius: 3,
      height: '100%',
      width: 300,
      padding: 8,
      marginRight: 8
    }
  }
  

export default List;