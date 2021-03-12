import "./SidebarOption.css";

const SidebarOption = ({ active, text, Icon }) => {
  return (
    <div
      className={`sidebarOption ${active && "sidebarOption--active"}`}
      onClick={() =>
        alert(
          "This is a test app. Further functionality will be added in the future"
        )
      }
    >
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
