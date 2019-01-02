/* Copyright 2018 AirMap, Inc.

Licensed under the Apache License, Version 2.0 (the License);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an AS IS BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */

export const defaultOptions = {
    baseJurisdictionSourceUrl: 'https://api.airmap.com/tiledata/v1/base-jurisdiction/{z}/{x}/{y}',
    enableRecommendedRulesets: false,
    mapStylesUrl: 'https://cdn.airmap.com/static/map-styles',
    mapStylesVersion: '0.8.5',
    overrideRulesets: null,
    preferredRulesets: null,
    rulesetSourceUrl: 'https://api.airmap.com/tiledata/v1',
    ruleApiUrl: 'https://api.airmap.com/rules/v1/rule',
    theme: 'light'
}

export const config = {
    "airmap": {
        "api_key": 'AIRMAP_API_KEY'
    },
    "auth0": {
        "client_id": "",
        "callback_url": ""
    },
    "azuremaps": {
        "access_token": 'AZURE_ACCESS_TOKEN'
    }
}
