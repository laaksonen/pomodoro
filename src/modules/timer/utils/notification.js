import timeIcon from '../../../static/time.png';
import endingReached from '../../../static/ending-reached.mp3';
import hellYeah from '../../../static/hell-yeah.mp3';
import theLittleDwarf from '../../../static/the-little-dwarf.mp3';
import coins from '../../../static/coins.mp3';
import solemn from '../../../static/solemn.mp3';
import fromTheDarkSide from '../../../static/from-the-dark-side.mp3';

export function playSound(soundOption) {
  const options = {
    endingReached,
    hellYeah,
    theLittleDwarf,
    coins,
    solemn,
    fromTheDarkSide,
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
