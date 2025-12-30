import {
  Alert,
  AlertTitle,
  AlertDescription,
  Badge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Label,
} from "@/components";

export default function StylesShowcase() {
  return (
    <div className="layout-container py-8">
      <h1 className="text-4xl font-bold mb-8 gradient-primary gradient-text">
        Design System Showcase
      </h1>

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
            </div>
          </div>

          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Sizes</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
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
              <p>Card content goes here</p>
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
              <p>Card content goes here</p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
              <CardDescription>This card has a border</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here</p>
            </CardContent>
          </Card>

          <Card variant="ghost">
            <CardHeader>
              <CardTitle>Ghost Card</CardTitle>
              <CardDescription>This card is transparent</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Badges</h2>
        <div className="layout-stack gap-8">
          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Default Badges</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Outline Badges</h3>
            <div className="layout-stack-horizontal flex-wrap gap-4">
              <Badge variant="primary" outline>
                Primary
              </Badge>
              <Badge variant="secondary" outline>
                Secondary
              </Badge>
              <Badge variant="accent" outline>
                Accent
              </Badge>
              <Badge variant="success" outline>
                Success
              </Badge>
              <Badge variant="warning" outline>
                Warning
              </Badge>
              <Badge variant="info" outline>
                Info
              </Badge>
              <Badge variant="destructive" outline>
                Destructive
              </Badge>
            </div>
          </div>

          <div className="layout-stack">
            <h3 className="text-xl font-medium mb-2">Badge Sizes</h3>
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
            <Label htmlFor="required">Required Field</Label>
            <input
              type="text"
              id="required"
              className="border rounded p-2"
              required
            />
          </div>

          <div className="layout-stack">
            <Label htmlFor="optional" optional>
              Optional Field
            </Label>
            <input type="text" id="optional" className="border rounded p-2" />
          </div>

          <div className="layout-stack">
            <Label
              htmlFor="with-description"
              description="This is a helpful description"
            >
              Field with Description
            </Label>
            <input
              type="text"
              id="with-description"
              className="border rounded p-2"
            />
          </div>

          <div className="layout-stack">
            <Label htmlFor="error" variant="error">
              Error State
            </Label>
            <input
              type="text"
              id="error"
              className="border border-red-500 rounded p-2"
            />
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Alerts</h2>
        <div className="layout-stack gap-4">
          <Alert>
            <AlertTitle>Default Info Alert</AlertTitle>
            <AlertDescription>This is a default info alert.</AlertDescription>
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

          <Alert variant="info" size="sm">
            <AlertTitle>Small Alert</AlertTitle>
            <AlertDescription>This is a small alert.</AlertDescription>
          </Alert>

          <Alert variant="info" size="lg">
            <AlertTitle>Large Alert</AlertTitle>
            <AlertDescription>This is a large alert.</AlertDescription>
          </Alert>

          <Alert>
            <AlertTitle>Dismissible Alert</AlertTitle>
            <AlertDescription>This alert can be dismissed.</AlertDescription>
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
            <CardContent>Fade In</CardContent>
          </Card>
          <Card className="animate-slide-in">
            <CardContent>Slide In</CardContent>
          </Card>
          <Card className="animate-scale-in">
            <CardContent>Scale In</CardContent>
          </Card>
          <Card className="animate-bounce-in">
            <CardContent>Bounce In</CardContent>
          </Card>
          <Card className="animate-spin-slow">
            <CardContent>Spin</CardContent>
          </Card>
          <Card className="animate-pulse-slow">
            <CardContent>Pulse</CardContent>
          </Card>
        </div>
      </section>

      {/* Layout Patterns Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Layout Patterns</h2>
        <div className="layout-stack gap-8">
          <div className="layout-flex-center h-24 bg-gray-100 rounded-lg">
            Centered Content
          </div>
          <div className="layout-flex-between h-24 bg-gray-100 rounded-lg px-4">
            <span>Left</span>
            <span>Right</span>
          </div>
          <div className="layout-stack-horizontal h-24 bg-gray-100 rounded-lg p-4">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </div>
          <div className="relative h-24 bg-gray-100 rounded-lg">
            <div className="layout-absolute-center">Absolute Center</div>
          </div>
        </div>
      </section>

      {/* Glass Effect Section */}
      <section className="layout-stack mb-12">
        <h2 className="text-3xl font-semibold mb-4">Glass Effect</h2>
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8">
          <div className="glass p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Glass Card</h3>
            <p>Content with glass effect</p>
          </div>
        </div>
      </section>
    </div>
  );
}
