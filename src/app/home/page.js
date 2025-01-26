import { SquareDashed } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import PopUp from '../../components/customComponents/PopUp'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


export default function homePage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center flex-1 gap-4 mt-10">
                <div className="flex flex-col justify-center items-start w-11/12">
                    <h1 className="text-4xl font-bold">
                        Your tasks
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-start w-11/12">
                    <p className="text-gray-600">Complete them before the day ends</p>
                </div>
                <div className="flex flex-col justify-start items-start w-11/12">
                    <div className="flex flex-row justify-center items-center w-6/12 gap-2">
                        <Input placeholder="Create a task" type="text"></Input>
                        <PopUp></PopUp>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-11/12">
                    <Input placeholder="Search tasks"></Input>
                </div>
                <div className="flex flex-col justify-center items-start border border-e-gray-200 rounded-lg w-11/12">
                    <Table className="" >
                        <TableCaption>A list of all your tasks.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead >Task</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-start">Assign</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">INV001</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-start">$250.00</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="icon" className="shadow-none">
                                        <SquareDashed />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}