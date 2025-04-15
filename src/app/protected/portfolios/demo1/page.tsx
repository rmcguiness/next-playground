import CardWrapper from "@/components/card-wrapper/card-wrapper";

export default function Demo1() {
    return (
        <div>
            <h1 className="text-center my-8">Resume</h1>
            <CardWrapper>
                <div className="max-w-3xl mx-auto px-4 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">Ryan C. McGuiness</h1>
                        <p className="text-gray-600">Software Engineer</p>
                        <p className="text-gray-500">ryanmcguiness123@gmail.com | (732) 675-8146 | <a href="https://rmcguiness.com" className="text-blue-600 hover:underline">rmcguiness.com</a></p>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-700">
                            Software Engineer with over 4 years of professional experience developing full-stack software solutions, specializing in
                            front-end technologies. Proven track record of being a reliable teammate and developer, capable of solving problems and
                            delivering high-quality code.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Experience</h2>

                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-700">Software Engineer</h3>
                            <p className="text-gray-600">Perficient, Inc. | June 2022 - Present | Allentown, PA</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Developed and optimized headless e-commerce websites using Next.js and TypeScript. Utilized Next.js&apos; client and server components to improve performance, SEO, and UI/UX.</li>
                                <li>Spearheaded multiple high-priority items for clients, such as initializing Jest for robust testing, and setting up Mock Service Workers to simulate API responses. Resulting in improving code coverage by 90% on the entire codebase.</li>
                                <li>Collaborated with management, developers, and quality assurance to create tasks, assign deadlines, and deliver software solutions on time in accordance with project goals and expectations.</li>
                                <li>Leveraged Figma blueprints, translating them into code while adhering to best coding practices for enhanced readability and performance optimization. Then, styled the pages using clients&apos; preferred styling language, whether CSS, Tailwind, or Sass.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-700">Associate Software Engineer</h3>
                            <p className="text-gray-600">Perficient, Inc. | June 2021 - June 2022 | Allentown, PA</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Leveraged PHP, HTML, CSS, JS, and MySQL on the Magento framework to design, build, and deploy business and customer-facing e-commerce web pages.</li>
                                <li>Quickly adapted to new projects by rapidly learning new programming languages and mastering extensive codebases, enabling me to provide meaningful contributions and solutions promptly.</li>
                            </ul>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-700">Software Engineer Intern</h3>
                            <p className="text-gray-600">Lapis Health | September 2020 - December 2020 | Remote</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>Assisted in building a production-grade React application using Redux, Stripe, Slate.js, and the Material-UI library.</li>
                                <li>Contributed to a RESTful Python backend using Flask with a PostgreSQL database for persistent storage and a comprehensive test suite.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Skills</h2>
                        <div>
                            <p className="font-medium text-gray-700 mb-2">Years of Experience:</p>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li><span className="font-medium">5+:</span> JavaScript, React.js, HTML, CSS, and Git</li>
                                <li><span className="font-medium">3-4:</span> Next.js, TypeScript, Node.js, Python, and PHP</li>
                                <li><span className="font-medium">1-2:</span> Java, C/C++, and React-Native</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Education</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium text-gray-700">BA Double Major: Computer Science & Economics</h3>
                            <p className="text-gray-600">Lehigh University | January 2018 - May 2021 | Bethlehem, PA</p>
                            <p className="text-gray-600 mt-2"><span className="font-medium">Relevant Coursework:</span> CSE-340: Design and Analysis of Algorithms, CSE-262: Programming Languages, CSE-216: Software Engineering, CSE-109: Systems Software</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-gray-700">Udemy Certifications</h3>
                            <ul className="list-disc list-inside mt-2 text-gray-600">
                                <li>MERN Fullstack Guide: MongoDB, Express, React, Node.js</li>
                                <li>React- The Complete Guide: React, Hooks, Redux, React Router, Next.js, and Best Practices</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">Projects</h2>
                        <div className="mb-6">
                            <h3 className="text-xl font-medium text-gray-700">Next.js Playground</h3>
                            <p className="text-gray-600"><a href="https://next-playground-swart-alpha.vercel.app" className="text-blue-600 hover:underline">next-playground-swart-alpha.vercel.app</a></p>
                            <p className="text-gray-600 mt-2">Designed and developed a Next.js website, connected to Supabase, to practice and test different Next.js development strategies. I also use this site to mock portfolios, restaurant pages, and e-commerce pages.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-gray-700">E-commerce Website</h3>
                            <p className="text-gray-600"><a href="https://mkr-ecommerce.vercel.app" className="text-blue-600 hover:underline">mkr-ecommerce.vercel.app</a></p>
                            <p className="text-gray-600 mt-2">Built an e-commerce site with React.js connected to a Sanity database and integrated Stripe to handle online transactions.</p>
                        </div>
                    </div>
                </div>
            </CardWrapper>
        </div>
    );
}