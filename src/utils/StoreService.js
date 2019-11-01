import store from '../redux/store.js';
import { AuthUser as AuthUserActions } from '../actions';

export function getAccessToken()
{
	return store.getState().AccessToken.accessToken;
}

export function getAuthUser()
{
	return store.getState().AuthUser.authUser;
}

export function dispatchAuthUser(user)
{
	store.dispatch(AuthUserActions.setAuthUser(user));
}
