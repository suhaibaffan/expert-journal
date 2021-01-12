import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const customStyles = makeStyles( () => ({
    label: {
        margin: '14px 0',
        color: '#537178',
        textAlign: 'center',
        fontSize: '1.3rem'
    },
    button: {
        textTransform: 'none',
        borderRadius: 8,
        fontSize: '1rem',
        margin: '6px 5px'
    },
    addIcon: {
        width: '1rem'
    },
    root: {
        width: '304px',
        height: '158px',
        borderRadius: 12,
    },
    button: {
        justifyContent: 'center',
        marginBottom: '30px'
    },
}) );

export default function TaskCompletedCard ( props ) {
    const classes = customStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.label} variant="h5">
                    You have no task.
                </Typography>
            </CardContent>
            <CardActions className={classes.button}>
                <Button onClick={props.handleOpen} variant="contained" color="secondary" disableElevation disableRipple>
                    <AddOutlinedIcon className={ classes.addIcon } /> New Task
                </Button>
            </CardActions>
        </Card>
    );
}
