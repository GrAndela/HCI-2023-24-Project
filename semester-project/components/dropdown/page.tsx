import React, { useState } from 'react';
import Button from '@/components/button/page'; 

interface DropdownProps {
  showDropdown: boolean;
  onMouseOver: () => void;
  onMouseOut: () => void;
  notifyParent: () => void;
}

const categories = ["Adopt", "Pet Care", "Support Us", "About Us", "Login"]; 

const Dropdown: React.FC<DropdownProps> = ({ showDropdown, onMouseOver, onMouseOut, notifyParent }) => {
  const [clickedButton, setClickedButton] = useState<string>('');

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown-menu ${showDropdown ? 'block' : 'hidden'}`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <ul className="bg-[#e8964d] rounded-lg p-4 flex flex-col items-center">
          {categories.map((name) => (
            <li className="m-2" key={name}>
              <Button
                path={`/${name.toLowerCase().replace(' ', '')}`}
                name={name}
                onClick={notifyParent}
                setClickedButton={setClickedButton}
              >
                {name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
