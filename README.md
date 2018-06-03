# Pages
This mini js/css library enables someone to easily add simple SPA (single page application) functionality to a webpage.

## Sample
* <https://chrisbas.github.io/>

## Dependencies
* jQuery

## How to use
* Add the following CDN's to your html header:
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script src="https://rawgit.com/chrisBas/pages/master/pages.js"></script>
<link rel="stylesheet" href="https://rawgit.com/chrisBas/pages/master/pages.css">
```
* Add 'pages' and 'page' classes to html div tags as shown here:
```html
<div class="pages">
    <div class="page">
        Page One
    </div>
    <div class="page">
        Page Two
    </div>
    <div class="page">
        Page Three
    </div>
    <div class="page">
        Page Four
    </div>
</div>
<div>
    <button onclick="pg.prev()">Prev</button>
    <button onclick="pg.next()">Next</button>
</div>
```
* Navigate by using the following javascript calls, feel free to bind these to onclick events:

```javascript
pg.next() //goes to the next page
pg.prev() //goes to the previous page
pg.goto(index:Int) //goes to the specified page (0 to n-1 OR error)
```