import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import { navigate } from 'hookrouter';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import { BootstrapInput } from '../components/InputText';
import useLoginForm from '../hooks/useLoginForm';

const styles = makeStyles( theme => ({
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
    },
    alert: {
        width: '100%',
        justifyContent: 'center',
        margin: '0 10px'
    }
} ));

const InputWithSpacing = Styled.div`
    margin: 12px 0;
`;

export default function Login () {
    const classes = styles();
    const { inputs, handleSubmit, handleInputChange } = useLoginForm();
    const [ redirect, setRedirect ] = useState( false );
    useEffect(() => {
        if ( inputs.success ) {
            navigate( '/dashboard', true );
        }
    }, [inputs.success]);
    return (
        <div>
            { inputs.errors.map( ( [ , error ]) => (
                <Alert className={classes.alert} severity="error" > { error } </Alert>
            ) )}
            <Container maxWidth="sm" fixed className={classes.parent}>
                <form className={classes.root}>
                    <Typography className={classes.label} variant="h6" gutterBottom>
                        Login
                    </Typography>
                    <InputWithSpacing >
                        <BootstrapInput
                            value={inputs.id}
                            name="id"
                            onChange={handleInputChange}
                            placeholder="Id"
                            fullWidth
                            key="id"
                        />
                    </InputWithSpacing>
                    <InputWithSpacing>
                        <BootstrapInput
                            value={inputs.name}
                            name="name"
                            onChange={handleInputChange}
                            placeholder="Name"
                            fullWidth
                            key="name"
                        />
                    </InputWithSpacing>
                    <InputWithSpacing>
                        <Button onClick={ handleSubmit } className={ classes.button } variant="contained" color="secondary" disableElevation disableRipple fullWidth>
                            Login
                        </Button>
                    </InputWithSpacing>
                </form>
            </Container>
        </div>
    );
}
