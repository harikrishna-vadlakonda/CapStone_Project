import Axios from 'axios'

function GetDataFromServer(url) {
   
    return Axios.get(url)
}
export default GetDataFromServer