const PageTitle = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-primary text-sm font-medium mb-1 cursor-pointer">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Back to Dashboard
      </div>

      <h1 className="text-white text-3xl md:text-4xl font-black tracking-[-0.033em]">
        Upload History
      </h1>

      <p className="text-text-secondary max-w-xl">
        Track processing status, review analysis results, and manage patient X-ray records.
      </p>
    </div>
  )
}

export default PageTitle
