import FontAwesome from "react-fontawesome";

function NavBarList({ items }) {
  const getItems = (item) => {
    let itemsList = null;
    switch (item.type) {
      case "logo":
        itemsList = (
          <img className="h-5 min-w-[145px]" src={item.src} alt={item.name} />
        );
        break;
      case "language":
        itemsList = (
          <p className="border-white border-solid rounded-[3px] py-[3px] px-[3px] border-[1px] hover:bg-white hover:text-tmdbDarkBlue">
            EN
          </p>
        );
        break;
      case "icon":
        itemsList = <FontAwesome name={item.name} />;
        break;
      default:
        itemsList = <li>{item.name}</li>;
        break;
    }
    return itemsList;
  };

  return (
    <ul className="flex gap-7 items-center">
      {items.map((item) => {
        return <li>{getItems(item)}</li>;
      })}
    </ul>
  );
}
export default NavBarList;
