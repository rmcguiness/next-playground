import Link from "next/link";
import { signup } from "../actions";

export default function SignupPage() {
    return (
        <div className="min-h-screen">
            <h1 className="text-3xl font-bold text-center mt-10">Signup for an account</h1>
            <div className="w-full max-w-md mx-auto mt-10">
                <form
                    action={signup}
                    className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                        Signup
                    </h2>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="email@example.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone"
                        >
                            Phone Number <span className="text-gray-400">(optional)</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="phone number"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password <span className="text-gray-400 text-xs">(minimum 6 characters)</span>
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            minLength={6}
                            maxLength={20}
                            // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            title="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Link
                            href="/auth/login"
                            className="text-blue-300 hover:text-blue-500"
                        >
                            Already have an account? Login
                        </Link>
                        <button
                            className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            {"Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}