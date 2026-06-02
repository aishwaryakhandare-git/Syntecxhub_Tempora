function PageHeader({ title, subtitle }) {
  return (
    <header className="pageHeader">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="headerActions">
        <button className="menuButton" aria-label="More options">
          <span />
          <span />
          <span />
        </button>
        <div className="avatar" aria-label="Profile" />
      </div>
    </header>
  )
}

export default PageHeader
