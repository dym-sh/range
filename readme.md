# JS range( 2018 )
Returns an array of `Number`s.
Similar to such of a Python's.

## Install
``` sh
npm i range-2018.js
```

## Declare
``` js
const range = require( 'range-2018.js' )
```

## Use
### range( count )
N _integers_ starting at `0`

> `range( 10 )` >> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

### range( start, stop )
all _integers_ from X to Y (Y not included)

> `range( 1, 10 )` >> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

> `range( -5, 5 )` >> [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4 ]

### range( start, stop, step )
all _numbers_ from X to Y (Y not included), with Z as a distance

> `range( 1, 10, 2 )` >> [ 1, 3, 5, 7, 9 ]

> `range( -2, 0, 0.3 )` >> [ -2, -1.7, -1.4, -1.1, -0.8, -0.5, -0.2 ]


## Code
``` js
const ceil_abs = N => Math.ceil( Math.abs( N ) )

module.exports = exports = ( cnt_or_start = 0, stop = null, step = 1 ) =>
    ( null === stop )
 && [...Array( cnt_or_start ).keys( )]

 || [...Array( ceil_abs( ( stop - cnt_or_start ) / step ) )]
        .map( ( _, i ) => cnt_or_start + i * step )
```
# range

> <DESCRIPTION>


<a href='./preview.png'><img height=100 border=2 align='right' alt='preview' src='preview.png'></a>
## preview
- [preview.html](./preview.html)
- https://codepen.io/dym-sh/pen/<TBD>/left/?editors=0100


## mirrors
- https://github.com/dym-sh/range
- https://gitlab.com/dym-sh/range
- https://dym.sh/range
- hyper://<TBD> /[?](https://beakerbrowser.com)


## license
[mit](./license)
