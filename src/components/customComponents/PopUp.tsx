import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Calendar } from "@/components/ui/calendar"
import SelectUser from "./SelectUser"


export default function PopUp() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="default">Add Task</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">New Tasks</h4>
                        <p className="text-sm text-muted-foreground">
                            Describe your new to-do
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="width">Title</Label>
                            <Input
                                id="width"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxWidth">Description</Label>
                            <Input
                                id="maxWidth"
                                className="col-span-2 h-8"
                                type="text"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="height">Deadline</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="col-span-2">Click to select date</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <Calendar></Calendar>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="maxHeight">Assign to</Label>
                            <SelectUser />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}