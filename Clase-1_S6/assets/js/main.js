const formularioHTML = document.querySelector("#formulario");

formularioHTML.addEventListener("submit", function (e) {
    e.preventDefault();

const nameUser = formularioHTML.nameUser.value.trim();
const ageUser = formularioHTML.ageUser.value.trim();
const mailUser = formularioHTML.mailUser.value.trim();
const countryUser = formularioHTML.countryUser.value;
const checkTerm = formularioHTML.checkTerm.cheched;
const genderUser = formularioHTML.genderUser.value;

if (!nameUser || !ageUser || !mailUser || !checkTerm || !genderUser)
    return alert("Todos los campos son necesarios !!")

    console.log({
        nameUser,
        ageUser,
        mailUser,
        countryUser,
        checkUser,
        genderUser,
    });
});
//     let html = `
//     <h2>Nombre: ${nameUser}</h2>
//     <h4>Edad: ${ageUser} años</h4>
//     <p>
//         <b>Correo:</b> ${mailUser}
//     </p>
//     <p>
//         <b>País:</b> ${countryUser}
//     </p>
//     <p>
//         <b>Genero:</b> ${genderUser}
//     </p>
//     <p>
//         <b>terminos:</b> ${checkTerm ? "✅" : "❌"}
//     </p>
//     `;

//     document.querySelector(".user")
// });

// const boxHTML = document.querySelector("#box");
// console.log(boxHTML.children["cajita6"].textContent);