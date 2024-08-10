import { useSelector } from "react-redux";
import { RootState } from "../types/translationTypes";

export default function LoadingPage() {
  const { name, pleaseWait } = useSelector((state: RootState) => state.translation.words)
  return (
    <div className="bg-primary w-lvw h-lvh flex flex-col gap-2 justify-center items-center ">
      <p className="text-6xl text-fourth font-primary">
        {name}
      </p>
      <div className="text-third font-secondary flex">
        <p>
          {pleaseWait}
        </p>
        <div className="waiting-animation">
          <span className="span-1">.</span>
          <span className="span-2">.</span>
          <span className="span-3">.</span>
        </div>
      </div>
    </div>
  );
}
