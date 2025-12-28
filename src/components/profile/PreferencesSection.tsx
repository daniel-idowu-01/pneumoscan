const PreferencesSection = () => {
  return (
    <section>
      <h2 className="text-white text-xl font-bold mb-4">Preferences</h2>
      <div className="bg-[#192433] border border-[#233348] rounded-xl overflow-hidden">
         <div className="flex items-center justify-between p-5 border-b border-[#233348]">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-[#92a9c9] text-sm">
                      Receive updates when AI processing is complete
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      defaultChecked={true}
                      className="sr-only peer"
                      type="checkbox"
                      defaultValue=""
                    />
                    <div className="w-11 h-6 bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-5 border-b border-[#233348]">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-white font-medium">High Sensitivity Mode</p>
                    <p className="text-[#92a9c9] text-sm">
                      Lower threshold for flagging potential abnormalities
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" defaultValue="" />
                    <div className="w-11 h-6 bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-white font-medium">Marketing Communications</p>
                    <p className="text-[#92a9c9] text-sm">Receive news about new model features</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" defaultValue="" />
                    <div className="w-11 h-6 bg-[#324867] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
      </div>
    </section>
  )
}

export default PreferencesSection
