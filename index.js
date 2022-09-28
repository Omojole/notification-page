const notificationPopup = document.querySelectorAll(".notificationPopupClass");
notificationPopup.forEach((notificationPopupclass, i) => {
  notificationPopupclass.onclick = function () {
    // i.classList.add("hide");
   const notificationNo=1+i
    document.getElementById(`popup_${notificationNo}`).classList.remove("notificationPopupClass");
    // document.getElementById(`activeIcon_${notificationNo}`).classList.remove('.fa-circle');

  };      
});

