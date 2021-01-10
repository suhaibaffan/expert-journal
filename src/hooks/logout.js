import { navigate } from 'hookrouter';
import { logout } from '../helpers/auth';

export const handleLogout = event => {
    logout();
    navigate( '/' );
};
