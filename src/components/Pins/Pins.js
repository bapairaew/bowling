import React, { Component, PropTypes } from 'react';
import './Pins.css';

class Pins extends Component {
  shouldShow(visibilities, i) {
    return visibilities.indexOf(i) !== -1;
  }

  render() {
    const { visibilities } = this.props;
    return (
      <div className="pins">
        <div className="pins__row pins__row--4">
          <div className={'pins__pin' + (this.shouldShow(visibilities, 0) ? '' : ' pins__pin--hidden')}></div>
          <div className={'pins__pin' + (this.shouldShow(visibilities, 1) ? '' : ' pins__pin--hidden')}></div>
          <div className={'pins__pin' + (this.shouldShow(visibilities, 2) ? '' : ' pins__pin--hidden')}></div>
          <div className={'pins__pin' + (this.shouldShow(visibilities, 3) ? '' : ' pins__pin--hidden')}></div>
        </div>
        <div className="pins__row pins__row--3">
          <div className={'pins__pin' + (this.shouldShow(visibilities, 4) ? '' : ' pins__pin--hidden')}></div>
          <div className={'pins__pin' + (this.shouldShow(visibilities, 5) ? '' : ' pins__pin--hidden')}></div>
          <div className={'pins__pin' + (this.shouldShow(visibilities, 6) ? '' : ' pins__pin--hidden')}></div>
        </div>
        <div className="pins__row pins__row--2">
          <div className={'pins__pin' + (this.shouldShow(visibilities, 7) ? '' : ' pins__pin--hidden')}></div>
          <div className={'pins__pin' + (this.shouldShow(visibilities, 8) ? '' : ' pins__pin--hidden')}></div>
        </div>
        <div className="pins__row pins__row--1">
          <div className={'pins__pin' + (this.shouldShow(visibilities, 9) ? '' : ' pins__pin--hidden')}></div>
        </div>
      </div>
    );
  }
}

Pins.propTypes = {
  visibilities: PropTypes.array.isRequired
}

export default Pins;
