const UploadTableHeader = () => {
  return (
    <thead>
      <tr className="bg-[#192433] border-b border-border-dark">
        {['Upload Date', 'Patient ID', 'Preview', 'AI Analysis', 'Status', 'Actions'].map(label => (
          <th
            key={label}
            className={[
              'p-5 text-xs font-semibold tracking-wider uppercase text-text-secondary',
              label === 'Actions' ? 'text-right' : 'text-left',
            ].join(' ')}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default UploadTableHeader
