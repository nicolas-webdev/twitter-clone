import "./SidebarOption.css";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div
      className={`sidebarOption ${active && "sidebarOption--active"}`}
      onClick={() =>
        alert("テスト用のサンプルです。新しい機能は後ほど追加されます")
      }
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
