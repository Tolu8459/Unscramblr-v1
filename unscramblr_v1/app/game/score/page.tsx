import { Suspense } from "react";
import Score from "./scoreClient/scoreClient";
import BackgroundWords from "../backgroundWords/BackgroundWords";

export default function scorePage(){
    return(
        <div>
            
            <Suspense fallback={<div>Loading score...</div>}>
                <Score/>
            </Suspense>
        </div>
    );
}