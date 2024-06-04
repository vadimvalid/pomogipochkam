const tabs = document.querySelectorAll(".section .tabs");

tabs.forEach((tab) => {
  const tabButtons = tab.querySelectorAll('[role="tab"]');
  const tabPanels = tab.querySelectorAll('[role="tabpanel"]');

  function handleTabClick(event) {
    // hide all tab panels
    tabPanels.forEach((panel) => {
      panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach((tab) => {
      // tab.ariaSelected = false;
      tab.setAttribute("aria-selected", false);
    });
    event.currentTarget.setAttribute("aria-selected", true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;
    const tabPanel = tab.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
  }

  tabButtons.forEach((button) =>
    button.addEventListener("click", handleTabClick)
  );
});
