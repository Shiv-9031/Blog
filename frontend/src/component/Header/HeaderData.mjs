import { IoPersonOutline } from "react-icons/io5";
import { BsBarChartLine } from "react-icons/bs";
import { IoBookmarksOutline } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";

export const HeaderData = [
  {
    name: "profile",
    path: "/profile",
    logo: <IoPersonOutline size={"24px"} />,
  },
  {
    name: "library",
    path: "/library",
    logo: <IoBookmarksOutline size={"24px"} />,
  },
  {
    name: "stories",
    path: "/stories",
    logo: <IoIosPaper size={"24px"} />,
  },
  {
    name: "stats",
    path: "/stats",
    logo: <BsBarChartLine size={"24px"} />,
  },
];
