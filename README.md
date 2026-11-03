# Sikandar Ali · Portfolio

**Live:** https://sikandar-ali-portfolio-opal.vercel.app

**GitHub:** https://github.com/Ali786-S/sikandar-portfolio

A custom Next.js portfolio with eight researched case studies, two progressive 3D experiences, an evidence-led Why Hire Me page, and an original CV download.

## Run locally

Use Node.js 22 LTS and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. For a production preview:

```sh
npm run build
npm start
```

## Validate

```sh
npm run lint
npm run build
npm run typecheck
# With the production server running in another terminal:
npm test
npm audit --omit=dev
```

The route suite checks all 15 content pages, unique H1s, descriptions, document language, internal links and fragments, 404 status codes, actual Word download, screenshot assets, security headers and SEO endpoints. A ready-to-enable GitHub Actions template is provided in `docs/quality-workflow.yml`. To activate it, copy it into `.github/workflows/quality.yml` after authorising workflow publishing. The tests can be run locally and against the live site independently of that optional permission.

## Deploy to GitHub and Vercel

The local repository is isolated from the surrounding workspace. No account credentials are included.

1. Authorise GitHub access, create a repository such as `Ali786-S/sikandar-portfolio`, add its HTTPS URL as `origin`, then push `main`.
2. In Vercel, import that repository, use the **Next.js** framework preset and the repository root. The configuration uses `npm ci` and `npm run build`.
3. Confirm **main** is the Production Branch. Vercel then deploys pushes automatically and creates previews for pull requests. This connection requires the user's GitHub/Vercel authorisation.
4. Set `NEXT_PUBLIC_SITE_URL` to the assigned public HTTPS URL and redeploy. If it is omitted, Vercel's `VERCEL_PROJECT_PRODUCTION_URL` supplies the production canonical base automatically. Local development falls back to localhost. Do not publish an invented domain.
5. Verify the homepage and each route, CV, `/robots.txt`, `/sitemap.xml` and `/opengraph-image` on the live URL before treating deployment as complete.
6. For a custom domain, use Vercel → Project → Settings → Domains. Add the domain and apply the DNS values shown by Vercel. Then set `NEXT_PUBLIC_SITE_URL` to its canonical HTTPS address and redeploy.

An existing Vercel CLI login can also deploy with `vercel --prod` from this directory. The CLI must be signed in; a source build does not establish deployment.

## Structure

- `app/`: routes, generated metadata, sitemap, robots and social image.
- `lib/projects.ts`: project content, exact stacks, links and evidence notes.
- `lib/experience.ts`: experience timeline and six evidence-backed strengths.
- `components/`: navigation, progressive scene loader, shared project components and interactions.
- `public/images/`: original portrait and authentic public/source screenshots, compressed to WebP.
- `public/Sikandar-Ali-CV.docx`: the supplied original CV.

## Motion and performance

WebGL is dynamically imported only for visible scenes on viewports of at least 900px, when reduced motion and data saving are off. Mobile and reduced-motion visitors receive static alternatives. Scenes unmount when off screen; each desktop scene has a pause control. Geometry and DPR are bounded, and no external 3D textures, HDRIs or model downloads are needed. Content remains server-rendered if JavaScript or WebGL is unavailable.

Images have intrinsic dimensions. The hero uses Next.js image optimisation and priority loading. Geist fonts are self-hosted by Next.js. No third-party analytics, advertising or runtime font requests are included.

## Content integrity

Public repositories were reviewed on 3 November 2026, including the coursework ZIP source. Flosendo's reviewed public version verifies FastAPI, SQLite and Gemini; the supplied CV additionally records two LLM APIs and pytest experience. Jobstrikes is a public front-end MVP with AI features under development. Restart Housing's exact languages and database engine are unverified and are not inferred. Its four user groups are not named because the supplied CV does not identify them. Private client screens and operational data are not included. The data-lake account describes local validation during a service outage, not restoration of that service.

The Python progression coursework uses text files and graphics.py/Tkinter, despite its repository description referring to databases. Bookstore storage uses in-memory Java maps. Forage starter repositories were reviewed but excluded from featured work to avoid presenting starter code as independently delivered software.

## Verification limits

See the accompanying quality report for executed checks. A local preview is not a public deployment. Lighthouse must be measured on the final deployed URL; no score is asserted without a successful audit. The production dependency audit is clean as of the recorded check. The lint-tool dependency tree has a moderate minimatch advisory for which npm did not offer a compatible fix; it is not part of the production runtime. Do not force npm's suggested downgrade to obsolete ESLint.
