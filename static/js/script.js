document.addEventListener("DOMContentLoaded", () => {

    const transicion = document.getElementById("transicion");

    document.querySelectorAll(".O, .C, .N, .E").forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const destino = this.href;

            transicion.className = "";

            if(this.classList.contains("O")){
                transicion.classList.add("overworld");
            }

            else if(this.classList.contains("C")){
                transicion.classList.add("caves");
            }

            else if(this.classList.contains("N")){
                transicion.classList.add("nether");
            }

            else if(this.classList.contains("E")){
                transicion.classList.add("end");
            }

            setTimeout(() => {
                window.location.href = destino;
            }, 1000);

        });

    });

});