const addresses = [{id: 1, value: 'Nezalegnai',}, {id: 2, title: 'Mostovai'}]
export const addressRepository = {
    showAddresses() {
        return addresses
    },
    getAddressById(id:number){
        return addresses.find(a => a.id === id)
    }
}