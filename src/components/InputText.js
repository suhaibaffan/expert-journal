import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const BootstrapInput = withStyles((theme) => ({
    input: {
        borderRadius: 8,
        background: '#EEF1F8 0% 0% no-repeat padding-box',
        fontSize: 16,
        color: '#7A7D7E',
        padding: '10px 12px',
        margin: 'auto',
        fontFamily: [
            'Montserrat'
        ].join(','),
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: 'black'
        }
    
    },
}))(InputBase);
