import { Suspense } from "react";
import Score from "./scoreClient/scoreClient";

export default function scorePage(){
    return(
        <Suspense fallback={<div>Loading score...</div>}>
            <Score/>
        </Suspense>
    );
}