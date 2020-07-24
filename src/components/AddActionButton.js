import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextArea from 'react-textarea-autosize';

import { addList } from '../actions';

class AddActionButton extends React.Component {

    state = {
        formOpen: false,
        text: ''
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add new list" : "Add new card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0, 0, 0, 0.15)" : "inherit";

        return (
            <div onClick={ this.openForm }
            style={{
                ...styles.openFormButtonGroup,
                opacity: buttonTextOpacity,
                color: buttonTextColor,
                backgroundColor: buttonTextBackground
            }}>
                <Icon>add</Icon>
                <p>{ buttonText }</p>
            </div>
        )
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        
        if(text) {
            dispatch(addList(text))
        }

        return;
    }

    renderForm = () => {
        const { list } = this.props;
        
        const placeHolder = list
        ? 'Enter list title'
        : 'Enter title for card';

        const buttonTitle = list ? 'Add list' : 'Add card';

        return <div>
            <Card style={{
                overflow: 'visible',
                minHeight: 80,
                minWidth: 272,
                padding: '6px 8px 2px'
            }}>
                <TextArea  
                    placeholder={ placeHolder }
                    value={ this.state.text }
                    onChange={ this.handleInputChange }
                    onBlur={ this.closeForm }
                    style={{
                        resize: 'none',
                        width: '100%',
                        overflow: 'hidden',
                        outline: 'none',
                        border: 'none',
                    }}
                    autoFocus
                /> 
            </Card>
            <div style={ styles.formButtonGroup }>
                <Button
                    onMouseDown={ this.handleAddList }
                    variant='contained'
                    style={{color: 'white', backgroundColor: '#5aac44'}}
                >
                    { buttonTitle }{' '}
                </Button>
                <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
            </div>
        </div>;
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
    }
}

export default connect()(AddActionButton);