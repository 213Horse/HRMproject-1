import { SyncLoader } from "react-spinners";



export const Loading = () => {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
        <div style={{margin: 'auto',}}>
            <SyncLoader color="#36d7b7" />
            <p style={{marginRight: '20px'}}>Loading...</p>
        </div>
    </div>  
   
  )
}


export default Loading;
