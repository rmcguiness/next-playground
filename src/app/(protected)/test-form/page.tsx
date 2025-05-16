'use client'

import { useState } from 'react'

export default function TestPage() {
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [submitted, setSubmitted] = useState(false)
    const [score, setScore] = useState(0)

    const questions = [
        {
            id: 1,
            question: "What is the primary purpose of React's useEffect hook?",
            options: [
                "To create state variables in functional components",
                "To handle side effects in functional components",
                "To optimize rendering performance",
                "To replace class components entirely"
            ],
            correctAnswer: "To handle side effects in functional components"
        },
        {
            id: 2,
            question: "Which Next.js feature allows you to fetch data on the server?",
            options: [
                "getStaticProps",
                "getServerSideProps",
                "Server Components",
                "All of the above"
            ],
            correctAnswer: "All of the above"
        },
        {
            id: 3,
            question: "What is the purpose of the 'key' prop in React lists?",
            options: [
                "It's purely for accessibility purposes",
                "It helps React identify which items have changed, been added, or removed",
                "It's required for styling list items",
                "It determines the order of list items"
            ],
            correctAnswer: "It helps React identify which items have changed, been added, or removed"
        },
        {
            id: 4,
            question: "Which of the following is NOT a Next.js routing approach?",
            options: [
                "Pages Router",
                "App Router",
                "Dynamic Router",
                "API Routes"
            ],
            correctAnswer: "Dynamic Router"
        },
        {
            id: 5,
            question: "What is the purpose of React's useMemo hook?",
            options: [
                "To memoize expensive function calls",
                "To create mutable variables",
                "To handle form submissions",
                "To replace the useState hook"
            ],
            correctAnswer: "To memoize expensive function calls"
        },
        {
            id: 6,
            question: "Which of the following is a valid way to create a Server Component in Next.js?",
            options: [
                "Adding 'use server' at the top of the file",
                "Using the createServerComponent function",
                "Simply not using 'use client' directive",
                "Server components are not supported in Next.js"
            ],
            correctAnswer: "Simply not using 'use client' directive"
        },
        {
            id: 7,
            question: "What is the purpose of the 'revalidatePath' function in Next.js?",
            options: [
                "To validate form inputs",
                "To refresh data on a specific page",
                "To check if a path exists",
                "To redirect users to a valid path"
            ],
            correctAnswer: "To refresh data on a specific page"
        },
        {
            id: 8,
            question: "Which hook would you use to access the current route in Next.js?",
            options: [
                "useRouter",
                "useRoute",
                "useNavigation",
                "usePath"
            ],
            correctAnswer: "useRouter"
        },
        {
            id: 9,
            question: "What is the primary benefit of using Tailwind CSS?",
            options: [
                "It has a smaller file size than other CSS frameworks",
                "It provides utility classes for rapid UI development",
                "It automatically handles browser compatibility",
                "It requires no configuration"
            ],
            correctAnswer: "It provides utility classes for rapid UI development"
        },
        {
            id: 10,
            question: "Which of the following is NOT a valid data fetching method in Next.js?",
            options: [
                "fetch API in Server Components",
                "getStaticProps",
                "useFetch hook",
                "SWR library"
            ],
            correctAnswer: "useFetch hook"
        }
    ]

    const handleOptionSelect = (questionId: number, option: string) => {
        setAnswers({
            ...answers,
            [questionId]: option
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let correctAnswers = 0
        questions.forEach(question => {
            if (answers[question.id] === question.correctAnswer) {
                correctAnswers++
            }
        })

        setScore(correctAnswers)
        setSubmitted(true)

        // Scroll to top to see results
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const resetQuiz = () => {
        setAnswers({})
        setSubmitted(false)
        setScore(0)
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Next.js Knowledge Quiz</h1>

            {submitted && (
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-green-500">
                    <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                    <p className="text-lg mb-4">
                        You scored <span className="font-bold text-green-600">{score}</span> out of <span className="font-bold">{questions.length}</span> questions correctly.
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={resetQuiz}
                            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                {questions.map((q) => (
                    <div key={q.id} className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">
                            {q.id}. {q.question}
                        </h3>
                        <div className="space-y-3">
                            {q.options.map((option, index) => (
                                <label
                                    key={index}
                                    className={`flex items-start p-3 rounded-lg border cursor-pointer transition-colors
                    ${answers[q.id] === option
                                            ? 'bg-green-50 border-green-300'
                                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${q.id}`}
                                        value={option}
                                        checked={answers[q.id] === option}
                                        onChange={() => handleOptionSelect(q.id, option)}
                                        className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500"
                                        required={submitted ? false : true}
                                        disabled={submitted}
                                    />
                                    <span className="ml-3 text-gray-700">{option}</span>
                                    {submitted && option === q.correctAnswer && (
                                        <span className="ml-auto text-green-600 font-medium">✓ Correct</span>
                                    )}
                                    {submitted && answers[q.id] === option && option !== q.correctAnswer && (
                                        <span className="ml-auto text-red-600 font-medium">✗ Incorrect</span>
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}

                {!submitted && (
                    <div className="flex justify-center pt-6">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-linear-to-r from-green-600 to-green-500 text-white font-medium rounded-lg shadow-md hover:from-green-500 hover:to-green-400 transition-all transform hover:scale-105"
                        >
                            Submit Answers
                        </button>
                    </div>
                )}
            </form>
        </div>
    )
}
