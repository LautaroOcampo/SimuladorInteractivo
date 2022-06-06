
let compra2
let total = 0

window.onload = function comprar() {

    while(compra2 !== "ESC" || compra2 !== "esc"){
        compra2 = prompt(`¿Que producto queres comprar?\n1 para Chaqueta manga larga con solapa\n2 para Abrigo clásico cruzado de mezcla de lana\n3 para Chaqueta hombres moda rompevientos\n4 para Montgomery capucha desmontable\n5 para Gabardina de diseño de algodón\n6 para Abrigo Would De Hombre De Paño Perramus\n7 para Chaquetón de abrigo\n8 para Chaleco groom\n"ESC" para salir`) 
        if (Number(compra2) === 1){
            total += 27999
            alert("El precio parcial es de " + total)
        }
        else if (Number(compra2) === 2){
            total += 47999
            alert("El precio parcial es de " + total)
        }
        else if (Number(compra2) === 3){
            total += 28999
            alert("El precio parcial es de " + total)
        }
        else if (Number(compra2) === 4){
            total += 29999
            alert("El precio parcial es de " + total)
        }
        else if (Number(compra2) === 5){
            total += 34999
            alert("El precio parcial es de " + total)
        }
        else if (Number(compra2) === 6){
            total += 23999
            alert("El precio parcial es de " + total)
        }
        else if (Number(compra2) === 7){
            total += 46999
            alert("El precio parcial es de " + total)
        }
        else if (Number(compra2) === 8){
            total += 79999
            alert("El precio parcial es de " + total)
        }
        else if (compra2 === "ESC" || compra2 === "esc"){
            alert("El precio final es de " + total)
            break
        }
        else{
            alert("Valor nulo")
        }
    }

}

comprar()