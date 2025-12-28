const RecentAnalyses = () => {
  return (
    <div className="xl:col-span-2 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-[22px] font-bold">Recent Analyses</h2>
        <button className="text-primary text-sm">View All</button>
      </div>

      <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-dark bg-[#111822]">
                <th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">
                  Patient ID
                </th>
                <th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">
                  Scan Type
                </th>
                <th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">
                  Date
                </th>
                <th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">
                  Status
                </th>
                <th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9]">
                  Risk Score
                </th>
                <th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-[#92a9c9] text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-border-dark">
              <tr className="group hover:bg-[#233348] transition-colors">
                <td className="py-4 px-6 font-medium text-white">#PT-8942</td>
                <td className="py-4 px-6 text-gray-300">Chest X-Ray (PA)</td>
                <td className="py-4 px-6 text-gray-400">Oct 24, 10:42 AM</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <span className="size-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    Processing
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-400">-</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                      more_vert
                    </span>
                  </button>
                </td>
              </tr>
              <tr className="group hover:bg-[#233348] transition-colors">
                <td className="py-4 px-6 font-medium text-white">#PT-8941</td>
                <td className="py-4 px-6 text-gray-300">Chest X-Ray (Lat)</td>
                <td className="py-4 px-6 text-gray-400">Oct 24, 09:15 AM</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                    Completed
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[15%]"></div>
                    </div>
                    <span className="text-xs text-green-400">Low (0.15)</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-primary hover:text-blue-300 font-medium text-xs">
                    View Report
                  </button>
                </td>
              </tr>
              <tr className="group hover:bg-[#233348] transition-colors">
                <td className="py-4 px-6 font-medium text-white">#PT-8938</td>
                <td className="py-4 px-6 text-gray-300">Chest CT Scan</td>
                <td className="py-4 px-6 text-gray-400">Oct 23, 04:30 PM</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                    Flagged
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-[85%]"></div>
                    </div>
                    <span className="text-xs text-red-400">High (0.85)</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-primary hover:text-blue-300 font-medium text-xs">
                    Review Now
                  </button>
                </td>
              </tr>
              <tr className="group hover:bg-[#233348] transition-colors">
                <td className="py-4 px-6 font-medium text-white">#PT-8935</td>
                <td className="py-4 px-6 text-gray-300">Chest X-Ray (PA)</td>
                <td className="py-4 px-6 text-gray-400">Oct 23, 02:12 PM</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                    Completed
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-16 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[8%]"></div>
                    </div>
                    <span className="text-xs text-green-400">Low (0.08)</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <button className="text-primary hover:text-blue-300 font-medium text-xs">
                    View Report
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border-dark bg-[#111822] flex justify-center">
          <button className="text-sm text-[#92a9c9] hover:text-white flex items-center gap-1">
            Show more results
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              expand_more
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecentAnalyses
