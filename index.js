"use strict";

var $ = require('jquery'),
    _ = require('underscore'),
    i18next = require('i18next'),
    i18nextJquery = require('jquery-i18next'),
    xhr = require('i18next-xhr-backend');

var LOCALE = 'en-US';

// Initialize Internationalization
var options = {
        debug: true,
        lng: LOCALE,
        fallbackLng: 'en',
        backend: {
            loadPath: 'locales/{{lng}}/translation.json'
        }
    },
    callback = function() {
        i18nextJquery.init(i18next, $);
        $('.i18n').localize();
    };

i18next
    .use(xhr)
    .init(options, callback);
