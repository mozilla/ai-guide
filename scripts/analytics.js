/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

var dntEnabled = require('@mozmeao/dnt-helper');

// Ensure window.dataLayer is always defined, even if GTM might not have loaded.
window.dataLayer = window.dataLayer || [];


if(!dntEnabled()) {
    
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    const gaScript = document.createElement('script');
    gaScript.async = 'true';
    gaScript.type = 'text/javascript';
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-74DYP283GP';
    const pageHead = document.getElementsByTagName('head')[0];
    pageHead.append(gaScript);

    window.gtag('js', new Date());
    window.gtag('config', 'G-74DYP283GP');
}