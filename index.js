'use strict';

exports.register = function () {
    const plugin = this;
    plugin.load_http_ini();
}

exports.load_http_ini = function () {
    const plugin = this;

    plugin.cfg = plugin.config.get('http.ini', {
        booleans: [
            '+enabled',               // plugin.cfg.main.enabled=true
            '-disabled',              // plugin.cfg.main.disabled=false
            '+feature_section.yes'    // plugin.cfg.feature_section.yes=true
        ]
    },
    function () {
        plugin.load_example_ini();
    });
}
