import ReactTooltip from "react-tooltip";
import ReactModal from "react-modal";
import React, { useEffect, useState } from "react";
import { 
  RRPSComponentWrapperStyle, RRPSCRangePickerComponentWrapper
 } from './RRPSComponentStyling';

import './component-style/RRPSComponentStyling.component.css';

export default function ReactRangePickerSmart(RangePickerProperties) {
  // setting default value as 0
  const [rangeSliderValueRef, setRangeSliderValue] = useState(
    (RangePickerProperties.defaultSliderValue ? RangePickerProperties.defaultSliderValue : 0)
  );
  const [rangeInputSelectorTypeRef, setRangeInputSelectorType] = useState('range-slider');
  useEffect(() => {
    setRangeInputSelectorType(rangeInputSelectorTypeRef)
  })
  return (
    <React.Fragment>
      <div className="react-range-picker-smart-component-wrapper rrpsc_container" style={RRPSComponentWrapperStyle} {...RangePickerProperties}>
        <div className="rrpsc_details_headerWrapper" style={{ 
          width: 'fit-content', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <h4 className="rrpsc_title" style={{ marginBottom: '0', paddingBottom: '0' }}>{RangePickerProperties.title}</h4>
          <p className="rrpsc_description" style={{ marginTop: '8px', fontSize: '14px', color: '#888888' }}>{RangePickerProperties.description}</p>
        </div>
        <div className="rrpsc_componentWrapper" style={{ width: '100%' }}>
          <div className="rrpsc_rangePickerTypeSelector" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.8rem',
            marginBottom: '0',
            paddingBottom: '0',
            width: '100%'
          }}>
            <span className="rrpsc_rangePickerTypeOption rrpsc_rangePickerTypeOption_rangeSlider" style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '0.4rem'
            }}>
              <input type="radio" name="range-picker-option" value="range-slider" 
                defaultChecked
                onSelect={() => setRangeInputSelectorType('range-slider')}
                onChange={() => setRangeInputSelectorType('range-slider')}
              />
              <p className="rangeSlider_name">Standard Duration</p>
            </span>
            <span className="rrpsc_rangePickerTypeOption rrpsc_rangePickerTypeOption_rangeInputs" style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '0.4rem'
            }}>
              <input type="radio" name="range-picker-option" value="range-input" 
                onSelect={() => setRangeInputSelectorType('custom-range-input')} 
                onChange={() => setRangeInputSelectorType('custom-range-input')}
              />
              <p className="rangeSlider_name">Set Custom Duration</p>
            </span>
          </div>
          <div className="rrpsc_rangePickerComponentWrapper">
            <RenderRangeSetterComponent 
              currentRangeSliderRef={rangeSliderValueRef}
              currentRangeSliderMethod={setRangeSliderValue}
              inputTypeRef={rangeInputSelectorTypeRef}
            />
          </div>
        </div>
        <div className="rrpsc_rangePickerComponentCTAWrapper" style={{ 
          marginTop: '1.8em',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button className="rrpsc_rangePickerComponentCTA_resetButton rrpsc_whiteButton"
            style={{
              padding: '0.6em 1.2em',
              boxShadow: '0 1px 2px 0 rgba(0,0,0,0.2)',
              fontWeight: '600',
              fontFamily: 'inherit',
              border: '2px solid transparent'
            }}
            onClick={() => {
              if (rangeInputSelectorTypeRef === 'range-slider') {
                setRangeSliderValue(0);
                let rangeSliderValue = document.getElementById('rrpsc_componentInput_rangeSliderValue');
                rangeSliderValue.value = 0;
              } else if (rangeInputSelectorTypeRef === 'custom-range-input') {
                let customInput_startValue = document.getElementById('rrpsc_componentInput_startValue');
                let customInput_endValue = document.getElementById('rrpsc_componentInput_endValue');
                customInput_startValue.value = null;
                customInput_endValue.value = null;
              }
            }}
          >Reset</button>
        </div>
      </div>
    </React.Fragment>
  )
}

function RenderRangeSetterComponent({
    currentRangeSliderRef,
    currentRangeSliderMethod,
    inputTypeRef
  }) {
  if (inputTypeRef === 'range-slider') {
    return (
      <React.Fragment>
        <input type="range" className="rrpsc_rangePicker_sliderComponent" style={RRPSCRangePickerComponentWrapper} 
          data-for="range-slider-value"
          data-tip=''
          defaultValue={currentRangeSliderRef}
          onChange={(rangeSlider) => currentRangeSliderMethod(rangeSlider.target.value)}
          id="rrpsc_componentInput_rangeSliderValue"
        />
        <ReactTooltip id="range-slider-value">
          {currentRangeSliderRef}
        </ReactTooltip>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p className="rrpsc_rangePicker_customInputComponentTitle" style={{
          color: '#cccccc',
          fontSize: '14px'
        }}>Type a custom range</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto',
          gap: '1em',
          alignItems: 'center'
        }}>
          <input type="number" 
            placeholder="Enter a start value" 
            className="rrpsc_componentInput"
            id="rrpsc_componentInput_startValue"
          />
          <input type="number" 
            placeholder="Enter an end value" 
            className="rrpsc_componentInput"
            id="rrpsc_componentInput_endValue"
          />
        </div>
      </React.Fragment>
    )
  }
}