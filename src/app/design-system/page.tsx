import { Button } from '@/components/ui/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';
import { Label } from '@/components/ui/Label';
import { Info, AlertCircle, CheckCircle2 } from 'lucide-react';
import { DemoShell } from '@/components/demo/demo-shell';
import { DismissibleAlert } from './dismissible-alert';

const inputClass =
  'w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';

export default function DesignSystem() {
  return (
    <DemoShell
      title="Design System"
      description="The UI foundations of the playground — components, typography, gradients, animations, and layout helpers."
      size="wide"
      className="space-y-14"
    >
      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <p className="text-foreground-2">
            This is a paragraph of text. Our typography system is designed to
            provide clear hierarchy and readability across all screen sizes.
          </p>
          <a href="#" className="text-primary-600 hover:text-primary-700">
            This is how links look
          </a>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button isLoading>Loading</Button>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>This is a default card component.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground-2">Card content goes here.</p>
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
              <p className="text-sm text-foreground-2">Card content goes here.</p>
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
              <p className="text-sm text-foreground-2">Card content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Action</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </section>

      {/* Labels */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Labels &amp; Inputs</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <Label htmlFor="ds-default">Default Label</Label>
            <input id="ds-default" type="text" className={`mt-1 ${inputClass}`} />
          </div>
          <div>
            <Label htmlFor="ds-required" required>
              Required Label
            </Label>
            <input id="ds-required" type="text" className={`mt-1 ${inputClass}`} />
          </div>
          <div>
            <Label htmlFor="ds-optional" optional>
              Optional Label
            </Label>
            <input id="ds-optional" type="text" className={`mt-1 ${inputClass}`} />
          </div>
          <div>
            <Label
              htmlFor="ds-error"
              variant="error"
              error="This field is required"
            >
              Label with Error
            </Label>
            <input
              id="ds-error"
              type="text"
              className={`mt-1 ${inputClass} border-red-500 focus:border-red-500 focus:ring-red-500`}
            />
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
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
          <DismissibleAlert />
        </div>
      </section>

      {/* Gradients */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Gradients</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="gradient-primary h-24 rounded-lg" />
          <div className="gradient-accent h-24 rounded-lg" />
          <div className="gradient-success h-24 rounded-lg" />
          <div className="gradient-warning h-24 rounded-lg" />
          <div className="gradient-info h-24 rounded-lg" />
          <div className="gradient-dark h-24 rounded-lg" />
          <div className="gradient-light h-24 rounded-lg" />
          <div className="gradient-fade h-24 rounded-lg" />
        </div>
      </section>

      {/* Animations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Animations</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <Card className="animate-fade-in">
            <CardContent className="p-6 text-center">Fade In</CardContent>
          </Card>
          <Card className="animate-slide-in">
            <CardContent className="p-6 text-center">Slide In</CardContent>
          </Card>
          <Card className="animate-scale-in">
            <CardContent className="p-6 text-center">Scale In</CardContent>
          </Card>
          <Card className="animate-bounce-in">
            <CardContent className="p-6 text-center">Bounce In</CardContent>
          </Card>
          <Card className="animate-spin-slow">
            <CardContent className="p-6 text-center">Spin</CardContent>
          </Card>
          <Card className="animate-pulse-slow">
            <CardContent className="p-6 text-center">Pulse</CardContent>
          </Card>
        </div>
      </section>

      {/* Layout Patterns */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Layout Patterns</h2>
        <div className="space-y-6">
          <div className="layout-flex-center h-24 bg-surface-2 rounded-lg">
            Centered Content
          </div>
          <div className="layout-flex-between h-24 bg-surface-2 rounded-lg px-4">
            <span>Left</span>
            <span>Right</span>
          </div>
          <div className="layout-stack-horizontal h-24 bg-surface-2 rounded-lg p-4">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </div>
          <div className="relative h-24 bg-surface-2 rounded-lg">
            <div className="layout-absolute-center">Absolute Center</div>
          </div>
        </div>
      </section>

      {/* Glass Effect */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Glass Effect</h2>
        <div className="relative h-48 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-8">
          <div className="glass rounded-lg p-4 text-white">
            <h3 className="mb-2 text-xl font-medium">Glass Card</h3>
            <p>Content with a frosted-glass effect.</p>
          </div>
        </div>
      </section>
    </DemoShell>
  );
}
