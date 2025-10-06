
import projects from "@/app/data/projects.js";
import ProjectDetail from "@/components/ProjectDetail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

const ProjectPage = ({ params }) => {
  const project = projects.find((project) => project.id === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectPage;
