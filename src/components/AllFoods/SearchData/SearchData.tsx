import { useSelector } from "react-redux";
import { allDataAr } from "../../../data/allFoodsAr";
import { allDataEn } from "../../../data/allFoodsEn";
import { oneFoodType } from "../../../types/dataType";
import { RootState } from "../../../types/translationTypes";
import OneFoodItem from "../OneFoodItem";

export default function SearchData() {
  const searchValue = useSelector((state: RootState) => state.search.searchValue)
  const lang = useSelector((state: RootState) => state.translation.language)
  const data = lang == "ar" ? allDataAr : allDataEn
  const dataSearch: oneFoodType[] = []
  data.forEach((item) => {
    item.forEach((food, index) => {
      index !== 0 && dataSearch.push(food);
    })
  })
  const newDataSearch = dataSearch.filter((item) => item.name.includes(searchValue))
  return (
    <div className="bg-fourth py-4">
      <div className="flex flex-col gap-1 container mx-auto">
        {
          newDataSearch.map(({ image, name, price }, index) => {
            return (
              <OneFoodItem image={image} index={index} lang={lang} name={name} price={price} />
            )
          })
        }
      </div>
    </div>
  );
}
