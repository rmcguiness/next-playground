import CardWrapper from "@/components/card-wrapper/card-wrapper";

export default function Demo1() {
    return (
        <div>
            <h1 className="text-center my-8">Demo 1</h1>
            <CardWrapper>
                <h2>Resume </h2>
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
                        <p className="text-gray-600">Senior Software Engineer</p>
                        <p className="text-gray-500">john.doe@example.com | (555) 123-4567 | San Francisco, CA</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Experience</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-700">Senior Software Engineer</h3>
                            <p className="text-gray-600">TechCorp Inc. | 2020 - Present</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Led development of microservices architecture improving system performance by 40%</li>
                                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                                <li>Mentored junior developers and conducted code reviews</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-700">Software Engineer</h3>
                            <p className="text-gray-600">StartUpX | 2018 - 2020</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Developed and maintained web applications using React and Node.js</li>
                                <li>Collaborated with cross-functional teams to deliver features on time</li>
                                <li>Optimized database queries reducing response time by 30%</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Education</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium text-gray-700">Master of Science in Computer Science</h3>
                            <p className="text-gray-600">Stanford University | 2016 - 2018</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">Bachelor of Science in Computer Science</h3>
                            <p className="text-gray-600">University of California, Berkeley | 2012 - 2016</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Skills</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Technical Skills</h3>
                                <ul className="list-disc list-inside mt-2 text-gray-600">
                                    <li>JavaScript/TypeScript</li>
                                    <li>React/Next.js</li>
                                    <li>Node.js</li>
                                    <li>Python</li>
                                    <li>SQL/NoSQL</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-700">Soft Skills</h3>
                                <ul className="list-disc list-inside mt-2 text-gray-600">
                                    <li>Team Leadership</li>
                                    <li>Problem Solving</li>
                                    <li>Communication</li>
                                    <li>Project Management</li>
                                    <li>Agile Methodologies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Personal Projects</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-700">E-commerce Platform</h3>
                            <p className="text-gray-600">A full-stack e-commerce solution built with Next.js and MongoDB</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Implemented real-time inventory management</li>
                                <li>Integrated payment processing with Stripe</li>
                                <li>Developed admin dashboard for product management</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-700">Task Management App</h3>
                            <p className="text-gray-600">A collaborative task management tool built with React and Firebase</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Implemented real-time updates using Firebase</li>
                                <li>Created drag-and-drop interface for task organization</li>
                                <li>Added user authentication and authorization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardWrapper>
        </div>
    );
}