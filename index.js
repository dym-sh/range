'use strict'

const ceil_abs = N => Math.ceil( Math.abs( N ) )

module.exports = exports = ( cnt_or_start = 0, stop = null, step = 1 ) =>
    ( null === stop )
 && [...Array( cnt_or_start ).keys( )]

 || [...Array( ceil_abs( ( stop - cnt_or_start ) / step ) )]
        .map( ( _, i ) => cnt_or_start + i * step )
