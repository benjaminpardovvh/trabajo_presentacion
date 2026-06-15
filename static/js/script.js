document.addEventListener("DOMContentLoaded", () => {

    const transicion = document.getElementById("transicion");

    const netherSound = document.getElementById("portalSound");
    const endSound = document.getElementById("endMusic");

    document.querySelectorAll(".O, .C, .N, .E").forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const destino = this.href;

            // Limpiar clases anteriores
            transicion.className = "";

            if(this.classList.contains("O")){
                transicion.classList.add("overworld");
            }

            else if(this.classList.contains("C")){
                transicion.classList.add("caves");
            }

            else if(this.classList.contains("N")){

                transicion.classList.add("nether");

                netherSound.currentTime = 0;
                netherSound.play();

            }

            else if(this.classList.contains("E")){

                transicion.classList.add("end");

                endSound.currentTime = 0;
                endSound.play();

            }

            setTimeout(() => {
                window.location.href = destino;
            }, 3000);

        });

    });

});