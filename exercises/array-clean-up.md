# Array Clean Up

Write a function that will clean up an array, and return the cleaned up value. The function **must not** modify the original array. Cleaning up of an array consists of removing the folowing values it they appear as elements in the array:

- `null`
- `undefined`
- `NaN`
- `""` *(empty string)*

i.e. if the array is `[NaN, 0, 15, false, -22, '',undefined, 47, null]`, the result of `cleanUp(array)` should be `[0, 15, false, -22, 47]`

**bonus** If the array has an array as an element, that element should be cleaned up too. if the array is  
`[1, NaN, 2, [3, Nan, 5] ]`, the result of `cleanUp(array)` should be `[1, 2, [3, 5] ]`. Note that this bonus would require techniques that we haven't covered yet, i.e. it's a hard bonus.
