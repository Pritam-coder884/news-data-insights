import { Select } from "flowbite-react";
import Multiselect from "multiselect-react-dropdown";
import React, { useRef, useState } from "react";

const USelect = ({optionValue,name,refName}) => {
  const [selectedValue,setSelectedValue] = useState()
  

  // console.log("nnn",typeof(name))

  const onSelect = (selectedList, selectedItem) => {
    console.log('select',selectedList)
  };

  // function getSelectedItems(){
  //   console.log("getSelectedItems", multiselectRef.current.getSelectedItems());
  // }

  // getSelectedItems()

  return (
    <div className="w-[20vw]">
      
      <Multiselect
        options={optionValue} // Options to display in the dropdown
        // selectedValues={selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        // onRemove={this.onRemove} // Function will trigger on remove event
        displayValue={name} // Property name to display in the dropdown options
        showCheckbox={true}
        selectionLimit={5}
        placeholder={"select"}
        ref={refName}
      />
    </div>
  );
};

export default USelect;
