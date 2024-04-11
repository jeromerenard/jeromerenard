import Work from "./work"
import Trust from "./trust"

export  default function Test(){

    return(
        <main className="flex  flex-col align-items-center justify-center">
            <div className="sticky top-0 h-screen overflow-hidden">
                <Trust/>
            </div>
            <div className="z-10">
                <Work/>
            </div>
        </main>
        
    )
}

