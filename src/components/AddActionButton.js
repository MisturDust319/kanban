import React from 'react';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import TextArea from 'react-textarea-autosize';

class AddActionButton extends React.Component {

    state = {
        formOpen: false,
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
                ...styles.openForButtonGroup,
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
            text: e.target.text
        })
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
        </div>;
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    }
}

export default AddActionButton