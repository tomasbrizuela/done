import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Header() {

    return (
        <>
            <div className="flex flex-row justify-between items-center p-3">
                <div>
                    <Link href={'/'}>
                        <h1 className="font-bold text-3xl">done.</h1>
                    </Link>
                </div>
                <div className="flex flex-row gap-5">
                    <Link href={'/login'}>
                        <Button className="bg-white text-black hover:bg-slate-200 border-1" >Log in</Button>
                    </Link>
                    <Link href={'newTask'}>
                        <Button className="bg-black hover:bg-slate-400">Start</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}