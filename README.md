# Burger-MySQL-Heroku [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

---

## Table of Contents

---

### [Description](#Description)

### [Screenshots](#Screenshots)

### [Installation](#Installation)

### [License](#License)

### [Questions](#Questions)

### [Github](#Github)

---

### <a name="Description"></a>Description

This simple application was created in order to tie in my knowledge of MySQL, Heroku, and Handblebars together. Within the database exists one table for each burger, with columns for the id, name, and devoured state of the burger. The user is able to add their own burgers they'd like to eat, which will then be added to the MySQL database. Users are also able to eat a burger that exists within the database, which will change its devoured state to true.

The project is deployed [here](https://burger-mysql-heroku.herokuapp.com/)

### <a name="Screenshots"></a>Screenshots

[Landing_Page](https://github.com/jamespericles/Burger-MySQL-Heroku/blob/master/screenshots/Landing_Page.png)

### <a name="Installation"></a>Installation

After downloading the repo, within your console run `npm i` to install all necessary files. Navigate to the database folder (`db`) and used `mysql -u root -p` and then `source schema.sql`, `source seeds.sql` to create your own database. From there, `nodemon server.js` in order to open the server locally. Otherwise, the project is also deployed at WIP

### <a name="License"></a>License

MIT License

Copyright (c) 2020 James Pericles
  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
  
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### <a name="Questions"></a>Questions

I can be reached at jamesspericles@gmail.com with any questions regarding this project.

### <a name="Github"></a>Github

https://github.com/jamespericles,
https://github.com/jamespericles/Burgers-MySQL-Heroku
