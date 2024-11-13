import { ChildProps } from "@/types";

const StaticBg = ({ children }: ChildProps) => {
  return (
    <div className="border-general relative  w-full overflow-hidden overflow-x-clip  bg-slate-50 bg-gradient-to-t from-slate-50 to-slate-100 dark:bg-[#0B1120] dark:bg-none h-screen ">
      <div className="w-full justify-center bg-[url('/pattern-dark.20747baf.svg')] py-10 dark:bg-dpattern md:mt-0 lg:flex lg:h-full lg:items-center lg:py-0">
        {children}
      </div>
    </div>
  );
};

export default StaticBg;
