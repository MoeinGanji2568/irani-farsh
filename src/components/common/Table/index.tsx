import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ReactNode, useMemo } from "react";

const ProfileTable = ({
  isHeadLess = false,
  data,
  columns,
}: {
  isHeadLess?: boolean;
  data: any[];
  columns: any[];
}) => {
  // colum Obj Sample
  //   {
  //     id;
  //     accessorKey;
  //     accessorFn;
  //     accessorFn;
  //     columns;
  //     header;
  //     footer;
  //     cell;
  //     meta;
  //   }

  const MemoriedData = useMemo(() => data, [data]);
  const MemoriedColumns = useMemo(() => columns, [columns]);

  const { getHeaderGroups, getRowModel, getTotalSize } = useReactTable({
    data: MemoriedData,
    columns: MemoriedColumns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  return (
    <div className="mx-auto w-full select-none rounded-3xl bg-white px-3 py-2">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <table
          className="mx-auto w-[98%]"
          style={{
            borderSpacing: "0",
          }}
          width={getTotalSize()}
        >
          {!isHeadLess && (
            <thead>
              {getHeaderGroups().map((headerGrp) => {
                return (
                  <tr
                    key={headerGrp.id}
                    className="border-b-[2px] border-solid border-tablehead/5 text-sm text-tablehead"
                  >
                    {headerGrp.headers.map((td) => {
                      return (
                        <td
                          width={td.getSize()}
                          className="h-12 text-center text-sm font-medium capitalize"
                          key={td.id}
                        >
                          <div className="group relative flex items-center justify-center">
                            {td.column.columnDef.header as ReactNode}
                            <div
                              onMouseDown={td.getResizeHandler()}
                              onTouchStart={td.getResizeHandler()}
                              className={`absolute right-1 hidden h-[90%] w-[7px] cursor-col-resize rounded-lg bg-ProfileDelftBlue/20 group-hover:block ${
                                td.column.getIsResizing() &&
                                "bg-ProfileDelftBlue/80"
                              }`}
                            ></div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </thead>
          )}
          <tbody>
            {getRowModel().rows.map((row) => {
              return (
                <tr
                  key={row.id}
                  style={{
                    borderRadius: 20,
                  }}
                  className="w-full border-b-[2px] border-solid border-tablehead/5 text-sm last:border-transparent hover:bg-tablehead/10"
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        width={cell.column.getSize()}
                        className="relative h-12 rounded text-center"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden">
        {getRowModel().rows.map((row) => {
          return (
            <div
              key={row.id}
              className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              {row.getVisibleCells().map((cell, cellIndex) => {
                const column = cell.column.columnDef;
                return (
                  <div
                    key={cell.id}
                    className={`flex items-center justify-between py-2 ${
                      cellIndex !== 0 ? "border-t border-gray-100" : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-gray-600">
                      {column.header as string}:
                    </span>
                    <div className="text-sm text-gray-900">
                      {flexRender(column.cell, cell.getContext())}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileTable;
