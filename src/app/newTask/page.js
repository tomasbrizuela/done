import Header from "../../components/Header";
import { Button } from "../../components/ui/button";

export default function newTask() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-80 w-screen gap-4">
                <div>
                    <h1 className="text-4xl font-bold">Create your first tasks</h1>
                </div>
                <div>
                    <Button>Create</Button>
                </div>
            </div>
        </>
    );
}