import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { User } from "lucide-react"

export default function SelectUser() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="List of Users" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">
                    <div className="flex flex-row justify-between gap-2 w-full items-center">
                        <User className="w-5 h-5"></User>
                        <p>Tomás B.</p>
                    </div>
                </SelectItem>
                <SelectItem value="dark">Camila S.</SelectItem>
                <SelectItem value="system">Admin</SelectItem>
            </SelectContent>
        </Select>
    )
}