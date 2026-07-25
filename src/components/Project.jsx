export function Project({ name, description, url }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </dd>
      {description && (
        <>
          <dt>Description</dt>
          <dd>{description}</dd>
        </>
      )}
    </dl>
  );
}
