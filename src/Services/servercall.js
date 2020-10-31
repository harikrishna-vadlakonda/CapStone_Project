import Axios from 'axios'


function GetServerData(url,data) {
  alert("servercall")
  alert(data)
  return  Axios.post(url,data)
}

export default GetServerData