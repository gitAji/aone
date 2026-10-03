import ProjectsClient from './ProjectsClient';

// Unlisted portfolio page -- intentionally not in the nav or the sitemap,
// and excluded from search indexing.
export const metadata = {
  title: "Portfolio | Aone",
  description: "A roundup of live project deployments.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ProjectsClient />;
}
