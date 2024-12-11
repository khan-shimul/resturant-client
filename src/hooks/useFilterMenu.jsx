import { useMenu } from "./useMenu";

export const useFilterMenu = (category) => {
  const [menu] = useMenu();
  const filteredMenu = menu.filter((item) => item.category === category);
  return filteredMenu;
};
