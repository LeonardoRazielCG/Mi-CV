function switchFolderTab(evt, tabName) {
    // 1. Ocultar todos los bloques de contenido de las pestañas
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove("active");
    }

    // 2. Desactivar el estado visual "abierto" de los botones superiores
    const tabs = document.getElementsByClassName("folder-tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    // 3. Activar y desplegar la carpeta seleccionada por el usuario
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}