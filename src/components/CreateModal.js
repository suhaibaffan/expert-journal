import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import EditIcon from '@material-ui/icons/Edit';
import { BootstrapInput } from './InputText';
import { createTask, EditTask } from '../axios';

const styles = makeStyles( () => ({
    root: {
        margin: '10% auto',
        width: '296px',
        height: '193px',
        padding: '24px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '12px',
        opacity: '1',
    },
    parent: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#537178'
    },
    button: {
        textTransform: 'none',
        borderRadius: 8
    },
    alert: {
        width: '100%',
        justifyContent: 'center',
        margin: '0 10px'
    },
    addIcon: {
        width: '1rem'
    }
} ));

const InputWithSpacing = Styled.div`
    margin: 12px 0;
`;

export default function CreateModal ( props ) {
    const [ taskName, setTaskName ] = React.useState( props?.name || '' );
    const classes = styles();
    const label = props.name ? 'Edit Task' : '+ New Task';
    const taskButton = props.task ? 'Edit' : 'New Task';
    const taskIcon = props.task ? <EditIcon className={ classes.addIcon } /> : <AddOutlinedIcon className={ classes.addIcon } />
    const handleSubmit = async () => {
        if ( !taskName ) return;

        if ( props.task ) {
            await EditTask({ ...props.task, name: taskName });
        } else {
            await createTask({ name: taskName });
        }
        props.handleClose({ reload: true });
        setTaskName( '' );
    };

    const handleValueChange = ( event ) => {
        event.persist();
        setTaskName( event.target.value );
    };

    const handleClose = () => {
        setTaskName( '');
        props.handleClose();
    }

    const submitForm = event => {
        event.preventDefault();
        handleSubmit();
    }

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
        >
            <form onSubmit={submitForm} className={classes.root}>
                <Typography className={classes.label} variant="h6" gutterBottom>
                    { label }
                </Typography>
                <InputWithSpacing>
                    <BootstrapInput autoFocus value={taskName} onChange={handleValueChange} placeholder="Task Name" fullWidth />
                </InputWithSpacing>
                <InputWithSpacing>
                    <Button onClick={handleSubmit} className={ classes.button } variant="contained" color="secondary" disableElevation disableRipple fullWidth>
                        {taskIcon} {taskButton}
                    </Button>
                </InputWithSpacing>
            </form>
        </Modal>
    );
}