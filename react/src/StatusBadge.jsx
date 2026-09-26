function StatusBadge({ status }) {
  const badgeClass = `status-badge status-${status.toLowerCase().replace(/\s+/g, "-")}`;

  return <span className={badgeClass}>{status}</span>;
}

export default StatusBadge;