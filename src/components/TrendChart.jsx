function TrendChart({ points }) {
  return (
    <div className="trendChart">
      {points.map((point) => (
        <div className="trendPoint" key={point.label}>
          <span style={{ height: `${point.value}%` }} />
          <small>{point.label}</small>
        </div>
      ))}
    </div>
  )
}

export default TrendChart
