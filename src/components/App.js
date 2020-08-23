import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import List from './List';
import AddActionButton from './AddActionButton';
import { sort } from '../actions';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  marginRight: 8;
`;

const App = (props) => {
  const { lists } = props;

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    // destination: an object that houses other props
    //  notably a prop, drappableID, the ID of the container where the dragged item lands
    //  also an index prop
    // source: complement of the destination, another object
    //  also has an index prop, droppableID
    //  the source is where the dragging starts, destination is where it ends
    // draggable ID:
    
    if(!destination) {
      return;
    }

    props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ));
  }

  return (
    <DragDropContext onDragEnd={ onDragEnd }>
      <div className="App">
        <h4>Test</h4>
        <Droppable droppableId={"all-lists"} direction="horizontal" type="list">
          { provided => (
            <ListContainer { ...provided.droppableProps }
            ref={ provided.innerRef }
            >
              { lists.map((list, index) => 
                <List key={ list.id }
                  listID={ list.id }
                  index={ index }
                  title={ list.title}
                  cards={list.cards}
                />) 
              }
              <AddActionButton list/>
            </ListContainer>
          )}          
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
