/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import '../px-slider.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-slider" description="The px-slider component allows a user to select a numeric value from a range of acceptable values. The minimum and maximum values, step, and default value can all be specified in configuration. When the isRange property is enabled, a second input box appears on the right hand side of the slider, and two thumb controls appear on the slider bar with the second value accessible via the endValue property. Note the blue slider bar between the two thumb controls to indicate the selected range." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" style="min-width:180px;" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component" style="width: 100%;">
        <px-slider id="slider" value="{{props.value.value}}" end-value="{{props.endValue.value}}" min="{{props.min.value}}" max="{{props.max.value}}" step="{{props.step.value}}" is-range="{{props.isRange.value}}" show-labels="{{props.showLabels.value}}" min-label-position="{{props.minLabelPosition.value}}" max-label-position="{{props.maxLabelPosition.value}}" scale="{{props.scale.value}}" base="{{props.base.value}}" exponent="{{props.exponent.value}}" hide-inputs="{{props.hideInputs.value}}" disabled="{{props.disabled.value}}">
        </px-slider>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-slider" links-includes="[[linksIncludes]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-slider"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-slider-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          {
            configName: "Default",
            configReset: true
          },{
            configName: "Multi-slider",
            isRange: true,
            scale: 'linear',
            min: 0,
            max: 100,
            value: 10,
            endValue: 90
          },{
            configName: "Logarithmic",
            scale: 'logarithmic',
            isRange: false,
            min: 1,
            max: 10000,
            value: 10
          }
        ]
      }
    },

    linksIncludes: {
      type: Array,
      value: function() {
        return ['px-d3-imports/px-polygit-imports-d3.html'];
      }
    }
  },

  demoProps: {
    value: {
      type: Number,
      defaultValue: 10,
      inputType: 'text'
    },

    endValue: {
      type: Number,
      defaultValue: 80,
      inputType: 'text'
    },

    min: {
      type: Number,
      defaultValue: 1,
      inputType: 'text'
    },

    max: {
      type: Number,
      defaultValue: 100,
      inputType: 'text'
    },

    step: {
      type: Number,
      defaultValue: 1,
      inputType: 'text'
    },

    isRange: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    scale: {
      type: String,
      defaultValue: 'linear',
      inputType: 'dropdown',
      inputChoices: ['linear', 'logarithmic', 'exponential']
    },

    base: {
      type: Number,
      defaultValue: 10,
      inputLabel: "Base (for log scales)",
      inputType: 'text'
    },

    exponent: {
      type: Number,
      defaultValue: 2,
      inputLabel: "Exponent (for exp scales)",
      inputType: 'text'
    },

    showLabels: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    minLabelPosition: {
      type: String,
      defaultValue: "bottom",
      inputType: 'dropdown',
      inputChoices: ['bottom', 'top']
    },

    maxLabelPosition: {
      type: String,
      defaultValue: "bottom",
      inputType: 'dropdown',
      inputChoices: ['bottom', 'top']
    },

    hideInputs: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    disabled: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    }
  }
});
