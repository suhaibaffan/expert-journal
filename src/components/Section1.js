import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import TaskCompletedCard from './TaskCompletedCard';
import LatestCreatedTask from './LatestCreatedTask';
import PieCard from './PieCard';

const customStyles = makeStyles( () => ({
    root: {
        marginTop: '24px',
        display: 'grid',
        '@media (min-width: 700px)': {
            gridTemplateColumns: 'repeat( 3, 300px )'
        }
    }
}) );
export default function Section1 ( props ) {
    const classes = customStyles();
    return (
        <Container className={classes.root} maxWidth="md">
                <TaskCompletedCard
                    tasksCompleted={props.dashboard.tasksCompleted}
                    totalTasks={props.dashboard.totalTasks}
                />
                <LatestCreatedTask tasks={props.dashboard.latestTasks}/>
                <PieCard data={[ props.dashboard.totalTasks - props.dashboard.tasksCompleted, props.dashboard.tasksCompleted, ]}/>
        </Container>
    );
}
