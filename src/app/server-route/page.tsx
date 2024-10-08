import { serverSideFunction } from "@/utils/server-utils"
import ImageSlider from "../components/ImageSlider"
//import { clientSideFunction } from "@/utils/client-utils"

export default function ServerRoute() {
    console.log("Server Route Renderd")
    const result = serverSideFunction()
    //const clientResult = clientSideFunction()
    return (
        <>
            <h1>Server</h1>
            <p>{result}</p>
            {/* {clientResult} */}
            <ImageSlider />
        </>
    )
}

//we would not see the result of browsers console cause it is only serve side component  it would be appear in terminal only