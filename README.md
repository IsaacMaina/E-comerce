"# E-commerce

This is a Next.js e-commerce application with 3D product visualization, smooth scrolling, and responsive design.

## Features

- Next.js 14 with App Router
- 3D product visualization using Three.js
- Smooth scrolling with Lenis
- Responsive design with Tailwind CSS
- TypeScript support
- Optimized performance with GSAP animations
- Product catalog with filtering and search
- Shopping cart functionality
- Server Actions for API calls

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TypeScript Configuration

This project includes TypeScript build error ignoring configuration in `next.config.mjs` to allow production builds to complete even with type errors during development:

```js
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
eslint: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has ESLint errors.
  // !! WARN !!
  ignoreDuringBuilds: true,
},
```

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Three.js Documentation](https://threejs.org/docs/) - learn about Three.js for 3D graphics.
- [Tailwind CSS](https://tailwindcss.com/docs) - learn about Tailwind CSS utility classes." 
