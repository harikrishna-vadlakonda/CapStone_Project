import Axios from 'axios'


function SendDataToServer(url,data) {
  alert("servercall")
 
  return  Axios.post(url,data)
}

export default SendDataToServer 