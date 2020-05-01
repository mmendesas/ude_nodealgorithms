## UDE **Node Algorithms**
:computer:
A list of some algorithms solved using nodejs

### Run the tests
1. At the terminal, run `jest reverse/test.js --watch`

### Debug statements

1. Add a `debugger` statement in your function
    ```javascript
    const reverse(str) {
        debugger; // just write this in the code
        return str.split('').reverse().join('');
    }
    ```
2. Call the function manually in current file
    ```js
    reverse('asdf');
    ```

3. At the terminal, run `node inspect index.js`
4. To continue execution of the file, press `c` then `enter`.
    ```sh
    debug> cont -> continue until the debugger word
    ```
5. To launch a `repl` session, type `repl` then `enter`. 
    ```sh
    > repl -> enter the debug repl (ctrl + c to exit)
    > str -> to see str value
    ```

### Notes

 - `common string questions`
    - what is the most common character in a string?
    - does string A have the same characters as string B (Is it an anagram)?
    - does the given string have any repeated characters in it?
- convert the `string` in a `object` representation
    - `hello there!` -> 
        ```json
            {
                "H": 1,
                "e": 3,
                "l": 2,
                "o": 1,
                " ": 1,
                "T": 1,
                "h": 1,
                "r": 1,
                "!": 1
            }
        ```
    - transform in an object
    ```js
        const string = 'Hello There!';
        const chars = {};
        for(let char of string){
            chars[char] = chars[char] + 1 || 1;
        }
    ```

