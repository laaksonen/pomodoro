export function notify(message) {
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notifications');
  } else if (Notification.permission === 'granted') {
    const notification = new Notification(message);
  }
}

function playSound(filename) {
  document.getElementById('sound')
    .innerHTML=`<audio autoplay="autoplay"><source src=${filename}.mp3 type="audio/mpeg" /></audio>`;
}
