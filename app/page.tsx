import { Code, Palette, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground font-mono">
            Master Web Development
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn HTML, CSS, and JavaScript through interactive lessons, 
            code examples, and curated video tutorials.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link
              href="/html/html-intro"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/html"
              className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              View Curriculum
            </Link>
          </div>
        </section>

        {/* Course Categories */}
        <section className="grid md:grid-cols-3 gap-6">
          <Link href="/html" className="p-6 bg-card border border-border rounded-lg shadow-md hover:shadow-lg hover:border-primary transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">HTML Fundamentals</h3>
            <p className="text-muted-foreground mb-4">
              Master the building blocks of the web with semantic HTML and best practices.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono">5 lessons</span>
              <span>•</span>
              <span>Beginner</span>
            </div>
          </Link>

          <Link href="/css" className="p-6 bg-card border border-border rounded-lg shadow-md hover:shadow-lg hover:border-secondary transition-all group">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <Palette className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">CSS Fundamentals</h3>
            <p className="text-muted-foreground mb-4">
              Style your websites with modern CSS, layouts, and responsive design techniques.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono">5 lessons</span>
              <span>•</span>
              <span>Beginner</span>
            </div>
          </Link>

          <Link href="/javascript" className="p-6 bg-card border border-border rounded-lg shadow-md hover:shadow-lg hover:border-accent transition-all group">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">JavaScript Fundamentals</h3>
            <p className="text-muted-foreground mb-4">
              Bring your websites to life with interactive JavaScript and DOM manipulation.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-mono">5 lessons</span>
              <span>•</span>
              <span>Beginner</span>
            </div>
          </Link>
        </section>

        {/* Features */}
        <section className="bg-card border border-border rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Everything You Need to Learn Web Development
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Interactive Code Examples</h4>
                <p className="text-sm text-muted-foreground">
                  Copy and experiment with real code snippets with syntax highlighting.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                <Palette className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Curated Video Tutorials</h4>
                <p className="text-sm text-muted-foreground">
                  Learn from the best with handpicked YouTube content from top educators.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Fast Search</h4>
                <p className="text-sm text-muted-foreground">
                  Find any topic instantly with our powerful Meilisearch integration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Track Your Progress</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor your learning journey with progress indicators and bookmarks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
