import ModelStatus from './ModelStatus'

const QuickUpload = () => {
  return (
    <div className="xl:col-span-1 flex flex-col gap-4">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
        Quick Upload
      </h2>
      <div className="flex flex-col rounded-xl border border-border-dark bg-surface-dark overflow-hidden">
        <div className="flex flex-col items-center gap-6 px-6 py-10 border-2 border-dashed border-[#324867] m-4 rounded-lg bg-[#151f2b] group hover:border-primary/50 transition-colors">
          <div className="bg-[#233348] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-white" style={{ fontSize: '32px' }}>
              cloud_upload
            </span>
          </div>
          <div className="flex max-w-[480px] flex-col items-center gap-2">
            <p className="text-white text-base font-bold leading-tight text-center">
              Drag &amp; drop files
            </p>
            <p className="text-[#92a9c9] text-sm font-normal leading-normal text-center">
              DICOM, JPEG, or PNG supported
            </p>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
            <span className="truncate">Browse Files</span>
          </button>
        </div>
        <div className="px-6 pb-6 pt-2">
          <h3 className="text-white text-sm font-semibold mb-3">Recent Uploads</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 p-2 rounded hover:bg-[#233348] cursor-pointer transition-colors">
              <div className="bg-[#233348] rounded h-10 w-10 flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-[#92a9c9]"
                  style={{ fontSize: '20px' }}
                >
                  image
                </span>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-white text-sm font-medium truncate">chest_xray_pt8942.dcm</p>
                <p className="text-[#92a9c9] text-xs">15.4 MB • Uploading...</p>
              </div>
              <span
                className="material-symbols-outlined text-primary animate-spin"
                style={{ fontSize: '18px' }}
              >
                progress_activity
              </span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded hover:bg-[#233348] cursor-pointer transition-colors">
              <div className="bg-[#233348] rounded h-10 w-10 flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-green-500"
                  style={{ fontSize: '20px' }}
                >
                  check
                </span>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <p className="text-white text-sm font-medium truncate">scan_v2_batch04.zip</p>
                <p className="text-[#92a9c9] text-xs">128 MB • Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModelStatus />
    </div>
  )
}

export default QuickUpload
