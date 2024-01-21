function test() {
    try {
        throw new Error(2);
    } catch (err) {
        return "catch"
    }
    finally {
        return "finally"
    }
}

console.log(test());