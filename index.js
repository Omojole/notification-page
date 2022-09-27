const notificationPopup=document.querySelector('.notification-popup')
console.log(notificationPopup);
notificationPopup.onclick=function(){
    document.querySelector('.notification-popup').classList.add('hide');
    document.querySelectorAll('.notification-popup').classList.remove('notification-popup');
console.log('here');
}