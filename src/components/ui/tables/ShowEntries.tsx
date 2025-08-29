import Select from "@/components/form-elements/select/Select";

interface ShowEntriesProps {
  rowsPerPage: number;
  rowsPerPageOptions: number[];
  handleRowsPerPageChange: (value: string) => void;
}

export default function ShowEntries({
  rowsPerPage,
  rowsPerPageOptions,
  handleRowsPerPageChange,
}: ShowEntriesProps) {
  const options = rowsPerPageOptions.map((opt) => ({
    value: String(opt),
    label: String(opt),
  }));

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="rows-per-page-select"
        className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
      >
        Per page
      </label>
      <Select
        id="rows-per-page-select"
        options={options}
        value={String(rowsPerPage)}
        onChange={handleRowsPerPageChange}
        className="w-20 h-9 text-sm"
        placeholder=""
      />
    </div>
  );
}
