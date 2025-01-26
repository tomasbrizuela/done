import { Button } from "@/components/ui/button"
import ChangeThemeButton from '@/components/ThemeButton';
import Link from "next/link";

export default function Header() {

    return (
        <>
            <div className="flex flex-row justify-between items-center p-3 w-full">
                <div>
                    <Link href={'/'}>
                        <h1 className="font-bold text-3xl">done.</h1>
                    </Link>
                </div>
                <div className="flex flex-row gap-3">
                    <Link href={'/login'}>
                        <Button className="bg-white text-black hover:bg-slate-200 border-1" >Log in</Button>
                    </Link>
                    <Link href={'/signup'}>
                        <Button className="bg-black text-white hover:bg-slate-200">Start</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}