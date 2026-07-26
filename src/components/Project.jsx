export function Project({ name, description, url }) {
  return (
    <dl className="project-card">
      <dt className="sr-only">Name</dt>
      <dd className="project-card-title">
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </dd>
      {description && (
        <>
          <dt className="sr-only">Description</dt>
          <dd className="project-card-description">{description}</dd>
        </>
      )}
    </dl>
  );
}
