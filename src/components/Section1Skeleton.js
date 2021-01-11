import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/styles';

const customStyles = makeStyles( () => ({
    skeleton: {
        borderRadius: 12,
        margin: 'auto',
        marginTop: '24px',
    }
}) );

export default function Loading ( props ) {
    const classes = customStyles();
    return (
        <Skeleton className={classes.skeleton} variant="rect" width="280px" height="158px" />
    );
}
