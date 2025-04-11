import { login } from "../actions";
import Link from "next/link";
export default function LoginPage() {
    return (
        <div className="min-h-screen">
            <h1 className="text-3xl font-bold text-center mt-10">Login to Your Account</h1>
            <div className="w-full max-w-md mx-auto mt-10">
                <form
                    action={login}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                        Login
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
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Link
                            href="/auth/signup"
                            className="text-blue-300 hover:text-blue-500"
                        >
                            Don't have an account? Sign up
                        </Link>
                        <button
                            className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            {"Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}