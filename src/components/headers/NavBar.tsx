import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="layout-container flex justify-center">
        <div className="flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-2xl">
                radiology
              </span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              <Link href="/">PneumoScan</Link>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#"
            >
              About
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#"
            >
              Technology
            </a>
            <a
              className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex h-9 items-center justify-center rounded-lg px-4 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800 transition-colors">
              Log In
            </button>
            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
