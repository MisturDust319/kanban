import React from 'react';

import Card from './Card';

const List = ({title, cards}) => {
    return (
        <div style={styles.container}>
            <h3>{ title }</h3>
            <Card title="my card"/>
        </div>
    );
}

const styles={
    container: {
      backgroundColor: "#ccc",
      borderRadius: 3,
      width: 300,
      padding: 8
    }
  }
  

export default List;