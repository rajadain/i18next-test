"use strict";

var $ = require('jquery'),
    _ = require('underscore'),
    i18next = require('i18next'),
    i18nextJquery = require('jquery-i18next'),
    xhr = require('i18next-xhr-backend'),
    sprintf = require('i18next-sprintf-postprocessor');

var LOCALE = 'fr-FR';

// Initialize Internationalization
var options = {
        debug: true,
        lng: LOCALE,
        nsSeparator: false,
        keySeparator: false,
        fallbackLng: 'en',
        overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
        backend: {
            loadPath: 'locales/{{lng}}/translation.json'
        }
    },
    callback = function() {
        i18nextJquery.init(i18next, $);
        $('.i18n').localize();

        $('#sprintf').text(i18next.t(
            '%d times %d is %d', 10, 5, 50
        ));
    };

i18next
    .use(xhr)
    .use(sprintf)
    .init(options, callback);
