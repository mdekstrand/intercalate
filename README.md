`intercalate` is a small JavaScript library for inserting separators into arrays.
It can insert separators, a final separator, and can special-case two-element
arrays.

This is useful in conjunction with things like [hastscript][].

[hastscript]: https://github.com/syntax-tree/hastscript

To load:

    const intercalate = require('intercalate');

Then use with a single separator:

    > intercalate(['knuth', 'euler', 'hamilton'], ' and ')
    ['knuth', ' and ', 'euler', ' and ', 'hamilton']

An optional final separator:

    > intercalate(['My parents', 'Ayn Rand', 'God'], ', ', ' and ')
    ['My parents', ', ', 'Ayn Rand', ' and ', 'God']

But we really want to use an Oxford comma:

    > intercalate(['My parents', 'Ayn Rand', 'God'], ', ', ', and ')
    ['My parents', ', ', 'Ayn Rand', ', and ', 'God']

Which looks weird with two elements:

    > intercalate(['Bob', 'Larry'], ', ', ', and ')
    ['Bob', ', and ', 'Larry']

So `intercalate` lets you special-case two-item lists:

    > intercalate(['Bob', 'Larry'], ', ', ', and ', ' and ')
    ['Bob', ' and ', 'Larry']

And the pair separator is correctly ignored for longer lists:

    > intercalate(['My parents', 'Ayn Rand', 'God'], ', ', ', and ', ' and ')
    ['My parents', ', ', 'Ayn Rand', ', and ', 'God']

This lets us create gramatically correct lists that work as pairs and that do
not introduce disturbing family tries.