const notificationPopup = document.querySelectorAll(".notificationPopupClass");
const notificationNoEl=document.querySelector('.notification-no');
const icons = document.querySelectorAll(".fa-solid");
let  notificationNo=7; 
let playing=true;
//notification numbering,font,responsiveness
  for(let i=0;i<notificationPopup.length;i++)
  notificationPopup[i].addEventListener('click',function(){if(notificationNo>0){
  const number=i+1;
    document.getElementById(`popup_${number}`).classList.add('notification-color');
    document.getElementById(`popup_${number}`).classList.remove('notificationPopupClass');
      
    document
    .getElementById(`activeIcon_${number}`)
    .classList.remove("fa-solid");
    document
    .getElementById(`activeIcon_${number}`)
    .classList.remove("fa-circle");

    notificationNo>=0;notificationNo-=1
notificationNoEl.textContent=notificationNo
  }
    })
    // console.log(document.querySelector('.notification-box').classList.contains('notificationPopupClass'));
