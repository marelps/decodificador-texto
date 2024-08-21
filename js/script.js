document.getElementById("meuLink").addEventListener("click", function(event){
    if(this.hasAttribute("disabled")){
      event.preventDefault(); // Evita a ação padrão do link
    }
  });