// 'use strict';
// //defining variables
// const modal = document.querySelector('.modal'); // we store object in a variable, to be able more easly select that obect
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.sciana');

// //defining functions
// const closeModal = function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//     document.getElementById("iframeID").src = "";
// };
// const openModal = function() {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// };

// //opening modal window after clicking on a wall with a photo

// btnsOpenModal[0].addEventListener('click', function (){
//     document.getElementById("iframeID").src = "https://www.youtube.com/embed/ApfLlubBZ7A";
//     openModal()
// });

// btnsOpenModal[1].addEventListener('click', function (){
//     document.getElementById("iframeID").src = "https://www.youtube.com/embed/Az7NlYBsUp0";
//     openModal()

// });

// btnsOpenModal[2].addEventListener('click', function (){

//     document.getElementById("iframeID").src = "https://www.youtube.com/embed/-wASykNAKGU";
//     openModal()
// });

// btnsOpenModal[3].addEventListener('click', function (){

//     document.getElementById("iframeID").src = "https://www.youtube.com/embed/23pCesoKEU4";
//     openModal()
// });

// btnsOpenModal[4].addEventListener('click', function (){
//     document.getElementById("iframeID").src = "https://www.youtube.com/embed/YLo_mw70ZaU";
//     openModal()
// });

// btnsOpenModal[5].addEventListener('click', function (){
//     document.getElementById("iframeID").src = "https://www.youtube.com/embed/6O6aVXEh4rk";
//     openModal()
// });

// //closing modal window after clicling x, around the modal window and Escape key
// btnCloseModal.addEventListener('click', closeModal); //nie wywołujemy tutaj tej funkcji w ten sposób: closeModal(), bo wtedy byłaby ona wywołana po otworzeniu strony
// overlay.addEventListener('click', closeModal);
// document.addEventListener('keydown', function(e) {
//     if (e.key === 'Escape' && !modal.classList.contains('hidden')){
//             closeModal()
//     }
// });
