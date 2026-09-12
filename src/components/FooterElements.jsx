const FooterElements = () => {
  return (
    <div className="flex justify-between items-end px-8 py-8 md:px-16 relative z-10 w-full mt-auto">
      <div className="flex items-center gap-4 hidden md:flex">
        <div className="flex">
          <img src="https://i.pravatar.cc/100?img=11" alt="student" className="w-8 h-8 rounded-full border-2 border-[var(--color-primary-bg)]" />
          <img src="https://i.pravatar.cc/100?img=12" alt="student" className="w-8 h-8 rounded-full border-2 border-[var(--color-primary-bg)] -ml-2.5" />
          <img src="https://i.pravatar.cc/100?img=13" alt="student" className="w-8 h-8 rounded-full border-2 border-[var(--color-primary-bg)] -ml-2.5" />
        </div>
        <div className="text-xs text-[var(--color-secondary-text)] leading-tight">
          <strong className="text-[var(--color-primary-text)]">500+ students</strong><br/>
          already registered
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 font-mono text-[10px] tracking-[0.15em] text-[var(--color-secondary-text)] before:content-[''] before:w-8 before:h-px before:bg-[var(--color-border-light)] after:content-[''] after:w-8 after:h-px after:bg-[var(--color-border-light)] hidden sm:flex">
        ONE CAMPUS - ONE SPIRIT
      </div>

      <div className="flex flex-col items-center gap-2 absolute right-16 bottom-20 font-mono text-[10px] tracking-[0.1em] text-[var(--color-secondary-text)] hidden md:flex">
        SCROLL
        <div className="w-5 h-8 border border-[var(--color-primary-text)] rounded-[10px] relative flex justify-center pt-1.5 before:content-[''] before:w-[2px] before:h-[6px] before:bg-[var(--color-primary-text)] before:rounded-sm"></div>
      </div>
      
      <div className="font-mono text-xs tracking-[0.1em] text-[var(--color-primary-text)] hidden md:block">
        01 / 06
      </div>
    </div>
  );
};

export default FooterElements;
