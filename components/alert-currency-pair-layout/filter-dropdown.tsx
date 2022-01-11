import AlertFilterDropdown from "../alert-filter-dropdown";

const FilterDropdown = () => {
  return (
    <div className="ml-auto text-sm mt-6">
      <AlertFilterDropdown
        onToggleOpen={(isOpen) => {}}
        initialIsOpen={false}
      />
    </div>
  );
};

export default FilterDropdown;
