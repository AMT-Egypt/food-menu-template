import { IconLanguage } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../../store/translation";
import { RootState } from "../../../types/translationTypes";

export default function ChangeLanguage() {
  const dispatch = useDispatch()
  const lang = useSelector((state: RootState) => state.translation.language)

  return (
    <IconLanguage
      onClick={() => lang == "ar" ?
        dispatch(setLanguage("en")) :
        dispatch(setLanguage("ar"))}
    />
  );
}
