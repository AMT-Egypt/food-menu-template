import { IconBaselineDensityMedium, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { linksData } from "../../../data/linksData";
import { RootState } from "../../../types/translationTypes";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false)
  const { restaurantDescription, restaurantName } = useSelector((state: RootState) => state.translation.words)
  return (
    <div>
      <IconBaselineDensityMedium onClick={() => setOpen(!open)} />
      <div
        onClick={() => setOpen(false)}
        className={`bg-black bg-opacity-20 w-lvw h-lvh ${open ? "absolute" : "hidden"} top-0 left-0`}>
      </div>
      <div className={`absolute bg-white h-lvh w-2/3 ${open ? "left-0" : "-left-full"} top-0 transition-all ease-in-out duration-300 p-2 flex flex-col justify-between`}>
        <IconX
          onClick={() => setOpen(false)}
          className="text-primary hover:text-third transition-all ease-in-out duration-300" />
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <p className="text-primary text-3xl font-secondary">
            {restaurantName}
          </p>
          <p className="text-secondary font-secondary">
            {restaurantDescription}
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center p-4">
          {
            linksData.map(({ title, link, icon }, index) => {
              return (
                <a
                  className="rounded-full border border-solid border-primary p-2"
                  href={link} target="_blank" key={index} title={title}>
                  <div className="text-primary" dangerouslySetInnerHTML={{ __html: icon }} />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
