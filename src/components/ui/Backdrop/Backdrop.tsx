import { MouseEventHandler, FC } from "react";

interface IBackdropProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}
// Backdrop component для блюра заднего фона
const Backdrop: FC<IBackdropProps> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="fixed left-0 top-0 z-10 h-full w-full bg-[rgba(0,0,0,.2)] backdrop-blur-[2.5px]"
  />
);

export default Backdrop;
