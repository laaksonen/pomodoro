import timeIcon from '../../../static/time.png';
import alert1 from '../../../static/alert1.mp3';

export function playSound(soundOption) {
  const options = {
    option1: alert1,
  };

  document.getElementById('sound')
    .innerHTML=`<audio autoplay="autoplay"><source src=${options[soundOption]} type="audio/mpeg" /></audio>;`;
}

export function notify(message) {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notifications');
  } else if (Notification.permission === 'granted') {
    const notification = new Notification(message, { icon: timeIcon });
  }
}
