# Production deployment

- Public URL: https://sikandar-ali-portfolio-opal.vercel.app
- Vercel project: `sikandar-ali-portfolio`
- Vercel team: `alih49691-9075s-projects`
- Repository: https://github.com/Ali786-S/sikandar-portfolio
- Production source branch: `main`

The site is deployed and its public HTTPS routes have been verified.

## Automatic deployments

The Vercel Git connection currently requires the account owner to connect GitHub in [Vercel Account → Authentication](https://vercel.com/account/authentication). Vercel returned: “You need to add a Login Connection to your GitHub account first.”

After connecting `Ali786-S`, open the Vercel project’s Settings → Git and connect `Ali786-S/sikandar-portfolio`. Keep `main` as the production branch. Verify a subsequent push triggers a deployment. The CLI equivalent is `vercel git connect https://github.com/Ali786-S/sikandar-portfolio.git` from this linked checkout.

## Automated quality checks

`docs/quality-workflow.yml` is a complete GitHub Actions template. It is documentation, not an enabled workflow. GitHub CLI’s current authorisation can publish repository source, but cannot publish files under `.github/workflows` without its optional `workflow` scope. Once authorised, copy the template to `.github/workflows/quality.yml` and push it to enable the checks.

## Validation

Run `TEST_BASE_URL=https://sikandar-ali-portfolio-opal.vercel.app npm test` to check production routes, fragments, downloads, headers, metadata and 404 behaviour. Google PageSpeed Insights can audit the same public URL.

## Custom domain

In Vercel → Project → Settings → Domains, add the domain and apply the DNS records Vercel returns. Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS URL and redeploy. No domain purchase is required for the existing public Vercel URL.
