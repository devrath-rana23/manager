# Default Action Creator Rules (For synchronous)
1. Action creators are functions
2. Must return an action
3. An action is an object with a 'type' property

# Redux thunk is installed now Action Creator Rules (For asynchronous)
1. Action creators are functions
2. Must return an function
3. This function will be called with 'dispatch'