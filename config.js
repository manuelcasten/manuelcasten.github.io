// =========================================================
//  Descargas: los instaladores viven en la carpeta "downloads" de esta misma web.
//  Para publicar una versión nueva, reemplaza el archivo con el MISMO nombre.
//  Captionation Studio pesa más de 100 MB (límite de GitHub Pages): vive en los Releases de su repo
//  y "latest" apunta siempre a la versión más nueva.
// =========================================================
const DESCARGAS = {
  captionation: "downloads/Instalador-Captionation.exe",
  studio: "https://github.com/manuelcasten/captionation-studio/releases/latest/download/Instalador-Captionation-Studio.exe"
};

document.querySelectorAll("[data-descarga]").forEach((a) => {
  a.href = DESCARGAS[a.getAttribute("data-descarga")] || "#";
  a.setAttribute("download", "");
});
document.querySelectorAll("[data-versiones]").forEach((a) => { a.style.display = "none"; });
document.querySelectorAll("[data-anio]").forEach((e) => { e.textContent = new Date().getFullYear(); });
