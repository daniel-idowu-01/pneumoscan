import React from 'react'

const UploadTablePagination = () => {
  return (
    <div className="bg-[#192433] p-4 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-text-secondary text-sm">
                Showing <span className="text-white font-medium">1-5</span> of{' '}
                <span className="text-white font-medium">1,248</span> results
              </span>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark disabled:opacity-50 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark text-sm font-medium transition-colors">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark text-sm font-medium transition-colors">
                  3
                </button>
                <span className="text-text-secondary text-sm">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark text-sm font-medium transition-colors">
                  25
                </button>
                <button className="p-2 rounded-lg border border-border-dark text-text-secondary hover:text-white hover:bg-surface-dark transition-colors">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
  )
}

export default UploadTablePagination