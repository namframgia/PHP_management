export default {
    addWorkSpace(context, data) {
        axios.post('/workspaces', {
            name: data.name
        })
        .then(response => {
            
        })
        .catch(error => {
            console.log(error)
        })
    }
}
