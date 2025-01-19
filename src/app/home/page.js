import Header from "../../components/Header";
import GetUrl from "../../Utils/geturl";


export default function homePage(){
    return (
        <>
        <GetUrl>
        <Header/>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h1>
                    Your tasks
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p>Complete them before the day ends</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            </div>
        </div>
        </GetUrl>
        </>
    );
}