## Prefix code

### Statement

Given a fixed set of characters, a code is a table that gives the encoding to use for each character.

A prefix code is a code with the prefix property, which is that there is no character with an encoding that is a prefix (initial segment) of the encoding of another character.

Your goal is to decode an encoded string using the given prefix code, or say that is not possible.

Example of encoding.
Given the string `"abracadabra"` and the prefix code:
- a -> 1 
- b -> 001
- c -> 011
- d -> 010
- r -> 000

The resulting encoding is: `10010001011101010010001`

Thus, if you are given the code above and the input `10010001011101010010001`, you should output the string `"abracadabra"`.

With the same prefix code, if the input is `0000`, then you should tell that there is an error at index 3. Indeed, the first three characters of this input can be decoded to give an 'r', but that leaves 0, which cannot be decoded.

### Solution explanation

This is a classic problem in code theory, regarding decoding of a sequence, knowing a word/block-word/character dictionary

The solution is pretty straightforward, and is based on a particularity of prefix-free codes: no string is a prefix of another.

This means that a simple search and replace strategy will work.

We will work on a substring that goes from the currentIndex - initialized with 0 - to the end of the code string; 
We then try all keys to find a match. Depending on whether we find a match, we either error out, or increment the currentIndex and append the character to the end of
the solution and then continue to the end.

This naive solution is not optimal, but it's short and gets the job done.




