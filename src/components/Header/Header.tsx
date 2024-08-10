import { useSelector } from "react-redux";
import { RootState } from "../../types/translationTypes";
import ChangeLanguage from "./ChangeLanguage";
import Sidebar from "./Sidebar";

export default function Header() {
  const { welcome } = useSelector((state: RootState) => state.translation.words)

  return (
    <div className="bg-primary py-2 text-fourth">
      <div className="container mx-auto flex justify-between items-center">
        <ChangeLanguage />
        <p>
          {welcome}
        </p>
        <Sidebar />
      </div>
    </div>
  );
}
