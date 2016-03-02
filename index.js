"use strict";

var $ = require('jquery'),
    _ = require('underscore'),
    i18next = require('i18next'),
    xhr = require('i18next-xhr-backend');

// Initialize Internationalization
var options = {
        debug: true,
        lng: 'en-US',
        fallbackLng: 'en',
        backend: {
            loadPath: 'locales/{{lng}}/translation.json'
        }
    },
    callback = function() {
        $('#container').after(i18next.t('welcomeMessage'));
    };

i18next
    .use(xhr)
    .init(options, callback);
