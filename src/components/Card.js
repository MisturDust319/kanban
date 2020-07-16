import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'

const TrelloCard = ({title}) => {
    return (
        <Card>
            <Typography
            gutterButton>
                { title }
            </Typography>            
        </Card>
    )
}

export default TrelloCard;