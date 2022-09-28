const notificationPopup = document.querySelectorAll(".notificationPopupClass");
const icons = document.querySelectorAll(".fa-solid");
notificationPopup.forEach((notificationPopupclass, i) => {
  notificationPopupclass.onclick = function () {
    const notificationNo = 1 + i;
    document
      .getElementById(`popup_${notificationNo}`)
      .classList.remove("notificationPopupClass");
    document
      .getElementById(`popup_${notificationNo}`)
      .classList.add("notification-color");

    document
      .getElementById(`activeIcon_${notificationNo}`)
      .classList.remove("fa-solid");
    document
      .getElementById(`activeIcon_${notificationNo}`)
      .classList.remove("fa-circle");
    console.log(notificationNo);
  };
});

//notification numbering,font,responsiveness
