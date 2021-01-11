import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import TaskList from './TasksList';

const customStyles = makeStyles( () => ({
    root: {
        marginTop: '24px'
    }
}) );

export default function Section3 ( props ) {
    const classes = customStyles();
    return (
        <Container className={classes.root} maxWidth="md">
            <TaskList {...props}/>
        </Container>
    );
}
