# Project Guidelines

## Code Style
- Use functional components with React hooks
- Follow TypeScript strict mode rules
- Keep components small and focused (single responsibility principle)
- Use meaningful variable and function names
- Add comments only for complex logic, not obvious code

## Styling
- Use Tailwind CSS utility classes for styling
- Create reusable component classes when patterns repeat
- Avoid arbitrary values when possible (use theme configuration)
- Use responsive design prefixes (sm:, md:, lg:, xl:)
- Maintain consistent spacing (use 4px increments)

## File Organization
- Group related files in feature-based folders
- Place component-specific styles within the component file
- Keep assets in src/assets with clear naming
- Separate types into src/types directory
- One component per file unless tightly coupled

## Performance
- Lazy load images and heavy components
- Use React.memo for expensive computations
- Optimize re-renders with useCallback and useMemo
- Keep bundle size small by importing only what's needed
- Use proper image formats and sizes

## Accessibility
- Use semantic HTML elements
- Add alt text to all meaningful images
- Ensure proper color contrast
- Make interactive elements keyboard accessible
- Use ARIA labels when necessary

## Testing
- Write unit tests for utility functions
- Test component interactions, not implementation details
- Use meaningful test descriptions
- Keep tests fast and reliable

## Git Practices
- Write clear, descriptive commit messages
- Make small, focused commits
- Pull before pushing to avoid conflicts
- Use feature branches for new work
- Delete merged branches regularly
