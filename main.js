(function() {
    "use strict";
    window.addEventListener("load", init);
  
    function init() {
      getElement("industry").addEventListener("click", showIndustry);
      getElement("research").addEventListener("click", showResearch);
      getElement("teaching").addEventListener("click", showTeaching);
    }

    function showIndustry() {
        getElement("industry-description").classList.remove("hidden");
        getElement("industry").classList.add("selected");
        getElement("research-description").classList.add("hidden");
        getElement("teaching-description").classList.add("hidden");
        getElement("research").classList.remove("selected");
        getElement("teaching").classList.remove("selected");
    }

    function showResearch() {
        getElement("research-description").classList.remove("hidden");
        getElement("research").classList.add("selected");
        getElement("industry-description").classList.add("hidden");
        getElement("teaching-description").classList.add("hidden");
        getElement("industry").classList.remove("selected");
        getElement("teaching").classList.remove("selected");
    }

    function showTeaching() {
        getElement("teaching-description").classList.remove("hidden");
        getElement("teaching").classList.add("selected");
        getElement("research-description").classList.add("hidden");
        getElement("industry-description").classList.add("hidden");
        getElement("research").classList.remove("selected");
        getElement("industry").classList.remove("selected");
    }

    function getElement(id) {
        return document.getElementById(id);
    }    
  })();
  