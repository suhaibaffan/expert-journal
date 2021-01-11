import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Card from './Card';

const customStyles = makeStyles( () => ({
    label: {
        margin: '24px',
        color: '#537178',
        textAlign: 'left',
        fontSize: '1.3rem'
    },
    label2: {
        marginLeft: '24px',
        color: '#5285EC'
    },
    label3: {
        fontSize: '1.3rem',
        color: '#537178'
    }
}) );

export default function TaskCompletedCard ( props ) {
    const classes = customStyles();
    return (
        <Card>
            <Typography className={classes.label} variant="h5">
                Tasks Completed
            </Typography>
            <Typography className={classes.label2} variant="h2">
                { props.tasksCompleted }
                <span className={classes.label3}> /{props.totalTasks} </span>
            </Typography>
        </Card>
    );
}
