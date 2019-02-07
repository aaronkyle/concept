// URL: https://beta.observablehq.com/@aaronkyle/selectize-js
// Title: Selectize.js
// Author: Aaron Kyle Dennis (@aaronkyle)
// Version: 115
// Runtime version: 1

const m0 = {
  id: "df5fec539a0ea090@115",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Selectize.js`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
[Selectize.js](https://selectize.github.io/selectize.js/) is a jQuery-based input interface. It's useful for tagging, contact lists, country selectors, and so on.
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
This notebook ports [Maksim Surguy](https://github.com/msurguy)'s [Fiddle](http://jsfiddle.net/msurguy/uZmcD/) to Observable.
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Thanks to [Mike Bostock](https://beta.observablehq.com/@mbostock) for [responding to my help requests](https://talk.observablehq.com/t/struggling-to-get-a-tag-input-form-element-with-autocomplete/1484/4)!`
)})
    },
    {
      inputs: ["html"],
      value: (function(html){return(
html`
    <div class="container">
      <div class="row centered-form">
        <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Tagged Multi-Country Selection</h3>
            </div>
            <div class="panel-body">
              <form role="form" id="contacts">

                <div class="form-group">
                  <select id="select-country" placeholder="Select a country..." multiple>
<option value="AFG">Afghanistan</option>
<option value="ALA">Åland Islands</option>
<option value="ALB">Albania</option>
<option value="DZA">Algeria</option>
<option value="ASM">American Samoa</option>
<option value="AND">Andorra</option>
<option value="AGO">Angola</option>
<option value="AIA">Anguilla</option>
<option value="ATA">Antarctica</option>
<option value="ATG">Antigua & Barbuda</option>
<option value="ARG">Argentina</option>
<option value="ARM">Armenia</option>
<option value="ABW">Aruba</option>
<option value="AUS">Australia</option>
<option value="AUT">Austria</option>
<option value="AZE">Azerbaijan</option>
<option value="BHS">Bahamas</option>
<option value="BHR">Bahrain</option>
<option value="BGD">Bangladesh</option>
<option value="BRB">Barbados</option>
<option value="BLR">Belarus</option>
<option value="BEL">Belgium</option>
<option value="BLZ">Belize</option>
<option value="BEN">Benin</option>
<option value="BMU">Bermuda</option>
<option value="BTN">Bhutan</option>
<option value="BOL">Bolivia</option>
<option value="BES">Bonaire, Sint Eustatius & Saba</option>
<option value="BIH">Bosnia & Herzegovina</option>
<option value="BWA">Botswana</option>
<option value="BVT">Bouvet Island</option>
<option value="BRA">Brazil</option>
<option value="IOT">British Indian Ocean Territory</option>
<option value="BRN">Brunei</option>
<option value="BGR">Bulgaria</option>
<option value="BFA">Burkina Faso</option>
<option value="MMR">Burma / Myanmar</option>
<option value="BDI">Burundi</option>
<option value="KHM">Cambodia</option>
<option value="CMR">Cameroon</option>
<option value="CAN">Canada</option>
<option value="CPV">Cape Verde</option>
<option value="CYM">Cayman Island</option>
<option value="CAF">Central African Republic</option>
<option value="TCD">Chad</option>
<option value="CHL">Chile</option>
<option value="CHN">China</option>
<option value="CXR">Christmas Island</option>
<option value="CCK">Cocos (Keeling) Islands</option>
<option value="COL">Colombia</option>
<option value="COM">Comoros</option>
<option value="COG">Congo (Brazzaville) </option>
<option value="COD">Congo (Kinshasa) </option>
<option value="COK">Cook Islands</option>
<option value="CRI">Costa Rica</option>
<option value="CIV">Côte d'Ivoire</option>
<option value="HRV">Croatia</option>
<option value="CUB">Cuba</option>
<option value="CUW">Curaçao</option>
<option value="CYP">Cyprus</option>
<option value="CZE">Czechia</option>
<option value="DNK">Denmark</option>
<option value="DJI">Djibouti</option>
<option value="DMA">Dominica</option>
<option value="DOM">Dominican Republic</option>
<option value="ECU">Ecuador</option>
<option value="EGY">Egypt</option>
<option value="SLV">El Salvador</option>
<option value="GNQ">Equatorial Guinea</option>
<option value="ERI">Eritrea</option>
<option value="EST">Estonia</option>
<option value="SWZ">Eswatini / Swaziland</option>
<option value="ETH">Ethiopia</option>
<option value="FLK">Falkl& Islands</option>
<option value="FRO">Faroe Islands</option>
<option value="FJI">Fiji</option>
<option value="FIN">Finland</option>
<option value="FRA">France</option>
<option value="GUF">French Guiana</option>
<option value="PYF">French Polynesia</option>
<option value="ATF">French Southern & Antarctic Lands</option>
<option value="GAB">Gabon</option>
<option value="GMB">Gambia</option>
<option value="GEO">Georgia</option>
<option value="DEU">Germany</option>
<option value="GHA">Ghana</option>
<option value="GIB">Gibraltar</option>
<option value="GRC">Greece</option>
<option value="GRL">Greenland</option>
<option value="GRD">Grenada</option>
<option value="GLP">Guadeloupe</option>
<option value="GUM">Guam</option>
<option value="GTM">Guatemala</option>
<option value="GGY">Guernsey</option>
<option value="GIN">Guinea</option>
<option value="GNB">Guinea-Bissau</option>
<option value="GUY">Guyana</option>
<option value="HTI">Haiti</option>
<option value="HMD">Heard Isl& & McDonald Islands</option>
<option value="VAT">Holy See / Vatican City</option>
<option value="HND">Honduras</option>
<option value="HKG">Hong Kong</option>
<option value="HUN">Hungary</option>
<option value="ISL">Iceland</option>
<option value="IND">India</option>
<option value="IDN">Indonesia</option>
<option value="IRN">Iran</option>
<option value="IRQ">Iraq</option>
<option value="IRL">Ireland</option>
<option value="IMN">Isle of Man</option>
<option value="ISR">Israel</option>
<option value="ITA">Italy</option>
<option value="JAM">Jamaica</option>
<option value="JPN">Japan</option>
<option value="JEY">Jersey</option>
<option value="JOR">Jordan</option>
<option value="KAZ">Kazakhstan</option>
<option value="KEN">Kenya</option>
<option value="KIR">Kiribati</option>
<option value="PRK">Korea, North</option>
<option value="KOR">Korea, South</option>
<option value="KWT">Kuwait</option>
<option value="KGZ">Kyrgyzstan</option>
<option value="LAO">Laos</option>
<option value="LVA">Latvia</option>
<option value="LBN">Lebanon</option>
<option value="LSO">Lesotho</option>
<option value="LBR">Liberia</option>
<option value="LBY">Libya</option>
<option value="LIE">Liechtenstein</option>
<option value="LTU">Lithuania</option>
<option value="LUX">Luxembourg</option>
<option value="MAC">Macao</option>
<option value="MKD">Macedonia</option>
<option value="MDG">Madagascar</option>
<option value="MWI">Malawi</option>
<option value="MYS">Malaysia</option>
<option value="MDV">Maldives</option>
<option value="MLI">Mali</option>
<option value="MLT">Malta</option>
<option value="MHL">Marshall Islands</option>
<option value="MTQ">Martinique</option>
<option value="MRT">Mauritania</option>
<option value="MUS">Mauritius</option>
<option value="MYT">Mayotte</option>
<option value="MEX">Mexico</option>
<option value="FSM">Micronesia</option>
<option value="MDA">Moldova</option>
<option value="MCO">Monaco</option>
<option value="MNG">Mongolia</option>
<option value="MNE">Montenegro</option>
<option value="MSR">Montserrat</option>
<option value="MAR">Morocco</option>
<option value="MOZ">Mozambique</option>
<option value="NAM">Namibia</option>
<option value="NRU">Nauru</option>
<option value="NPL">Nepal</option>
<option value="NLD">Netherlands</option>
<option value="NCL">New Caledonia</option>
<option value="NZL">New Zealand</option>
<option value="NIC">Nicaragua</option>
<option value="NER">Niger</option>
<option value="NGA">Nigeria</option>
<option value="NIU">Niue</option>
<option value="NFK">Norfolk Island</option>
<option value="MNP">Northern Mariana Islands</option>
<option value="NOR">Norway</option>
<option value="OMN">Oman</option>
<option value="PAK">Pakistan</option>
<option value="PLW">Palau</option>
<option value="PSE">Palestinian Territory, Occupied</option>
<option value="PAN">Panama</option>
<option value="PNG">Papua New Guinea</option>
<option value="PRY">Paraguay</option>
<option value="PER">Peru</option>
<option value="PHL">Philippines</option>
<option value="PCN">Pitcairn Islands</option>
<option value="POL">Poland</option>
<option value="PRT">Portugal</option>
<option value="PRI">Puerto Rico</option>
<option value="QAT">Qatar</option>
<option value="REU">Réunion</option>
<option value="ROU">Romania</option>
<option value="RUS">Russian Federation</option>
<option value="RWA">Rwanda</option>
<option value="BLM">Saint Barthélemy</option>
<option value="SHN">Saint Helena, Ascension & Tristan da Cunha</option>
<option value="KNA">Saint Kitts and Nevis</option>
<option value="LCA">Saint Lucia</option>
<option value="MAF">Saint Martin (French part)</option>
<option value="SPM">Saint Pierre & Miquelon</option>
<option value="VCT">Saint Vincent & the Grenadines</option>
<option value="WSM">Samoa</option>
<option value="SMR">San Marino</option>
<option value="STP">Sao Tome & Principe</option>
<option value="SAU">Saudi Arabia</option>
<option value="SEN">Senegal</option>
<option value="SRB">Serbia</option>
<option value="SYC">Seychelles</option>
<option value="SLE">Sierra Leone</option>
<option value="SGP">Singapore</option>
<option value="SXM">Sint Maarten (Dutch part)</option>
<option value="SVK">Slovakia</option>
<option value="SVN">Slovenia</option>
<option value="SLB">Solomon Islands</option>
<option value="SOM">Somalia</option>
<option value="ZAF">South Africa</option>
<option value="SGS">South Georgia & the South Sandwich Islands</option>
<option value="SSD">South Sudan</option>
<option value="ESP">Spain</option>
<option value="LKA">Sri Lanka</option>
<option value="SDN">Sudan</option>
<option value="SUR">Suriname</option>
<option value="SJM">Svalbard & Jan Mayen</option>
<option value="SWE">Sweden</option>
<option value="CHE">Switzerland</option>
<option value="SYR">Syria</option>
<option value="TWN">Taiwan</option>
<option value="TJK">Tajikistan</option>
<option value="TZA">Tanzania</option>
<option value="THA">Thailand</option>
<option value="TLS">Timor-Leste / East Timor</option>
<option value="TGO">Togo</option>
<option value="TKL">Tokelau</option>
<option value="TON">Tonga</option>
<option value="TTO">Trinidad & Tobago</option>
<option value="TUN">Tunisia</option>
<option value="TUR">Turkey</option>
<option value="TKM">Turkmenistan</option>
<option value="TCA">Turks & Caicos Islands</option>
<option value="TUV">Tuvalu</option>
<option value="UGA">Uganda</option>
<option value="UKR">Ukraine</option>
<option value="ARE">United Arab Emirates</option>
<option value="GBR">United Kingdom</option>
<option value="USA">United States</option>
<option value="UMI">United States Minor Outlying Islands</option>
<option value="URY">Uruguay</option>
<option value="UZB">Uzbekistan</option>
<option value="VUT">Vanuatu</option>
<option value="VEN">Venezuela</option>
<option value="VNM">Vietnam</option>
<option value="VGB">Virgin Islands, British</option>
<option value="VIR">Virgin Islands, U.S.</option>
<option value="WLF">Wallis & Futuna</option>
<option value="ESH">Western Sahara</option>
<option value="YEM">Yemen</option>
<option value="ZMB">Zambia</option>
<option value="ZWE">Zimbabweernment / Zimbabwe</option>

                  </select>
                </div>
                 
                <input type="submit" value="Submit" class="btn btn-info btn-block">

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Component JavaScript`
)})
    },
    {
      inputs: ["$","alert"],
      value: (function($,alert){return(
$(function() {
    $('#select-country').selectize({    plugins: ['remove_button']
});

  $('#contacts').submit(function(e){
    e.preventDefault();

    alert('You have chosen the following countries: '+ JSON.stringify($('#select-country').val()));
  });
})
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### JS Libraries`
)})
    },
    {
      name: "$",
      inputs: ["require"],
      value: (async function(require)
{
  const $ = await require('jquery@^1.7.0');
  await require('selectize.js@0.12');
  return $;
}
)
    },
    {
      inputs: ["require"],
      value: (function(require){return(
require('bootstrap@4.1.3/dist/js/bootstrap').catch(() => window.bootstrap)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Stylesheets`
)})
    },
    {
      name: "style_selectize",
      inputs: ["html"],
      value: (function(html){return(
html`
<code>selectize.css</code>
<!--		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.8.5/css/selectize.css"> -->
<style>
/**
 * selectize.css (v0.8.5)
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

.selectize-control.plugin-drag_drop.multi > .selectize-input > div.ui-sortable-placeholder {
  background: #f2f2f2 !important;
  background: rgba(0, 0, 0, 0.06) !important;
  border: 0 none !important;
  visibility: visible !important;
  -webkit-box-shadow: inset 0 0 12px 4px #ffffff;
          box-shadow: inset 0 0 12px 4px #ffffff;
}

.selectize-control.plugin-drag_drop .ui-sortable-placeholder::after {
  content: '!';
  visibility: hidden;
}

.selectize-control.plugin-drag_drop .ui-sortable-helper {
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.selectize-dropdown-header {
  position: relative;
  padding: 5px 8px;
  background: #f8f8f8;
  border-bottom: 1px solid #d0d0d0;
  -webkit-border-radius: 3px 3px 0 0;
     -moz-border-radius: 3px 3px 0 0;
          border-radius: 3px 3px 0 0;
}

.selectize-dropdown-header-close {
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -12px;
  font-size: 20px !important;
  line-height: 20px;
  color: #303030;
  opacity: 0.4;
}

.selectize-dropdown-header-close:hover {
  color: #000000;
}

.selectize-dropdown.plugin-optgroup_columns .optgroup {
  float: left;
  border-top: 0 none;
  border-right: 1px solid #f2f2f2;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.selectize-dropdown.plugin-optgroup_columns .optgroup:last-child {
  border-right: 0 none;
}

.selectize-dropdown.plugin-optgroup_columns .optgroup:before {
  display: none;
}

.selectize-dropdown.plugin-optgroup_columns .optgroup-header {
  border-top: 0 none;
}

.selectize-control.plugin-remove_button [data-value] {
  position: relative;
  padding-right: 24px !important;
}

.selectize-control.plugin-remove_button [data-value] .remove {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: inline-block;
  width: 17px;
  padding: 2px 0 0 0;
  font-size: 12px;
  font-weight: bold;
  color: inherit;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  border-left: 1px solid #d0d0d0;
  -webkit-border-radius: 0 2px 2px 0;
     -moz-border-radius: 0 2px 2px 0;
          border-radius: 0 2px 2px 0;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.selectize-control.plugin-remove_button [data-value] .remove:hover {
  background: rgba(0, 0, 0, 0.05);
}

.selectize-control.plugin-remove_button [data-value].active .remove {
  border-left-color: #cacaca;
}

.selectize-control.plugin-remove_button .disabled [data-value] .remove:hover {
  background: none;
}

.selectize-control.plugin-remove_button .disabled [data-value] .remove {
  border-left-color: #ffffff;
}

.selectize-control {
  position: relative;
}

.selectize-dropdown,
.selectize-input,
.selectize-input input {
  font-family: sans-serif; 
  font-size: 13px;
  -webkit-font-smoothing: inherit;
  line-height: 18px;
  color: #303030;
}

.selectize-input,
.selectize-control.single .selectize-input.input-active {
  display: inline-block;
  cursor: text;
  background: #ffffff;
}

.selectize-input {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 100%;
  padding: 8px 8px;
  overflow: hidden;
  border: 1px solid #d0d0d0;
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
          border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.selectize-control.multi .selectize-input.has-items {
  padding: 6px 8px 3px;
}

.selectize-input.full {
  background-color: #ffffff;
}

.selectize-input.disabled,
.selectize-input.disabled * {
  cursor: default !important;
}

.selectize-input.focus {
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
}

.selectize-input.dropdown-active {
  -webkit-border-radius: 3px 3px 0 0;
     -moz-border-radius: 3px 3px 0 0;
          border-radius: 3px 3px 0 0;
}

.selectize-input > * {
  display: -moz-inline-stack;
  display: inline-block;
  *display: inline;
  vertical-align: baseline;
  zoom: 1;
}

.selectize-control.multi .selectize-input > div {
  padding: 2px 6px;
  margin: 0 3px 3px 0;
  color: #303030;
  cursor: pointer;
  background: #f2f2f2;
  border: 0 solid #d0d0d0;
}

.selectize-control.multi .selectize-input > div.active {
  color: #303030;
  background: #e8e8e8;
  border: 0 solid #cacaca;
}

.selectize-control.multi .selectize-input.disabled > div,
.selectize-control.multi .selectize-input.disabled > div.active {
  color: #7d7d7d;
  background: #ffffff;
  border: 0 solid #ffffff;
}

.selectize-input > input {
  max-width: 100% !important;
  max-height: none !important;
  min-height: 0 !important;
  padding: 0 !important;
  margin: 0 2px 0 0 !important;
  line-height: inherit !important;
  text-indent: 0 !important;
  background: none !important;
  border: 0 none !important;
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
  -webkit-user-select: auto !important;
}

.selectize-input > input:focus {
  outline: none !important;
}

.selectize-input::after {
  display: block;
  clear: left;
  content: ' ';
}

.selectize-input.dropdown-active::before {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  height: 1px;
  background: #f0f0f0;
  content: ' ';
}

.selectize-dropdown {
  position: absolute;
  z-index: 10;
  margin: -1px 0 0 0;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-top: 0 none;
  -webkit-border-radius: 0 0 3px 3px;
     -moz-border-radius: 0 0 3px 3px;
          border-radius: 0 0 3px 3px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.selectize-dropdown [data-selectable] {
  overflow: hidden;
  cursor: pointer;
}

.selectize-dropdown [data-selectable] .highlight {
  background: rgba(125, 168, 208, 0.2);
  -webkit-border-radius: 1px;
     -moz-border-radius: 1px;
          border-radius: 1px;
}

.selectize-dropdown [data-selectable],
.selectize-dropdown .optgroup-header {
  padding: 5px 8px;
}

.selectize-dropdown .optgroup:first-child .optgroup-header {
  border-top: 0 none;
}

.selectize-dropdown .optgroup-header {
  color: #303030;
  cursor: default;
  background: #ffffff;
}

.selectize-dropdown .active {
  color: #495c68;
  background-color: #f5fafd;
}

.selectize-dropdown .active.create {
  color: #495c68;
}

.selectize-dropdown .create {
  color: rgba(48, 48, 48, 0.5);
}

.selectize-dropdown-content {
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
}

.selectize-control.single .selectize-input,
.selectize-control.single .selectize-input input {
  cursor: pointer;
}

.selectize-control.single .selectize-input.input-active,
.selectize-control.single .selectize-input.input-active input {
  cursor: text;
}

.selectize-control.single .selectize-input:after {
  position: absolute;
  top: 50%;
  right: 15px;
  display: block;
  width: 0;
  height: 0;
  margin-top: -3px;
  border-color: #808080 transparent transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  content: ' ';
}

.selectize-control.single .selectize-input.dropdown-active:after {
  margin-top: -4px;
  border-color: transparent transparent #808080 transparent;
  border-width: 0 5px 5px 5px;
}

.selectize-control.rtl.single .selectize-input:after {
  right: auto;
  left: 15px;
}

.selectize-control.rtl .selectize-input > input {
  margin: 0 4px 0 -2px !important;
}

.selectize-control .selectize-input.disabled {
  background-color: #fafafa;
  opacity: 0.5;
}
</style>
`
)})
    },
    {
      name: "style_bootstrap",
      inputs: ["html"],
      value: (function(html){return(
html`
<code>bootstrap.css</code>
		<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootswatch/3.1.0/superhero/bootstrap.min.css">
`
)})
    }
  ]
};

const notebook = {
  id: "df5fec539a0ea090@115",
  modules: [m0]
};

export default notebook;
