const tabs = document.querySelectorAll(".section .tabs");
const tabButtons = document.querySelectorAll('.section .tabs [role="tab"]');
const tabPanels = document.querySelectorAll('.section .tabs [role="tabpanel"]');

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
  const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", handleTabClick);
});
