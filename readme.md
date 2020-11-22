# range

> return an array of Number's, similar to such of a Python's


## install and use

``` sh
npm i range-2018.js
```

``` js
const range = require( 'range-2018.js' )
```

### range( count )
> N _integers_ starting at `0`

`range( 10 )` >> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

### range( start, stop )
> all _integers_ from X to Y (Y not included)

`range( 1, 10 )` >> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

`range( -5, 5 )` >> [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4 ]

### range( start, stop, step )
> all _numbers_ from X to Y (Y not included), with Z as a distance

`range( 1, 10, 2 )` >> [ 1, 3, 5, 7, 9 ]

`range( -2, 0, 0.3 )` >> [ -2, -1.7, -1.4, -1.1, -0.8, -0.5, -0.2 ]


## source code
``` js
const ceil_abs = N => Math.ceil( Math.abs( N ) )

module.exports = exports = ( cnt_or_start = 0, stop = null, step = 1 ) =>
    ( null === stop )
 && [...Array( cnt_or_start ).keys( )]

 || [...Array( ceil_abs( ( stop - cnt_or_start ) / step ) )]
        .map( ( _, i ) => cnt_or_start + i * step )
```


## mirrors
- https://npmjs.com/package/range-2018.js
- https://github.com/dym-sh/range
- https://gitlab.com/dym-sh/range
- https://dym.sh/range
- hyper://30b7e7fce98d9dd4def2d389b480c73fbe14a1262b46e6705b5476e1a367639d /[?](https://beakerbrowser.com)


## license
[mit](./license)
