Siegmeyer2
==========

Siegmeyer2 is a static SMACSS boilerplate using Susy grids, Siegmeyer typographic rhythm, and Gulp



### Install

#####Yeoman
A yeoman generator is available [here](https://github.com/tbredin/generator-siegmeyer2)

#####Manual install

Node modules:     
`npm install`      

Ruby gems:         
`bundle`   


Front end dependancies:       
`bower install`        



### Watch      

Boot up watch server with gulp:        
`gulp watch`    



### Using the baseine grid

Type can be set to a different scale at each breakpoint. Line height defaults to twice the body font-size
```SCSS
// base/_variables.scss
// Root font-sizes for each breakpoint. Set to half desired line-height of body text.
$rootsizes: (
    break-0: 13,   // 26px line-height body text
    break-1: 15,   // 30px line-height body text
    break-2: 17,   // 34px line-height body text
);
```

To set up new typefaces, provide some font info:

```SCSS
// base/_variables.scss
$type: (
    font-family: 'Helvetica, Arial, sans-serif',
    regular: normal,
    bold: bold,
    italic: italic,
    cap-height: 0.6 // tweak this manually until type sits on baseline. usually between 0.5 and 0.8
);
```
You can access this info with the following functions:
```SCSS
selector {
    font-family: font-family-of($type);
    font-weight: bold-of($type); // or regular-of($type)
    font-style:  italic-of($type);
}
```

To set type size, line height, top and bottom spacing, you must provide the font variable in conjuction with the `type` mixin:
```SCSS
@include type($font: $type, $fontsize: 1.25rem, $lineheight: 2, $leader: 1, $trailer: 2);
```
Line height, leader (padding by default), trailer (margin by default) are in rems. 1 baseline unit = 1rem



### Using susy grids in Siegmeyer

Customise your breakpoints as follows: 

```SCSS
// base/_variables.scss
// responsive grid settings
// column number at each breakpoint
$break-0-cols: 4;
$break-1-cols: 8;
$break-2-cols: 12;

// map for flexible retrieval of breakpoint info
$breakpoint-map: (
    break-0: (
        cols:       $break-0-cols,
        start:      0px,
        max:        100%,
        layout:     $break-0-cols ($column-width 0px),
        size:       map-get($rootsizes, break-0)
    ),
    break-1: (
        cols:       $break-1-cols,
        start:      767px,
        max:        100%,
        layout:     $break-1-cols ($column-width 0px),
        size:       map-get($rootsizes, break-1)
    ),
    break-2: (
        cols:       $break-2-cols,
        start:      1280px,
        max:        100%,
        layout:     $break-2-cols ($column-width 0px),
        size:       map-get($rootsizes, break-2)
    ),
);
```
Use Siegmeyer's `breakpoint-layout` mixin to apply your styles:

```SCSS
.selector {
    // Siegmeyer mixin
    @include breakpoint-layout(break-1) { 
        // use susy mixins like normal
        margin-left: span(1 of 4); 
        width: span(3);
    }
}
 ```



###Roadmap      

- Nicer HTML page / defaults
- Better Grid/ Baseline Documetation
- Cleaner Gulpfile & build setup
