import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';
import { Label } from '@/components/ui/Label';
import { Info, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export default function DesignSystem() {
    return (
        <div className="container py-10 space-y-12">
            <section>
                <h2 className="text-3xl font-bold mb-6">Design System</h2>
                <p className="text-gray-600 mb-8">
                    A showcase of our design system components built with Next.js, Tailwind CSS, and TypeScript.
                </p>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">Typography</h3>
                <div className="space-y-4">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>
                    <p>
                        This is a paragraph of text. Our typography system is designed to provide
                        clear hierarchy and readability across all screen sizes.
                    </p>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                        This is how links look
                    </a>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                    <Button>Default Button</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button isLoading>Loading</Button>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Default Card</CardTitle>
                            <CardDescription>This is a default card component.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card content goes here.</p>
                        </CardContent>
                        <CardFooter>
                            <Button>Action</Button>
                        </CardFooter>
                    </Card>

                    <Card variant="elevated">
                        <CardHeader>
                            <CardTitle>Elevated Card</CardTitle>
                            <CardDescription>This card has elevation.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card content goes here.</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="secondary">Action</Button>
                        </CardFooter>
                    </Card>

                    <Card variant="bordered">
                        <CardHeader>
                            <CardTitle>Bordered Card</CardTitle>
                            <CardDescription>This card has a border.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card content goes here.</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline">Action</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">Badges</h3>
                <div className="flex flex-wrap gap-4">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="info">Info</Badge>
                    <Badge variant="outline">Outline</Badge>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                    <Badge size="sm">Small</Badge>
                    <Badge size="default">Default</Badge>
                    <Badge size="lg">Large</Badge>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">Alerts</h3>
                <div className="space-y-4">
                    <Alert>
                        <AlertTitle>Default Alert</AlertTitle>
                        <AlertDescription>This is a default alert message.</AlertDescription>
                    </Alert>

                    <Alert variant="info" icon={<Info className="h-4 w-4" />}>
                        <AlertTitle>Info Alert</AlertTitle>
                        <AlertDescription>This is an informational alert message.</AlertDescription>
                    </Alert>

                    <Alert variant="success" icon={<CheckCircle2 className="h-4 w-4" />}>
                        <AlertTitle>Success Alert</AlertTitle>
                        <AlertDescription>This is a success alert message.</AlertDescription>
                    </Alert>

                    <Alert variant="warning" icon={<AlertCircle className="h-4 w-4" />}>
                        <AlertTitle>Warning Alert</AlertTitle>
                        <AlertDescription>This is a warning alert message.</AlertDescription>
                    </Alert>

                    <Alert variant="error" icon={<XCircle className="h-4 w-4" />} onDismiss={() => { }}>
                        <AlertTitle>Error Alert</AlertTitle>
                        <AlertDescription>This is an error alert message.</AlertDescription>
                    </Alert>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-semibold mb-4">Labels</h3>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="default">Default Label</Label>
                        <input
                            id="default"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>

                    <div>
                        <Label htmlFor="required" required>
                            Required Label
                        </Label>
                        <input
                            id="required"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>

                    <div>
                        <Label htmlFor="optional" optional>
                            Optional Label
                        </Label>
                        <input
                            id="optional"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>

                    <div>
                        <Label
                            htmlFor="with-description"
                            description="This is a helpful description for the input field."
                        >
                            Label with Description
                        </Label>
                        <input
                            id="with-description"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                        />
                    </div>

                    <div>
                        <Label
                            htmlFor="with-error"
                            variant="error"
                            error="This field is required"
                        >
                            Label with Error
                        </Label>
                        <input
                            id="with-error"
                            type="text"
                            className="mt-1 block w-full rounded-md border-red-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
} 