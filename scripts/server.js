// Copyright (C) 2020 Omar Pino. All rights Reserved
'use strict';

import MainApp from './main.js';

// MAIN
(function Main() {

    $(document).ready( event => {

        let main = new MainApp();
        main.run();
    })
})();
