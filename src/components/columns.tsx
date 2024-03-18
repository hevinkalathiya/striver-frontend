"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Table = {
    username: string;
    code: string;
    codeLanguage: string;
    std: string;
};

export const columns: ColumnDef<Table>[] = [
    {
        accessorKey: "username",
        header: "User Name",
    },
    {
        accessorKey: "code",
        header: "Code",
    },
    {
        accessorKey: "codeLanguage",
        header: "Code Language",
    },
    {
        accessorKey: "std",
        header: "Standard Input",
    },
    {
        accessorKey: "createdAt",
        header: "Created AT",
    },
];
