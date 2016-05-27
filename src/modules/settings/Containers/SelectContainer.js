import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setSoundOption } from '../settings';
import { playSound } from '../../timer/utils/notification';

function SelectContainer({ soundOption, setSoundOption, notificationVolume }) {
  const options = [
    { value: 'endingReached', label: 'Ending Reached' },
    { value: 'hellYeah', label: 'Hell Yeah' },
    { value: 'theLittleDwarf', label: 'The Little Dwarf' },
    { value: 'coins', label: 'Coins' },
    { value: 'solemn', label: 'Solemn' },
    { value: 'fromTheDarkSide', label: 'From the Dark Side' },
  ];

  return (
    <div className="mt4 mb4">
      <div className="mb1">Notification sound:</div>
      <Select
        name="someName"
        value={soundOption}
        options={options}
        onChange={(event) => {
          if (event === null) {
            setSoundOption('endingReached');
          } else {
            setSoundOption(event.value);
            playSound(event.value, notificationVolume);
          }
        }}
      />

    </div>
  );
}

const mapStateToProps = state => {
  return {
    soundOption: state.settings.soundOption,
    notificationVolume: state.settings.notificationVolume,
  };
};

export default connect(mapStateToProps, { setSoundOption })(SelectContainer);
