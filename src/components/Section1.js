import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import Card from './Card';
import TaskCompletedCard from './TaskCompletedCard';

const customStyles = makeStyles( () => ({
    root: {
        marginTop: '24px',
        display: 'grid',
        '@media (min-width: 700px)': {
            gridTemplateColumns: 'repeat( 3, 350px )'
        }
    }
}) );
export default function Section1 ( props ) {
    const classes = customStyles();
    return (
        <Container className={classes.root} maxWidth="md">
                <TaskCompletedCard
                    completedTasks={props.completedTasks}
                    totalTasks={props.totalTasks}
                />
                <Card>
                    s
                </Card>
                <Card>
                    s
                </Card>
        </Container>
    );
}
