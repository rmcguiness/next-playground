import { redirect } from 'next/navigation';
import { signOut } from './auth-actions';

export const handleClick = async (text: string) => {
	if (text === 'Sign Up') {
		redirect('/auth/signup');
	} else if (text === 'Login') {
		redirect('/auth/login');
	} else {
		await signOut();
	}
};
