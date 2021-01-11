import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
    paper: {
        width: '290px',
        height: '158px',
        borderRadius: 12,
        marginRight: '12px',
        marginLeft: '12px',
        marginBottom: '24px'
    }
}) );

export default function Card ( props ) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation="3">
            {props.children}
        </Paper>
    );
}
