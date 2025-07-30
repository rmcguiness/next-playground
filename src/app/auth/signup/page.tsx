'use client';

import Link from "next/link";
import { signup } from "@/actions/auth-actions";
import { PasswordInput } from "../components/password-input";
import { useState } from "react";
import ErrorAlert from "../components/error-alert";
import Error from "next/error";


export default function SignupPage() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSignup(formData: FormData) {
        setError(null); // Clear previous errors
        setIsLoading(true);
        try {
            const result = await signup(formData);

            if (result?.error) {
                // Handle specific error messages from Supabase
                switch (result.error) {
                    case 'User already registered':
                        setError('This email is already registered. Please try signing in instead.');
                        break;
                    case 'Password should be at least 6 characters':
                        setError('Please use a stronger password (at least 6 characters).');
                        break;
                    default:
                        setError(result.error || 'Something went wrong during signup. Please try again.');
                }
            }
            // Success handling is likely handled by a redirect in your signup action
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.toString());
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="mt-12 sm:mx-6 lg:mx-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="bg-green-600 text-white p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <h1 className="mt-6 text-center text-3xl font-extrabold text-foreground">
                    Create a new account
                </h1>
                <p className="mt-2 text-center text-sm text-foreground-1">
                    Or{' '}
                    <Link href="/auth/login" className="font-medium text-green-600 hover:text-green-500">
                        sign in to your existing account
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-background py-8 px-4 shadow-lg rounded-lg sm:px-10">
                    {/* Display error message if exists */}
                    {error && <ErrorAlert message={error} />}

                    <form action={handleSignup} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    placeholder="you@example.com"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                                Phone Number <span className="text-gray-400 text-xs">(optional)</span>
                            </label>
                            <div className="mt-1">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="+1 (555) 123-4567"
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <PasswordInput />

                        {/* <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the{' '}
                                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="font-medium text-green-600 hover:text-green-500">
                                    Privacy Policy
                                </a>
                            </label>
                        </div> */}

                        <div className="pt-3">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-linear-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Signing up...' : 'Sign up'}
                            </button>
                        </div>
                    </form>
                    {/* <ThirdPartySignin /> */}
                </div>
            </div>
        </div>
    );
}