



// About Tabs
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click",(e) =>{
if(e.target.classlist.contains("tab-item") && !e.target.classlist.contains("active")){
    tabsContainer.querySelector(".active").classlist.remove("active");
    e.target.classlist.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection.querySelector(".tab-content.active").classlist.remove("active");
    aboutSection.querySelector(target).classlist.add("active");
}
});