import { IconChevronUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function ButtonToTop() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-primary text-fourth p-1 rounded-full transition-all ease-in-out duration-300 hover:cursor-pointer ${visible ? "opacity-100" : "opacity-0"}`}>
      <IconChevronUp size={25} />
    </div>
  );
}
