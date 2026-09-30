"use strict";


const DOM = 
{
    body     : document,
    btnDetail: document.querySelectorAll(".details-btn"),
    modal    : document.querySelectorAll(".modal"),
    overlay  : document.querySelector   (".overlay"),
    closeBtn : document.querySelectorAll(".close-btn")
};



let openedModal;



// keyboard close function
const closeOnKey = function(e)
{
    if (e.key === "Escape" && openedModal)
    {
        closeModal();
    };
    console.log(e.key)
};

// open modal
const openModal = function(tag)
{
    DOM.overlay.classList.remove('hidden');
    document.querySelector(`.modal[data-product="${tag}"]`).classList.remove('hidden');

    openedModal = tag;

    DOM.overlay.addEventListener('click', () => closeModal);
    
    // close modal upon tapping escape
    DOM.body.addEventListener('keydown', closeOnKey);

};



// close modal
const closeModal = function ()
{
    DOM.overlay.classList.add('hidden');
    document.querySelector(`.modal[data-product="${openedModal}"]`).classList.add('hidden');
    
    // remove keyboard event upon modal close
    DOM.body.removeEventListener("keydown", closeOnKey);
    
    openedModal = undefined;
};



// open modal upon click
for (let i=0; i<DOM.btnDetail.length; i++)
{

    let currentBtn = DOM.btnDetail[i];
    
    currentBtn.addEventListener('click', () => openModal(currentBtn.dataset.product));

};



// close modal upon click on X
for (let i=0; i<DOM.modal.length; i++)
{
    let closeBtn = DOM.closeBtn[i]

    closeBtn.addEventListener('click', closeModal);
    
};



// close modal upon clicking overlay
DOM.overlay.addEventListener('click', closeModal);
