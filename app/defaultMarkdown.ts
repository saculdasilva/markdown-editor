const repoURL = "https://github.com/saculdasilva/markdown-editor";

export const defaultMarkdown: string = `
# Scaffolding and Dependencies

### Short Description

For this POC, we're focusing on simplicity and development speed. We already know we need interactivity and that fellow developers will be reviewing and fiddling with this codebase, so we’ve chosen the following stack:

- **ReactJS**: A familiar framework to go with, providing a robust ecosystem for building interactive UIs.
- **TailwindCSS**: For styling with minimal setup, allowing us to create a clean and modern interface rapidly.
- **Basic Routing**: Setting up basic routing to navigate between different sections of the application.
- **Commands to Run and Build**: Easy-to-use commands for running the development server, building for production, and other necessary tasks.
- **Code Structure**: Organizing the code in a way that scales, following best practices from the start.
- **Linting and Formatting**: Ensuring code quality with ESLint and Prettier, which are pre-configured to work seamlessly with the stack.

### Why This Stack?

React itself nowadays recommends using a framework directly rather than just React. This approach allows us to leverage the full power of the ecosystem, including server-side rendering, routing, and more advanced state management, without having to configure everything from scratch.

Given this, **Remix** was chosen as the primary framework. Remix is a modern, full-stack React framework that comes with out-of-the-box support for routing, data loading, and more. It’s designed to handle both client-side and server-side rendering, making it a powerful choice for building scalable applications.

### Getting Started

To get started with this stack, follow these steps:

1. **Clone the Repository**:
   \`\`\`bash
   git clone ${repoURL}
   \`\`\`

### Conclusion notes

- It would have been interesting to re-build this as an Electron app and have multiple tabs with history.
- Would be nice to store on the local machine as .md by pressing a button.
- Should have been properly tested on mobile.
`;
