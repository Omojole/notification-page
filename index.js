const notificationPopup = document.querySelectorAll(".notificationPopupClass");
const notificationNoEl=document.querySelector('.notification-no');
const icons = document.querySelectorAll(".fa-solid");
let  notificationNo=7; 

notificationPopup.forEach((notificationPopupclass, i) => 
notificationPopupclass.onclick = function () {
  const notificationClicked = 1 + i;
  document
  .getElementById(`popup_${notificationClicked}`)
  .classList.remove("notificationPopupClass");
  document
  .getElementById(`popup_${notificationClicked}`)
  .classList.add("notification-color");
  
  document
  .getElementById(`activeIcon_${notificationClicked}`)
  .classList.remove("fa-solid");
  document
  .getElementById(`activeIcon_${notificationClicked}`)
  .classList.remove("fa-circle");
  // if(document.querySelector('.notification-box').classList.contains(notificationPopupclass)){
  //   notificationNo>=0;notificationNo--
  //     console.log(notificationNo);
  // notificationNoEl.textContent=notificationNo
  // }
  });
// console.log(document.querySelectorAll('.notification-box').classList);

//notification numbering,font,responsiveness
