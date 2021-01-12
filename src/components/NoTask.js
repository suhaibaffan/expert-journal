import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import NoTaskCard from './NoTaskCard';
import CreateModal from './CreateModal';
import { handleLogout } from '../hooks/logout';

const styles = makeStyles( () => ({
    parent: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15% auto',
    },
}) );

export default function NoTask ( props ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = options => {
        if ( options?.reload ) {
            props.refresh();
        }
        setOpen(false);
    };
    const classes = styles();
    return (
        <Container maxWidth="sm" fixed className={classes.parent}>
            <NoTaskCard {...props} handleOpen={handleOpen} />
            <CreateModal open={open} handleClose={handleClose} />
        </Container>
    );
}
