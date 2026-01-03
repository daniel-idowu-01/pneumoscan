import React from 'react'
import { stats } from '@/lib/utils/data'

const AboutStats = () => {
  return (
    <div className="w-full flex justify-center py-5 bg-surface-dark border-y border-border-dark">
      <div className="layout-content-container flex flex-col flex-1 px-4 md:px-10 lg:px-40">
        <div className="flex flex-wrap gap-4 py-8 justify-between">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-1 items-center">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 items-center text-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-2">
                  {stat.icon}
                </span>
                <p className="text-white tracking-light text-3xl font-bold leading-tight">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm font-medium leading-normal">{stat.label}</p>
              </div>

              {index < stats.length - 1 && <div className="w-px bg-border-light hidden md:block" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutStats
