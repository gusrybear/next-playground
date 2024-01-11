import { ReactNode, forwardRef } from "react";
import Navbar from "./Navbar";

interface DefaultLayout {
  className?: string;
  children: ReactNode;
}

const DefaultLayout = forwardRef<HTMLDivElement, DefaultLayout>(
  ({ children, className = "" }, ref) => {
    return (
      <>
        {/* Header */}
        <Navbar />
        <div ref={ref} className={`${className} mx-auto max-w-[1200px]`}>
          <main>{children}</main>
          {/* Footer */}
        </div>
      </>
    );
  }
);

DefaultLayout.displayName = "default-layout";

export default DefaultLayout;
