// =========================================================
//  Descargas: los instaladores viven en la carpeta "downloads" de esta misma web.
//  Para publicar una versión nueva, reemplaza el archivo con el MISMO nombre.
// =========================================================
const DESCARGAS = {
  captionation: "downloads/Instalador-Captionation.exe"
};

document.querySelectorAll("[data-descarga]").forEach((a) => {
  a.href = DESCARGAS[a.getAttribute("data-descarga")] || "#";
  a.setAttribute("download", "");
});
document.querySelectorAll("[data-versiones]").forEach((a) => { a.style.display = "none"; });
document.querySelectorAll("[data-anio]").forEach((e) => { e.textContent = new Date().getFullYear(); });
