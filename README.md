[![Maintainability](https://api.codeclimate.com/v1/badges/fa9fa266a0ff04227f53/maintainability)](https://codeclimate.com/github/rainstr7/magic/maintainability)
![Node CI](https://github.com/rainstr7/magic/workflows/Node%20CI/badge.svg)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fa9fa266a0ff04227f53/test_coverage)](https://codeclimate.com/github/rainstr7/magic/test_coverage)
<h3>magic.js</h3>

Реализуйте и экспортируйте по умолчанию функцию, которая работает следующим образом:

<p>Принимает на вход любое число аргументов и возвращает функцию, которая, в свою очередь, принимает на вход любое количество аргументов и так до бесконечности.
Результат вызова этой функции при проверке на равенство должен быть равен сумме всех аргументов всех подфункций.</p>

Пример
<ul>
<li>magic() == 0; // true</li>
<li>magic(5, 2, -8) == -1; // true</li>
<li>magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true</li>
 <li>magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true</li>
</ul>
