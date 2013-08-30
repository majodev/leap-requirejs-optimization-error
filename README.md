<h1>leap-requirejs-optimization-error</h1>
It seems like <a href="https://github.com/leapmotion/leapjs">leapjs</a> and <a href="https://github.com/jrburke/r.js/">r.js</a> don't wanna play together. This project demonstrates an optimization issue with leapjs. Code works during development, but optimized code fails. Any help appreciated!

UPDATE: Finally resolved. Please visit <a href="https://github.com/jrburke/r.js/issues/514">leapjs issue ticket</a>!

<h2>Setup</h2>
`npm install -d`

<h2>Building</h2>
optimizing leap.js the right way: `node scripts/build-right.js`
optimizing leap.js the wrong way: `node scripts/build-wrong.js`

<h2>Links</h2>
<a href="https://github.com/leapmotion/leapjs/issues/97">r.js issue ticket</a>
<a href="https://github.com/jrburke/r.js/issues/514">leapjs issue ticket</a>

<h2>Copyright</h2>
MIT license - see LICENSE.md for further information -
(c) 2013 Mario Ranftl (<a href="http://www.majodev.com">majodev</a>).