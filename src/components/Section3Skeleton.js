import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/styles';

const customStyles = makeStyles( () => ({
    root: {
        marginTop: '24px',
    },
    skeleton: {
        borderRadius: 12,
    }
}) );

export default function Loading ( props ) {
    const classes = customStyles();
    return (
        <div className={classes.root}>
            <Skeleton className={classes.skeleton} variant="text" width="100%" height="80px" />
            <Skeleton className={classes.skeleton} variant="text" width="100%" height="80px" />
            <Skeleton className={classes.skeleton} variant="text" width="100%" height="80px" />
        </div>
    );
}
