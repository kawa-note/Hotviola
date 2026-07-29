// Conceptコンテンツが範囲内に入ったときに実行する内容
const showConcept = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ["0 300px", "0 0"],
  };
  const potions = {
    duration: 2000,
    easing: "ease-in",
  };
  entries[0].target.animate(keyframes, potions);
};

// showConceptをnew IntersectionObserverとする動作を　onceptObserverと設定
const conceptObserver = new IntersectionObserver(showConcept);

// Conceptのコンテンツを監視する指示
conceptObserver.observe(document.querySelector("#Concept_contents"));
