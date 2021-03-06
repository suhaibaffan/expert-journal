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
    li: {
        fontSize: '1rem',
        color: '#537178'
    }
}) );

export default function LatestCreatedTask ( props ) {
    const classes = customStyles();
    const { tasks } = props;
    return (
        <Card>
            <Typography className={classes.label} variant="h5">
                Latest Created Task:
            </Typography>
            <ul className={classes.li}>
                {
                    tasks.slice( 0, 3 ).map( (item, index ) => (
                        <li style={{
                            textDecoration: item.completed ? 'line-through' : 'none',
                            color: item.completed ? 'black' : '#537178'
                        }} key={index}>
                            { item.name }
                        </ li>
                    ) )
                }
            </ul>
        </Card>
    );
}
