# QuickToken Landing Page & Sales Funnel

This project is a Next.js application designed to serve as a landing page and sales funnel for the QuickToken Dashboard codebase. It presents itself as a guide on leveraging smart contracts for revenue streams, ultimately leading users to the QuickToken product.

## Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS with custom fonts
* **UI Components:** Custom React components with responsive design
* **Deployment:** Vercel

## Project Structure (App Router)

```
/
├── app/                        # Main application code
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Generic UI elements (diagrams, visualizations)
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   └── sections/           # Page-specific sections (Hero, Features, etc.)
│   ├── utils/                  # Utility functions (fonts, etc.)
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main landing/blog page content
│   └── global.css              # Global styles (Tailwind base, etc.)
├── public/                     # Static assets
│   ├── fonts/                  # Custom fonts
│   └── images/                 # Images, icons, logos
├── .env.local                  # Environment variables (if needed)
├── .gitignore
├── next.config.mjs             # Next.js configuration
├── package.json
├── postcss.config.js           # PostCSS configuration (for Tailwind)
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Custom Fonts

This project uses custom fonts for a unique brand identity:

* **Rekalgera-Regular** (`.otf`) - Used for headings and titles
* **Goodnight-london-Sans** (`.ttf`) - Used for body text

These are configured in `app/utils/fonts.ts` and applied via Tailwind classes (`font-title` and `font-body`).

## Component Architecture

The landing page is built with a modular architecture:

* **Root Layout (`app/layout.tsx`)** - Contains header and footer components
* **Header (`app/components/layout/Header.tsx`)** - Navigation bar with mobile responsiveness
* **Footer (`app/components/layout/Footer.tsx`)** - Site footer with links and attribution
* **Page Sections** - Individual content sections imported into `page.tsx`:
  * Hero
  * Introduction
  * Opportunity
  * Blog Content (Part 1 & 2)
  * Hurdle
  * Solution
  * Features
  * Demo
  * Showcase
  * Pricing
  * FAQ

## Content Strategy

The main page (`app/page.tsx`) weaves a blog-style guide into the sales funnel:

1.  **Hero:** Catchy headline about revenue from smart contracts.
2.  **Introduction:** Briefly discuss potential & challenges.
3.  **Opportunity:** Detail revenue via platform/mint fees.
4.  **Blog Part 1:** Explain *how* smart contracts, deployment, minting etc., work accessibly.
5.  **The Hurdle:** Explain complexity, cost, time of building from scratch.
6.  **The Solution:** Introduce QuickToken Dashboard codebase.
7.  **Blog Part 2:** Discuss SaaS revenue models, target audiences, and marketing for *their* potential platform.
8.  **Features/Benefits:** Highlight QuickToken's advantages (setup, security, fees, customization).
9.  **Live Demo CTA:** Encourage trying a testnet demo.
10. **Showcase:** Link to premium DApp example.
11. **The Offer (Pricing/Purchase):** State price and inclusions.
12. **Call to Action:** Final purchase button.
13. **FAQ:** Address common questions.

## Interactive Visual Elements

The landing page includes custom interactive elements:

* **Sales Funnel Diagram** - Visualizes the customer journey
* **Trend Chart** - Shows blockchain adoption and revenue growth
* **FAQ Accordion** - Expandable questions and answers
* **Mobile Navigation** - Responsive hamburger menu

## Payment Flow (Future Implementation)

Currently, the "Purchase Package" button in the Pricing section is configured as a placeholder. The payment processing will be implemented through:

1. Integration with Gabriel Cavazos' personal business page at https://personal-link-tree-mu.vercel.app/
2. When clicked, users will be redirected to a dedicated checkout page
3. Payment processing will be handled securely through a third-party provider
4. After successful payment, users will receive access to the codebase

**Note:** The payment integration is planned for future development. Currently, interested customers are directed to the contact form on the personal business page.

## External Links

The project links to several external resources:

* **Demo Site:** https://quicktokendashboarddemo.vercel.app/ - Live demo of the QuickToken Dashboard
* **Showcase Site:** https://quick-token-platform.vercel.app/ - Example of a fully branded implementation
* **GitHub Repository:** https://github.com/Gcavazo1/Quicktoken-Landing-Blog.git - Source code repository
* **Developer Site:** https://personal-link-tree-mu.vercel.app/ - Gabriel Cavazos' business page

## Getting Started

**Prerequisites:**

*   Node.js (v18.x or later recommended)
*   npm or yarn

**Setup:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Gcavazo1/Quicktoken-Landing-Blog.git
    cd Quicktoken-Landing-Blog
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Client-Side Components

Some components in this project require React hooks and are marked with the `"use client"` directive:

* `app/components/layout/Header.tsx`
* `app/components/layout/Footer.tsx` 
* `app/components/sections/FaqSection.tsx`

These components use React's `useState` to handle interactive elements like the mobile menu and FAQ accordion.

## Deployment

The recommended deployment platform is Vercel:

1. Connect your GitHub repository to Vercel
2. Configure build settings (usually automatic with Next.js)
3. Deploy the site

No specific environment variables are required for the basic landing page functionality.

## Credits

Developed by Gabriel Cavazos, GigaCode. The project links to the developer's personal business page for inquiries and custom development services.

## License

All rights reserved. This codebase is not open for public use without explicit permission.


