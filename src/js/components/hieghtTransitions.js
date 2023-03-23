// animating dynamic height TODO

export default function setHeightTransition({target = "", changeTrigger = "", initialHeight = 0}) {
    const targetElement = document.querySelector(target);
    const changeTriggerElement = document.querySelector(changeTrigger);
    
    const getChildren = () => Array.from(targetElement.children);
    
    // set height: fit-content to childElements
    getChildren().forEach((child) => (child.style.height = "fit-content"));
    // set height and transition to targetElement
    targetElement.style.transition = "height 0.8s";
    
    if (targetElement.offsetHeight < initialHeight) {
      targetElement.style.height = initialHeight + "px";
    } else {
      targetElement.style.height = targetElement.offsetHeight + "px"
    }
    
    changeTriggerElement.addEventListener("click", () => {
      setTimeout(() => {
        if (targetElement.offsetHeight < targetElement.scrollHeight) {
          targetElement.style.height = targetElement.scrollHeight + "px";
        } else {
          // get highest children height value
          const [height] = getChildren()
          .map((child) => child.offsetHeight)
          .sort((a, b) => b - a);
    
          if (initialHeight > height) {
            targetElement.style.height = initialHeight + "px";
            return;
          }
    
          targetElement.style.height = height + "px";
        }
      })
    });

}

