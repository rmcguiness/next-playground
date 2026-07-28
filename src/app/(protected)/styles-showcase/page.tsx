import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert";
import { Label } from "@/components/ui/Label";
import { DemoShell } from "@/components/demo/demo-shell";

const inputClass =
  "w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export default function StylesShowcase() {
  return (
    <DemoShell
      title="Styles Showcase"
      description="A broader tour of the styling primitives: components, gradients, animations, and layout helpers."
      size="wide"
    >
      {/* Buttons Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Buttons</h2>
        <div className="layout-grid layout-grid-cols-auto gap-4">
          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Variants</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Sizes</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">States</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Button disabled>Disabled</Button>
              <Button isLoading>Loading</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Cards</h2>
        <div className="layout-grid layout-grid-cols-auto gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>This is a default card example</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground-2">Card content goes here</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Action</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>This card has elevation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground-2">Card content goes here</p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
              <CardDescription>This card has a border</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground-2">Card content goes here</p>
            </CardContent>
          </Card>

          <Card variant="ghost">
            <CardHeader>
              <CardTitle>Ghost Card</CardTitle>
              <CardDescription>This card has a subtle surface</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground-2">Card content goes here</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Badges</h2>
        <div className="layout-stack gap-8">
          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Variants</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>

          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Sizes</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Badge size="sm">Small</Badge>
              <Badge size="default">Default</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Labels Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Labels</h2>
        <div className="layout-grid layout-grid-cols-auto gap-6">
          <div className="layout-stack">
            <Label htmlFor="required" required>
              Required Field
            </Label>
            <input type="text" id="required" className={inputClass} required />
          </div>

          <div className="layout-stack">
            <Label htmlFor="optional" optional>
              Optional Field
            </Label>
            <input type="text" id="optional" className={inputClass} />
          </div>

          <div className="layout-stack">
            <Label
              htmlFor="with-description"
              description="This is a helpful description"
            >
              Field with Description
            </Label>
            <input type="text" id="with-description" className={inputClass} />
          </div>

          <div className="layout-stack">
            <Label htmlFor="error" variant="error" error="This field is required">
              Error State
            </Label>
            <input
              type="text"
              id="error"
              className={`${inputClass} border-red-500 focus:border-red-500 focus:ring-red-500`}
            />
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Alerts</h2>
        <div className="layout-stack gap-4">
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>This is a default alert.</AlertDescription>
          </Alert>

          <Alert variant="info">
            <AlertTitle>Info Alert</AlertTitle>
            <AlertDescription>This is an info alert.</AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertTitle>Success Alert</AlertTitle>
            <AlertDescription>This is a success alert.</AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTitle>Warning Alert</AlertTitle>
            <AlertDescription>This is a warning alert.</AlertDescription>
          </Alert>

          <Alert variant="error">
            <AlertTitle>Error Alert</AlertTitle>
            <AlertDescription>This is an error alert.</AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Gradients</h2>
        <div className="layout-grid layout-grid-cols-auto gap-4">
          <div className="gradient-primary h-24 rounded-lg"></div>
          <div className="gradient-accent h-24 rounded-lg"></div>
          <div className="gradient-success h-24 rounded-lg"></div>
          <div className="gradient-warning h-24 rounded-lg"></div>
          <div className="gradient-info h-24 rounded-lg"></div>
          <div className="gradient-dark h-24 rounded-lg"></div>
          <div className="gradient-light h-24 rounded-lg"></div>
          <div className="gradient-fade h-24 rounded-lg"></div>
        </div>
      </section>

      {/* Animations Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Animations</h2>
        <div className="layout-grid layout-grid-cols-auto gap-4">
          <Card className="animate-fade-in">
            <CardContent className="p-6">Fade In</CardContent>
          </Card>
          <Card className="animate-slide-in">
            <CardContent className="p-6">Slide In</CardContent>
          </Card>
          <Card className="animate-scale-in">
            <CardContent className="p-6">Scale In</CardContent>
          </Card>
          <Card className="animate-bounce-in">
            <CardContent className="p-6">Bounce In</CardContent>
          </Card>
          <Card className="animate-spin-slow">
            <CardContent className="p-6">Spin</CardContent>
          </Card>
          <Card className="animate-pulse-slow">
            <CardContent className="p-6">Pulse</CardContent>
          </Card>
        </div>
      </section>

      {/* Layout Patterns Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Layout Patterns</h2>
        <div className="layout-stack gap-8">
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

      {/* Glass Effect Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Glass Effect</h2>
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8">
          <div className="glass p-4 rounded-lg text-white">
            <h3 className="text-xl font-medium mb-2">Glass Card</h3>
            <p>Content with glass effect</p>
          </div>
        </div>
      </section>
    </DemoShell>
  );
}
