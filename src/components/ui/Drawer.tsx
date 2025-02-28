import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Drawer: React.FC<Props> = ({ open, onClose, children }) => {
  return createPortal(
    <>
      <div
        className={`backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 ${
          open ? "block" : "pointer-events-none hidden"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 w-[250px] h-full transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event: React.MouseEvent<HTMLElement>) => {
          event.preventDefault();
          event.stopPropagation();
        }}
      >
        <div className="bg-secondary-0 overflow-y-auto px-2 min-h-svh">
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Drawer;
