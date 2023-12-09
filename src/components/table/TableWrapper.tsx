"use client"
import { FileType } from "@/type"
import React, { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { DataTable } from "./Table"
import { columns } from "./Colums"
import { useUser } from "@clerk/nextjs"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"
import { db } from "@/firebase"
import { Skeleton } from "../ui/skeleton"

interface TableWrapperProps {
  skeletonFiles: FileType[] | []
}

const TableWrapper: React.FC<TableWrapperProps> = ({ skeletonFiles }) => {
  const { user } = useUser()
  const [initialFiles, setInitialFiles] = useState<FileType[]>([])
  const [sort, setSort] = useState<"asc" | "desc">("desc")
  const [docs, loading, error] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        orderBy("timestamp", sort)
      )
  )

  useEffect(() => {
    if (!docs) return
    const files: FileType[] = docs.docs.map((doc) => ({
      id: doc.id,
      fileName: doc.data().fileName || doc.id,
      timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
      fullName: doc.data().fullName,
      downloadURL: doc.data().downloadURL,
      type: doc.data().type,
      size: doc.data().size,
    }))
    setInitialFiles(files)
  }, [docs])

  if (docs?.docs.length === undefined)
    return (
      <div className="flex flex-col">
        <Button variant={"outline"} className="ml-auto w-36 h-10 mb-5">
          <Skeleton className="h-5 w-full" />
        </Button>

        <div className="border rounded-lg">
          <div className="border-b">
            {skeletonFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center space-x-4 p-5 w-full"
              >
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-12 w-full" />
              </div>
            ))}

            {skeletonFiles.length === 0 && (
              <div className="flex items-center space-x-4 p-5 w-full">
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-12 w-full" />
              </div>
            )}
          </div>
        </div>
      </div>
    )

  return (
    <div className="flex flex-col space-y-5 pb-10">
      <Button
        className="ml-auto w-fit"
        variant={"outline"}
        onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
      >
        Sort By {sort === "desc" ? "Newest" : "Oldest"}
      </Button>
      <DataTable columns={columns} data={initialFiles} />
    </div>
  )
}

export default TableWrapper
