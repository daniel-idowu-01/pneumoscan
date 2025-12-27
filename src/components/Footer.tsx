const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-sm">
                radiology
              </span>
            </div>
            <span className="text-base font-bold text-slate-900 dark:text-white">
              PneumoScan
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a
              className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors"
              href="#"
            >
              Compliance
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 md:flex-row">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © 2024 PneumoScan Analyze. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a
              className="text-slate-400 hover:text-white transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
