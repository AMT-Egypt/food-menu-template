import { useSelector } from "react-redux";
import { RootState } from "../../types/translationTypes";
import DefaultData from "./DefaultData";
import SearchData from "./SearchData";

export default function AllFoods() {
  const searchValue = useSelector((state: RootState) => state.search.searchValue)
  return (
    <>
      {
        searchValue == "" ?
          <DefaultData /> :
          <SearchData />
      }
    </>
  );
}
