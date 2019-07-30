## UDE **Node Algorithms**

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