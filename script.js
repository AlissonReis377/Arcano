let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        // Rolando para cima
        document.querySelector('.navbar').classList.remove('scrolled');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para tratar o scroll para cima no topo da página
}, false);


document.getElementById("imagecard").addEventListener("mouseover", function(){
  console.log("Mouse sobre a imagem");
  this.src = "images/5.jpg";
});

document.getElementById("imagecard").addEventListener("mouseout", function(){
  console.log("Mouse fora da imagem");
  this.src = "images/4.jpg";
});

document.getElementById("imagecard1").addEventListener("mouseover", function(){
  console.log("Mouse sobre a imagem");
  this.src = "images/7.jpg";
});

document.getElementById("imagecard1").addEventListener("mouseout", function(){
  console.log("Mouse fora da imagem");
  this.src = "images/6.jpg";
});


document.getElementById("imagecard2").addEventListener("mouseover", function(){
    console.log("Mouse sobre a imagem");
    this.src = "images/9.jpg";
  });
  
  document.getElementById("imagecard2").addEventListener("mouseout", function(){
    console.log("Mouse fora da imagem");
    this.src = "images/8.jpg";
  });





  document.getElementById("imagecard3").addEventListener("mouseover", function(){
    console.log("Mouse sobre a imagem");
    this.src = "images/d.jpg";
  });
  
  document.getElementById("imagecard3").addEventListener("mouseout", function(){
    console.log("Mouse fora da imagem");
    this.src = "images/c.jpg";
  });


  document.getElementById("imagecard4").addEventListener("mouseover", function(){
    console.log("Mouse sobre a imagem");
    this.src = "images/b.jpg";
  });
  
  document.getElementById("imagecard4").addEventListener("mouseout", function(){
    console.log("Mouse fora da imagem");
    this.src = "images/a.jpg";
  });

  document.getElementById("imagecard5").addEventListener("mouseover", function(){
    console.log("Mouse sobre a imagem");
    this.src = "images/f.jpg";
  });
  
  document.getElementById("imagecard5").addEventListener("mouseout", function(){
    console.log("Mouse fora da imagem");
    this.src = "images/e.jpg";
  });

  /////NÃO MEXER AQUI >:(