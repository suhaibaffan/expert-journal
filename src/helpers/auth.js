export const isLoggedIn = () => {
	const user = JSON.parse( localStorage.getItem('user') );
	console.log( user )
	if (user) {
		if (user.token) {
			if (user.token.length > 0) {
				return true;
			}
			return false;
		}
		return false;
	}
	return false;
}

export const getUserFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('user'));
}

export const setUserToLocalStorage = userObj => {
	console.log( userObj );
	localStorage.setItem('user', JSON.stringify(userObj));
}

export const logout = () => {
	localStorage.removeItem( 'user' );
}
