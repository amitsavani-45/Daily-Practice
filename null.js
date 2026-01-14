/* why typeof null is an object?

It's a bug in the language that has been there since the beginning, and it's kept for backward compatibility

In JavaScript's early days (1995), values were tagged internally using type tags (binary representations).

These tags helped the engine identify what type of value was.

For example, the tag for objects was 000 And guess what? The value for null was also 00000000.

So when typeof checked the internal representation of null, it saw the 000 tag and returned object

*/