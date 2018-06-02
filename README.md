# Pages
This mini js/css library enables someone to easily add simple SPA (single page application) functionality to a webpage.

## Sample
* <http://www.example.com>

## Dependencies
* jQuery

## How to use
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
* Navigate by using the following javascript calls:

```javascript
pg.next() //goes to the next page
pg.prev() //goes to the previous page
pg.goto(index:Int) //goes to the specified page (0 to n-1 OR error)
```