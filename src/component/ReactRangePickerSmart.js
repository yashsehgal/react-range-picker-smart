import ReactTooltip from "react-tooltip";
import ReactModal from "react-modal";
import React from "react";
import { 
  RRPSComponentWrapperStyle, RRPSCRangePickerComponentWrapper
 } from './RRPSComponentStyling';

// import './component-style/RRPSComponentStyling.component.css';

export default function ReactRangePickerSmart(RangePickerProperties) {

  return (
    <React.Fragment>
      <div className="react-range-picker-smart-component-wrapper rrpsc_container" style={RRPSComponentWrapperStyle} {...RangePickerProperties}>
        <div className="rrpsc_details_headerWrapper" style={{ 
          width: 'fit-content', 
          marginBottom: '0.2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <h4 className="rrpsc_title" style={{ marginBottom: '0', paddingBottom: '0' }}>{RangePickerProperties.title}</h4>
          <p className="rrpsc_description" style={{ marginTop: '8px', fontSize: '14px', color: '#888888' }}>{RangePickerProperties.description}</p>
        </div>
        <div className="rrpsc_componentWrapper">
          <div className="rrpsc_rangePickerTypeSelector" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '0.8rem'
          }}>
            <span className="rrpsc_rangePickerTypeOption rrpsc_rangePickerTypeOption_rangeSlider" style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '0.4rem'
            }}>
              <input type="radio" name="range-picker-option" value="range-slider" />
              <p className="rangeSlider_name">Standard Duration</p>
            </span>
            <span className="rrpsc_rangePickerTypeOption rrpsc_rangePickerTypeOption_rangeInputs" style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '0.4rem'
            }}>
              <input type="radio" name="range-picker-option" value="range-input" />
              <p className="rangeSlider_name">Set Custom Duration</p>
            </span>
          </div>
          <div className="rrpsc_rangePickerComponentWrapper">
            <input type="range" className="rrpsc_rangePicker_sliderComponent" style={RRPSCRangePickerComponentWrapper} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}