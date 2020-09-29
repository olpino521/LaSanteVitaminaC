// Copyright (C) 2020 Omar Pino. All rights Reserved
'use strict';

export default class MainApp {
    constructor() {
        this.userData = [];
        //Create table using https and getting document from html
        this.getData();
    }


    run() {
    }

    getData() {
        $.get('https://ltsonar-33e3d.firebaseio.com/users.json')
        .then((data) => {
            this.userData = Object.values(data);
            this.generateMap();
        });
    }

    //Will generate the different maps needed for the game to run
    generateMap() {
        let $board = $(`#main`);
        let tableMark = `<table id="table" class="table table-dark">`;
        //Addin head to table
        tableMark += `  <thead>
                            <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefono</th>
                            </tr>
                        </thead>`;
        tableMark += `<tbody>`
        for (let row = 0; row < this.userData.length; row++) {

            tableMark += `<tr>`;
            tableMark += `<td>${this.userData[row].user}</td>`
            tableMark += `<td>${this.userData[row].email}</td>`
            tableMark += `<td>${this.userData[row].phone}</td>`
            tableMark += `</tr>`;
        }
        tableMark += `</tbody></table>`;
        $board.html(tableMark);
    }
}