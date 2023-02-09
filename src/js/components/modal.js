const selectors = {
  modal: "#cm",
  trigger: "#cm_trigger"
}

const classNames = {
  activeModal: "modal__active",
  bodyNoScroll: "no-scroll"
}

export default function modal() {
  
  const overlay = document.querySelector(selectors.modal)
  const trigger = document.querySelector(selectors.trigger)

  console.log(overlay)
  console.log(trigger)

  trigger.addEventListener("click", (event) => {
    document.body.classList.add(classNames.bodyNoScroll)
    overlay.classList.add(classNames.activeModal)
  })
  
  overlay.addEventListener("click", (event) => {
    if (event.target !== overlay) return

    overlay.classList.remove(classNames.activeModal)
    document.body.classList.remove(classNames.bodyNoScroll)
  })
}