export const blogPosts = [
  {
    slug: "getting-started-with-react",
    title: "Getting Started with React",
    excerpt:
      "Learn the fundamentals of React and build your first component-based application.",
    content:
      '<p>React is a powerful JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. Developed and maintained by Facebook, React has revolutionized the way developers think about building web applications.</p><h2>Why Choose React?</h2><p>React\'s component-based architecture allows you to build encapsulated components that manage their own state, then compose them to create complex UIs. This approach makes your code more predictable and easier to debug.</p><h3>Key Features:</h3><ul><li><strong>Virtual DOM:</strong> React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser\'s displayed DOM efficiently.</li><li><strong>JSX:</strong> A syntax extension that allows you to write HTML-like code in your JavaScript.</li><li><strong>Component-Based:</strong> Build encapsulated components that manage their own state.</li><li><strong>Unidirectional Data Flow:</strong> Makes your code more predictable and easier to debug.</li></ul><h2>Getting Started</h2><p>To create a new React application, you can use Create React App, which sets up your development environment so that you can use the latest JavaScript features:</p><pre><code>npx create-react-app my-app\ncd my-app\nnpm start</code></pre><h2>Your First Component</h2><p>Here\'s a simple example of a React component:</p><pre><code>function Welcome(props) {\n  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;\n}\n\nfunction App() {\n  return (\n    &lt;div&gt;\n      &lt;Welcome name="Sara" /&gt;\n      &lt;Welcome name="Cahal" /&gt;\n    &lt;/div&gt;\n  );\n}</code></pre><h2>Conclusion</h2><p>React provides a solid foundation for building modern web applications. Its declarative nature, component-based architecture, and strong community support make it an excellent choice for developers of all skill levels.</p>',
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    date: "Dec 25, 2025",
    readTime: "5 min read",
    category: "Frontend",
    author: "Sarah Johnson",
    authorImage: "https://i.pravatar.cc/150?img=1",
  },
  {
    slug: "mastering-css-grid",
    title: "Mastering CSS Grid Layout",
    excerpt: "Dive deep into CSS Grid and create responsive layouts with ease.",
    content:
      "<p>CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, and has many features that make building complex layouts straightforward.</p><h2>Understanding the Grid</h2><p>CSS Grid introduces a series of properties that allow you to create grid layouts. A grid container becomes a grid by setting its display property to grid or inline-grid.</p><h3>Basic Grid Properties:</h3><ul><li><strong>display: grid:</strong> Defines a grid container</li><li><strong>grid-template-columns:</strong> Defines the columns of the grid</li><li><strong>grid-template-rows:</strong> Defines the rows of the grid</li><li><strong>gap:</strong> Sets the gap between rows and columns</li></ul><h2>Creating Your First Grid</h2><pre><code>.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}</code></pre><p>This creates a grid with three equal columns and a 20px gap between items.</p><h2>Advanced Techniques</h2><p>CSS Grid also supports advanced features like grid areas, auto-placement, and responsive design with minmax() and auto-fit/auto-fill.</p><h2>Conclusion</h2><p>CSS Grid is a powerful tool for creating complex layouts with less code and more flexibility than traditional methods.</p>",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&h=300&fit=crop",
    date: "Dec 23, 2025",
    readTime: "7 min read",
    category: "CSS",
    author: "Michael Chen",
    authorImage: "https://i.pravatar.cc/150?img=12",
  },
  {
    slug: "javascript-async-await",
    title: "JavaScript Async/Await Explained",
    excerpt: "Master asynchronous JavaScript with async/await and promises.",
    content:
      "<p>Asynchronous programming is a fundamental concept in JavaScript that allows your code to perform long-running operations without blocking the main thread.</p><h2>From Callbacks to Async/Await</h2><p>JavaScript has evolved from callback-based async patterns to Promises, and finally to the more readable async/await syntax.</p><h3>Understanding Async Functions</h3><p>An async function is a function declared with the async keyword. It enables asynchronous, promise-based behavior to be written in a cleaner style:</p><pre><code>async function fetchUserData() {\n  try {\n    const response = await fetch('/api/user');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}</code></pre><h2>Error Handling</h2><p>With async/await, you can use try/catch blocks for error handling, making your code more readable and easier to debug.</p><h2>Parallel Execution</h2><p>Use Promise.all() to run multiple async operations in parallel:</p><pre><code>const [users, posts] = await Promise.all([\n  fetchUsers(),\n  fetchPosts()\n]);</code></pre><h2>Best Practices</h2><ul><li>Always handle errors with try/catch</li><li>Use Promise.all() for parallel operations</li><li>Avoid using async/await in loops unnecessarily</li><li>Return values directly when possible</li></ul>",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    category: "JavaScript",
    author: "Emily Rodriguez",
    authorImage: "https://i.pravatar.cc/150?img=5",
  },
  {
    slug: "nodejs-rest-api",
    title: "Building REST APIs with Node.js",
    excerpt:
      "Create scalable and efficient REST APIs using Node.js and Express.",
    content:
      "<p>Node.js has become the go-to platform for building RESTful APIs due to its non-blocking I/O model and JavaScript ecosystem.</p><h2>Setting Up Express</h2><p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p><pre><code>const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.get('/api/users', (req, res) => {\n  res.json({ users: [] });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});</code></pre><h2>RESTful Routes</h2><p>Follow REST conventions for your API endpoints:</p><ul><li>GET /api/resources - List all resources</li><li>GET /api/resources/:id - Get a specific resource</li><li>POST /api/resources - Create a new resource</li><li>PUT /api/resources/:id - Update a resource</li><li>DELETE /api/resources/:id - Delete a resource</li></ul><h2>Middleware</h2><p>Express middleware functions are powerful tools for processing requests:</p><pre><code>app.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n});</code></pre><h2>Best Practices</h2><ul><li>Use proper HTTP status codes</li><li>Implement error handling middleware</li><li>Validate input data</li><li>Use environment variables for configuration</li><li>Implement rate limiting and security measures</li></ul>",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    date: "Dec 18, 2025",
    readTime: "8 min read",
    category: "Backend",
    author: "David Park",
    authorImage: "https://i.pravatar.cc/150?img=13",
  },
  {
    slug: "typescript-beginners-guide",
    title: "TypeScript: A Beginner's Guide",
    excerpt:
      "Discover how TypeScript adds type safety to your JavaScript projects.",
    content:
      '<p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p><h2>Why TypeScript?</h2><p>TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications.</p><h3>Key Benefits:</h3><ul><li><strong>Type Safety:</strong> Catch errors during development</li><li><strong>Better IDE Support:</strong> Enhanced autocomplete and refactoring</li><li><strong>Self-Documenting Code:</strong> Types serve as documentation</li><li><strong>Modern JavaScript Features:</strong> Use the latest ECMAScript features</li></ul><h2>Basic Types</h2><pre><code>let name: string = "John";\nlet age: number = 30;\nlet isActive: boolean = true;\nlet numbers: number[] = [1, 2, 3];\n\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}</code></pre><h2>Functions</h2><p>TypeScript allows you to specify types for function parameters and return values:</p><pre><code>function greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\nconst add = (a: number, b: number): number => a + b;</code></pre><h2>Getting Started</h2><p>Install TypeScript globally or in your project:</p><pre><code>npm install -g typescript\ntsc --init</code></pre><h2>Conclusion</h2><p>TypeScript enhances JavaScript development with type safety and better tooling, making it ideal for large-scale applications.</p>',
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    category: "TypeScript",
    author: "Lisa Martinez",
    authorImage: "https://i.pravatar.cc/150?img=9",
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization Tips",
    excerpt:
      "Learn essential techniques to make your websites faster and more efficient.",
    content:
      "<p>Web performance is crucial for user experience and SEO. Slow websites frustrate users and rank lower in search results.</p><h2>Critical Rendering Path</h2><p>Understanding how browsers render pages is key to optimization:</p><ul><li>DOM Construction</li><li>CSSOM Construction</li><li>Render Tree Construction</li><li>Layout</li><li>Paint</li></ul><h2>Optimization Techniques</h2><h3>1. Minimize HTTP Requests</h3><p>Reduce the number of requests by combining files, using CSS sprites, and inlining critical CSS.</p><h3>2. Enable Compression</h3><pre><code># Enable Gzip compression in .htaccess\nAddOutputFilterByType DEFLATE text/html text/css application/javascript</code></pre><h3>3. Optimize Images</h3><ul><li>Use appropriate formats (WebP for photos, SVG for icons)</li><li>Compress images without losing quality</li><li>Implement lazy loading</li><li>Use responsive images with srcset</li></ul><h3>4. Leverage Browser Caching</h3><p>Set appropriate cache headers to store static assets locally:</p><pre><code>Cache-Control: max-age=31536000, immutable</code></pre><h3>5. Minify Resources</h3><p>Minify HTML, CSS, and JavaScript to reduce file sizes.</p><h3>6. Use a CDN</h3><p>Content Delivery Networks distribute your content across multiple servers worldwide for faster delivery.</p><h2>Measuring Performance</h2><p>Use tools like:</p><ul><li>Google PageSpeed Insights</li><li>Lighthouse</li><li>WebPageTest</li><li>Chrome DevTools Performance tab</li></ul><h2>Conclusion</h2><p>Performance optimization is an ongoing process. Regular monitoring and incremental improvements lead to better user experiences.</p>",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    date: "Dec 12, 2025",
    readTime: "10 min read",
    category: "Performance",
    author: "James Wilson",
    authorImage: "https://i.pravatar.cc/150?img=14",
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug, category, limit = 3) {
  const relatedPosts = blogPosts.filter(
    (post) => post.slug !== slug && post.category === category
  );

  if (relatedPosts.length === 0) {
    return blogPosts.filter((post) => post.slug !== slug).slice(0, limit);
  }

  return relatedPosts.slice(0, limit);
}
