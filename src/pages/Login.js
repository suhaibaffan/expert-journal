import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BootstrapInput } from '../components/InputText';

const styles = makeStyles( () => ({
    root: {
        margin: '50% auto',
        width: '296px',
        height: '249px',
        padding: '24px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 6px #00000029',
        borderRadius: '12px',
        opacity: '1',
    },
    parent: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#537178'
    },
    button: {
        textTransform: 'none',
        borderRadius: 8
    }
} ));

const InputWithSpacing = Styled.div`
    margin: 12px 0;
`;

export default function Login () {
    const classes = styles();
    return (
        <Container maxWidth="sm" fixed className={classes.parent}>
            <form className={classes.root}>
                <Typography className={classes.label} variant="h6" gutterBottom>
                    Login
                </Typography>
                <InputWithSpacing >
                    <BootstrapInput placeholder="Id" fullWidth />
                </InputWithSpacing>
                <InputWithSpacing>
                    <BootstrapInput placeholder="Name" fullWidth />
                </InputWithSpacing>
                <InputWithSpacing>
                    <Button className={ classes.button } variant="contained" color="secondary" disableElevation disableRipple fullWidth>
                        Login
                    </Button>
                </InputWithSpacing>
            </form>
        </Container>
    );
}
