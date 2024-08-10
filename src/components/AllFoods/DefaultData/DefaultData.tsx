import { useSelector } from "react-redux";
import { allDataAr } from "../../../data/allFoodsAr";
import { allDataEn } from "../../../data/allFoodsEn";
import { RootState } from "../../../types/translationTypes";
import OneFoodItem from "../OneFoodItem";

export default function DefaultData() {
  const lang = useSelector((state: RootState) => state.translation.language)
  const data = lang == "ar" ? allDataAr : allDataEn

  return (
    <div className="bg-fourth" dir={lang == "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto py-4">
        <div className="flex flex-col gap-6 w-full">
          {
            data.map((type, index) => {
              return (
                <div key={index} className="flex flex-col gap-4" id={type[0].name}>
                  <div key={index} className="flex flex-col gap-2 w-full items-center ">
                    <img src={type[0].image} className="w-fit h-52 object-contain rounded-xl" />
                    <p className="text-center text-lg text-primary font-bold">
                      {type[0].name}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    {
                      type.map(({ image, name, price }, index) => {
                        if (index !== 0) {
                          return (
                            <OneFoodItem image={image} index={index} lang={lang} name={name} price={price} />
                          )
                        }
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
