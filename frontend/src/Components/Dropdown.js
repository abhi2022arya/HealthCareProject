import React,{useState} from 'react';

function Dropdown()
{
    const[isOpen, setIsOpen] = useState(false);

    function DropdownHandler()
    {
        setIsOpen(!isOpen);
    }


    return(
        <div className="dropdown">
            <button className="dropbtn" onClick={DropdownHandler}>
                Dropdown
            </button>
            { isOpen && (
                <ol className="dropdown-content">
                      <li><a href="#">Item 1</a></li>
                      <li><a href="#">Item 2</a></li>
                      <li><a href="#">Item 3</a></li>
                </ol>      
            )}

        </div>
    );
}

export default Dropdown;