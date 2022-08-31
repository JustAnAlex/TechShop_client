function* uniqueId() {
    let index = 0;
    while(true) {
        yield index;
        index++;
    }
}

const generic = uniqueId()
const getUniqueId = () => generic.next().value

export default getUniqueId