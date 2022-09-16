function* uniqueId() {
    let index = 0;
    while(true) {
        yield index;
        index++;
    }
}

const generic = uniqueId()
const getUniqueId = (): number => generic.next().value || 0

export default getUniqueId