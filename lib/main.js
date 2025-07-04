/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isComplex64Array = require( '@stdlib/assert-is-complex64array' );
var hasSameValues = require( '@stdlib/array-base-assert-has-same-values' );


// MAIN //

/**
* Tests if two arguments are both Complex64Arrays and have the same values.
*
* @param {*} v1 - first value
* @param {*} v2 - second value
* @returns {boolean} boolean result
*
* @example
* var Complex64Array = require( '@stdlib/array-complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = isSameComplex64Array( x, y );
* // returns true
*
* @example
* var Complex64Array = require( '@stdlib/array-complex64' );
*
* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex64Array( [ 1.0, 2.0, 4.0, 4.0 ] );
*
* var out = isSameComplex64Array( x, y );
* // returns false
*/
function isSameComplex64Array( v1, v2 ) {
	return ( isComplex64Array( v1 ) && isComplex64Array( v2 ) && hasSameValues( v1, v2 ) );
}


// EXPORTS //

module.exports = isSameComplex64Array;
