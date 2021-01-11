import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateModal from './CreateModal';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        color: '#5285EC',
        font: 'normal normal medium 20px/24px Montserrat',
        boxShadow: '0px 3px 6px #00000014',
        borderRadius: 12
    },
    item: {
            height: '73px',
            width: '95%',
            margin: '0 1.2rem',
            borderBottom: '2px solid #E8E8E8',
    }
}));

export default function CheckboxList( props ) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(props.tasks);
    const [open, setOpen] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState('');
    const handleOpen = value => () => {
        console.log( value )
        setSelectedTask( () => ({ ...value }) );
        setOpen(true);
    };

    const handleClose = options => {
        if ( options?.reload ) {
            props.refresh();
        }
        setSelectedTask( () => {});
        setOpen(false);
    };

    const handleToggle = (value) => () => {
        value.completed = !value.completed;
        const currentIndex = checked.map( item => item._id ).indexOf(value._id);
        const newChecked = [...checked];
        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }
        props.handleTaskCompleted( value );
        setChecked(newChecked);
    };

    const handleTaskDelete = value => () => {
        props.handleTaskDelete( value );
    }

    return (
        <List className={classes.root}>
        {props.tasks.map((value) => {
            const labelId = `checkbox-list-label-${value._id}`;

            return (
            <ListItem dense disableRipple className={classes.item} key={value['_id']} role={undefined} button>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={value.completed}
                        tabIndex={-1}
                        disableRipple
                        color="primary"
                        onClick={handleToggle(value)}
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                </ListItemIcon>
                <ListItemText style={{
                            textDecoration: value.completed ? 'line-through' : 'none',
                            color: value.completed ? 'black' : '#5285EC'
                        }} id={labelId} primary={value.name} />
                <ListItemSecondaryAction>
                    <IconButton edge="start" aria-label="edit">
                        <EditIcon onClick={handleOpen(value)} />
                    </IconButton>
                    <IconButton onClick={handleTaskDelete( value )} edge="end" aria-label="edit">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            );
            
        })}
        {
            ( selectedTask ) ?
            <CreateModal handleClose={handleClose} task={selectedTask} name={selectedTask?.name} open={open} />
            : ''
        }
        </List>
    );
}
