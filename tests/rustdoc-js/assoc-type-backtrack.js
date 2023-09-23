// exact-check

const EXPECTED = [
    {
        'query': 'mytrait, mytrait2 -> T',
        'correction': null,
        'others': [
            { 'path': 'assoc_type_backtrack::MyTrait', 'name': 'fold' },
            { 'path': 'assoc_type_backtrack::Cloned', 'name': 'fold' },
        ],
    },
    {
        'query': 'mytrait<U>, mytrait2 -> T',
        'correction': null,
        'others': [
            { 'path': 'assoc_type_backtrack::MyTrait', 'name': 'fold' },
            { 'path': 'assoc_type_backtrack::Cloned', 'name': 'fold' },
        ],
    },
    {
        'query': 'mytrait<Item=U>, mytrait2 -> T',
        'correction': null,
        'others': [
            { 'path': 'assoc_type_backtrack::MyTrait', 'name': 'fold' },
            { 'path': 'assoc_type_backtrack::Cloned', 'name': 'fold' },
        ],
    },
    {
        'query': 'mytrait<T>, mytrait2 -> T',
        'correction': null,
        'others': [],
    },
    {
        'query': 'mytrait<Item=T>, mytrait2 -> T',
        'correction': null,
        'others': [],
    },
    {
        'query': 'mytrait<T> -> Option<T>',
        'correction': null,
        'others': [
            { 'path': 'assoc_type_backtrack::MyTrait', 'name': 'next' },
        ],
    },
    {
        'query': 'mytrait<Item=T> -> Option<T>',
        'correction': null,
        'others': [
            { 'path': 'assoc_type_backtrack::MyTrait', 'name': 'next' },
        ],
    },
    {
        'query': 'mytrait<U> -> Option<T>',
        'correction': null,
        'others': [
            { 'path': 'assoc_type_backtrack::Cloned', 'name': 'next' },
        ],
    },
    {
        'query': 'mytrait<Item=U> -> Option<T>',
        'correction': null,
        'others': [
            { 'path': 'assoc_type_backtrack::Cloned', 'name': 'next' },
        ],
    },
];
