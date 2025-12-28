import React from 'react'

const ModelStatus = () => {
  return (
    <div className="bg-surface-dark border border-border-dark rounded-xl p-4 flex items-center justify-between mt-2">
      <div className="flex items-center gap-3">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
        <div>
          <p className="text-white text-sm font-medium">Model Status</p>
          <p className="text-[#92a9c9] text-xs">Online • v2.4.1</p>
        </div>
      </div>
      <span className="material-symbols-outlined text-[#92a9c9]" style={{ fontSize: '20px' }}>
        dns
      </span>
    </div>
  )
}

export default ModelStatus
