import React from 'react';

import Card from './Card';
import AddActionButton from './AddActionButton';

const List = ({title, cards}) => {
    return (
        <div style={styles.container}>
            <h3>{ title }</h3>
            { cards.map(card => <Card key={ card.id } text={ card.text } title={ card.title } />)}
          <AddActionButton />
        </div>
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