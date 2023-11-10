function openTab(tabName) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none"; // Приховує всі вкладки
    }
    var selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block"; // Показує обрану вкладку
    }
}

