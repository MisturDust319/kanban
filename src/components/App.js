import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import List from './List';
import AddActionButton from './AddActionButton';
import { sort } from '../actions';

const App = (props) => {
  const { lists } = props;

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
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
      draggableId
    ));
  }

  return (
    <DragDropContext onDragEnd={ onDragEnd }>
      <div className="App">
        <h4>Test</h4>
        <div style={styles.listContainer}>
          { lists.map(list => 
            <List key={ list.id }
              listID={ list.id }
              title={ list.title}
              cards={list.cards}
            />) 
          }
        <AddActionButton list/>
        </div>
      </div>
    </DragDropContext>
  );
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
