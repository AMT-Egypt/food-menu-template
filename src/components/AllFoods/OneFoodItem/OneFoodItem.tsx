export type OneFoodItemProps = {
  index: number
  name: string
  image: string
  lang: "ar" | "en"
  price: string | undefined
};
export default function OneFoodItem({ image, index, lang, name, price }: OneFoodItemProps) {
  return (
    <div key={index} className="flex justify-between p-2 rounded-md bg-white ">
      <div className="flex flex-col gap-1">
        <p className="text-primary font-medium text-lg">{name}</p>
        <p className="text-secondary text-sm">{price + " "}{lang == "ar" ? "جنيه" : "EGP"}</p>
      </div>
      <img src={image} className="w-20 h-20 object-cover" />
    </div>
  );
}
