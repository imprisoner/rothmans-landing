const buttonActiveClass = "button--pressed"

function setActiveButton(event, siblings) {
  if (event.target.classList.contains(buttonActiveClass)) {
    return false
  } else {
    siblings.forEach(button => button.classList.remove(buttonActiveClass))
    event.target.classList.add(buttonActiveClass)
  }
}

export default function initMenu(menuEl) {
  const buttons = menuEl.querySelectorAll("button")

  buttons.forEach(button => {
    button.addEventListener("click", (event) => setActiveButton(event, buttons))
  });
}