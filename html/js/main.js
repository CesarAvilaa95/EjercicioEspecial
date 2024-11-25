document.addEventListener("DOMContentLoaded", () => {
    const loadButton = document.querySelector(".btn-primary");
    const productsContainer = document.querySelector(".row.g-3");

    loadButton.addEventListener("click", async () => {
      try {
        
        loadButton.textContent = "Loading...";
        loadButton.disabled = true;
  
        
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Error al obtener los productos");
        const products = await response.json();
  
        renderProducts(products);
  
        // Restaurar el botón
        loadButton.textContent = "Load Products";
        loadButton.disabled = false;
      } catch (error) {
        console.error(error);
        alert("Hubo un error al cargar los productos.");
      }
    });
  
    function renderProducts(products) {
      productsContainer.innerHTML = "";

