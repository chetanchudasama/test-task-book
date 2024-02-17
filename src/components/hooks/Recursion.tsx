export interface BookInfo {
  id: number;
  name: string;
  isSection: boolean;
  items: BookInfo[];
}
const useRecursion = () => {
  const insertNode = function (
    tree: BookInfo,
    sectionId: number,
    item: string,
    isSection: boolean
  ): BookInfo {
    if (tree.id === sectionId && tree.isSection) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isSection: isSection,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, sectionId, item, isSection);
    });

    return { ...tree, items: latestNode };
  };

  return { insertNode };
};

export default useRecursion;
