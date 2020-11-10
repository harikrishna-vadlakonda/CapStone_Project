import Axios from 'axios'


function SendDataToServer(url,data) {
 
 
  return  Axios.post(url,data)
}

export default SendDataToServer 