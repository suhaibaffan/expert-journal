import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CreateModal from './CreateModal';
import Skeleton from './Section2Skeleton';

const customStyles = makeStyles( () => ({
    root: {
        marginTop: '24px',
        display: 'grid',
        '@media (min-width: 700px)': {
            gridTemplateColumns: '50px auto 400px 150px',
        }
    },
    text: {
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: '30px',
        color: '#537178'
    },
    div: {
        display: 'grid',
        gridTemplateColumns: '40px auto',
        background: '#D9DFEB 0% 0% no-repeat padding-box',
        borderRadius: 8,
        margin: '5px 15px'
    },
    icon: {
        marginLeft: '10px'
    },
    input: {
        borderRadius: 8,
        background: '#D9DFEB 0% 0% no-repeat padding-box',
        fontSize: 16,
        color: '#7A7D7E',
        padding: '10px 12px',
        fontFamily: [
            'Montserrat'
        ].join(','),
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#7A7D7E'
        }
    },
    button: {
        textTransform: 'none',
        borderRadius: 8,
        fontSize: '1rem',
        margin: '6px 5px'
    },
    addIcon: {
        width: '1rem'
    }
}) );

export default function Section2 ( props ) {
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

    const classes = customStyles();
    return(
        <div>
            {
                props.loading ?
                <Container className={classes.root} maxWidth="md">
                    <Skeleton />
                </Container>
                :
                <Container className={classes.root} maxWidth="md">
                    <Typography className={classes.text} variant="h5">
                        Tasks
                    </Typography>
                    <div />
                    <div className={classes.div}>
                        <IconButton type="submit" className={classes.icon} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search by task name"
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.search}
                            onChange={props.handleSearch}
                        />
                    </div>
                    <Button onClick={handleOpen}  className={ classes.button } variant="contained" color="secondary" disableElevation disableRipple>
                        <AddOutlinedIcon className={ classes.addIcon } /> New Task
                    </Button>
                    <CreateModal open={open} handleClose={handleClose} />
                </Container>
            }
        </div>
    );
}