// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};
const mushrooms = [
  {
    label: "Death Cap",
    img: "/contents/mush-1.png",
    href: "/mushroom",
    danger: true,
    percentage: 90,
    flag: "danger",
    region: "Texas",
  },
  {
    label: "Paddy Straw",
    img: "/contents/mush-2.png",
    href: "/mushroom",
    danger: false,
    percentage: 90,
    flag: "normal",
  },
  {
    label: "Destroying Angel",
    img: "/contents/mush-3.png",
    href: "/mushroom",
    danger: true,
    percentage: 90,
    flag: "safe",
    region: "Texas",
  },
  {
    label: "False Death Cap",
    img: "/contents/mush-4.png",
    href: "/mushroom",
    danger: true,
    percentage: 90,
    flag: "normal",
  },
  {
    label: "Puffball",
    img: "/contents/mush-5.png",
    href: "/mushroom",
    danger: false,
    percentage: 90,
    flag: "danger",
  },
];
// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushrooms}; // Requires import {warningMessage, dummyData} from './data/development.js';
