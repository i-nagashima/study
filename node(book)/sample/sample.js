const price = {
    value: 100,
    get withTax() {
        return Math.floor(this.value * 1.1);
    },
    set withTax(withTax) {
        this.value = Math.ceil(withTax / 1.1);
    }
}