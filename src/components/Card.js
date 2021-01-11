import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
    paper: {
        '@media (min-width: 700px)': {
            width: '290px',
            marginRight: '12px',
            marginLeft: '12px',
        },
        width: '100%',
        height: '158px',
        borderRadius: 12,
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
