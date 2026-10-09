//                        Common String Expression
//                       ---------------------------


// To manipulate text
// These are not expressions.These are just


// $concat:- Combine multiple strings into one.

//  syntax:- 
//  {$concat:['$firstName','','$lastName']}


// $toUpper:- Converts string into uppercase
//  syntax:-
// {$toUpper:'$name'}

// $toLower:- Converts string into lowercase
//  syntax:-
// {$toLower:'$name'}


// $substrCP:- extract part of a string using start index and length
// syntax:-
//  {$substrCP:['$name',0,3]}

// $subLenCP:- returns the length of string
//  syntax:-
//  {$subLenCP:'$name'}


// $trim:- remove spacesfrom begining and end of a string
// syntax:-
// {$trim:{input:'$name'}}


// $replaceOne:- replaces of a first occurence of substring
// syntax:-
//    {$replaceOne:{input:'$text',find:'old',replacement:'new'}}

// $replaceAll :- replaces all occurences of substring
// syntax:-
//  {$replaceAll:{input:'$text',find:'old',replacement:'new'}}