import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/styles';

const customStyles = makeStyles( () => ({
    root: {
        marginTop: '24px',
        display: 'grid',
        '@media (min-width: 700px)': {
            gridTemplateColumns: '150px 200px 350px 120px',
            gridGap: '30px'
        }
    },
    skeleton: {
        borderRadius: 12,
        marginTop: '24px',
    }
}) );

export default function Loading ( props ) {
    const classes = customStyles();
    return (
        <div className={classes.root}>
            <Skeleton className={classes.skeleton} variant="rect" width="100%" height="50px" />
            <div />
            <Skeleton className={classes.skeleton} variant="rect" width="100%" height="50px" />
            <Skeleton className={classes.skeleton} variant="rect" width="100%" height="50px" />
        </div>
    );
}
