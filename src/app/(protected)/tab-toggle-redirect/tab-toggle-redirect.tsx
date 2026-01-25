
const TabToggleRedirect = (pageTab: string) => {

  return (
    <div>
      <ul>
        <li>
          <a href="/tab-toggle-redirect/tab1" style={{ color: pageTab === "tab1" ? "red" : "blue" }}>Tab 1</a>
        </li>
        <li>
          <a href="/tab-toggle-redirect/tab2" style={{ color: pageTab === "tab2" ? "red" : "blue" }}>Tab 2</a>
        </li>
        <li>
          <a href="/tab-toggle-redirect/tab3" style={{ color: pageTab === "tab3" ? "red" : "blue" }}>Tab 3</a>
        </li>
      </ul>
    </div>
  );
};

export default TabToggleRedirect;
