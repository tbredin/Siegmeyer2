Siegmeyer2
==========

Siegmeyer2 is a static SMACSS boilerplate using Susy grids, Siegmeyer typographic rhythm, and Gulp



### Install

#####Yeoman generator
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



### Production

Build into `dist` directory with gulp:    
`gulp build`     
CSS, JS, and images will be concatenated & minified, PNG fallbacks for SVGs will be generated, critical path CSS will be inlined, and small images (<14kb) will be base64 encoded. 



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

To set type size, line height, padding, and scaling, you must provide the font variable in conjuction with the `type` mixin:
```SCSS
@include type($font: $type, $fontsize: 1.25rem, $lineheight: 2, $leader: 1, $trailer: 2, $scale-ratio: 2);
```
Line height, padding leader & trailer are in rems. 1 baseline unit = 1rem

The `$scale-ratio` parameter allows you to easily set how much scaling of `$fontsize` to apply to your type across multiple breakpoints (useful for large headings). Just enter the full scaling you desire for the final (widest) breakpoint, and Siegmeyer will automatically calculate intermediary scaling for any breakpoints in between, while maintaining rhythm. 

For example; the above mixin will initially set the type to 1.25rem, and then incrementally scale up on each breakpoint in between until it reaches 2.5rem for the widest breakpoint (1.25rem * 2).

### Susy Toolkit   
[Susy](http://susy.oddbird.net/) is used for most layout and media queries in Siegmeyer 2.   
You should familiarise yourself with the [Susy docs](http://susydocs.oddbird.net/en/latest/)  

### Using Susy grids in Siegmeyer
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
    // Siegmeyer breakpoint-layout mixin
    @include breakpoint-layout(break-1) { 
        // use Susy mixins like normal
        margin-left: span(1 of 4); 
        width: span(3);
    }
}
 ```



###Roadmap      

- Nicer HTML page / defaults
