import React from 'react';
import Icon from '@material-ui/core/Icon';

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

    renderForm = () => {
        const { list } = this.props;
        
        const placeHolder = list
        ? 'Enter list title'
        : 'Enter title for card';

        const buttonTitle = list ? 'Add list' : 'Add card';

        return <p>Hello</p>;
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