# Nischal Tamang — Portfolio

My personal portfolio site: [nischaltamang.com.np](https://nischaltamang.com.np)

Founder & CTO at [Nirvix Technology](https://www.nirvixtech.com), full-stack developer, and 11× hackathon winner. This site covers my work experience, hackathon wins, education, and blog.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) + [Magic UI](https://magicui.design/)
- [Content Collections](https://www.content-collections.dev/) for the MDX-powered blog
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```

The site config (name, bio, skills, work history, hackathons, education, socials) lives in a single file: [`src/data/resume.tsx`](./src/data/resume.tsx). Blog posts are MDX files in [`content/`](./content).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## License

Based on the [Magic UI portfolio template](https://magicui.design/) by Dillion Verma, licensed under [MIT](./LICENSE). Content, images, and personal data on this site belong to Nischal Tamang.
