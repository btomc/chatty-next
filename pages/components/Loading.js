import { Circle } from 'better-react-spinkit'

function Loading() {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh'}}>
            <div>
                <img 
                    src="/logo.png" 
                    alt="logo"
                    height={200}
                    style={{ marginBottom: 10 }}
                />
                <Circle color='#1689cc' size={60}/>
            </div>
        </center>
    )
}

export default Loading
