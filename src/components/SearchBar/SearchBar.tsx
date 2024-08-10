import { IconSearch } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { typesFoodDataAr } from "../../data/typesFoodDataAr";
import { typesFoodDataEn } from "../../data/typesFoodEn";
import { setSearchValue } from "../../store/search";
import { RootState } from "../../types/translationTypes";

export default function SearchBar() {
  const { restaurantName, searchHere } = useSelector((state: RootState) => state.translation.words)
  const lang = useSelector((state: RootState) => state.translation.language)
  const dispatch = useDispatch()
  const data = lang == "ar" ? typesFoodDataAr : typesFoodDataEn

  return (
    <div style={{ direction: lang == "ar" ? "rtl" : "ltr" }} className="flex flex-col justify-center items-center gap-6 w-full py-6 container mx-auto ">
      <div className={`${lang == "en" ? "font-primary" : "font-secondary"} text-primary`}>
        <p>{restaurantName}</p>
      </div>
      <div className="flex flex-col gap-4 w-full overflow-hidden">
        <div className="w-full flex gap-1 border border-solid border-gray-300 text-secondary p-2 rounded-md">
          <IconSearch />
          <input
            className="w-full bg-transparent outline-none"
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
            type="text"
            placeholder={searchHere} />
        </div>
        <div className="w-full overflow-x-scroll scroll-bar">
          <div className="flex gap-2 overflow-scroll w-fit">
            {
              data.map(({ image, link, name }) => {
                return (
                  <a href={`#${name}`} key={link} className="w-32 h-40 overflow-hidden flex flex-col gap-1 text-primary ">
                    <div style={{
                      backgroundImage: `url(${image})`
                    }} className="w-32 h-32 bg-cover bg-center border-primary border-solid border-2 rounded-lg"></div>
                    <p>
                      {name}
                    </p>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
