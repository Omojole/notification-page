const notificationPopup = document.querySelectorAll(".notification-box");
const notificationNoEl=document.querySelector('.notification-no');
const icons = document.querySelectorAll(".fa-solid");
let  notificationNo=7; 

for(let i=0;i<notificationPopup.length;i++)
notificationPopup[i].addEventListener('click',function(){if(notificationNo>0){
   let number=i+1;
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

  //Mark all as read
  document.querySelector('.read').addEventListener('click',function(){
    notificationNoEl.textContent=0
    notificationPopup.forEach((box,j)=>{
      const allRead=j+1
      console.log(allRead);
      document.getElementById(`popup_${allRead}`).classList.add('notification-color');
      document.getElementById(`popup_${allRead}`).classList.remove('notificationPopupClass');
      document
      .getElementById(`activeIcon_${allRead}`)
      .classList.remove("fa-solid");
      document
      .getElementById(`activeIcon_${allRead}`)
      .classList.remove("fa-circle");
    }
    )
  })
//   console.log(document.querySelectorAll('.nootification-box'));
//   notification numbering,font,responsiveness
// if(document.querySelector('.notification-box').classList.contains('notificationPopupClass')){
//   action()
// }
//     console.log(document.getElementsByClassName('notification-box').classList.contains('notificationPopupClass'));
