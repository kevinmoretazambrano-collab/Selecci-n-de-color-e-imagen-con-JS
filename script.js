function mostrarColor() {
    const color = document.getElementById("selectColor").value;
    const cuadro = document.getElementById("cuadroColor");

    cuadro.style.backgroundColor = color ? color : "transparent";
}

function mostrarVehiculo() {
    const vehiculo = document.getElementById("selectVehiculo").value;
    const cuadro = document.getElementById("cuadroVehiculo");

    const imagenes = {
        carro: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&auto=format&fit=crop&q=60",
        moto: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&auto=format&fit=crop&q=60",
        bicicleta: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&auto=format&fit=crop&q=60"
    };

    if (imagenes[vehiculo]) {
        cuadro.innerHTML = `<img src="${imagenes[vehiculo]}" alt="${vehiculo}">`;
    } else {
        cuadro.innerHTML = "";
    }
}