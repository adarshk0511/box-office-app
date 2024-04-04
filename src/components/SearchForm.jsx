import { useState, useEffect } from "react";
import { useSearchStr } from "../lib/useSearchStr";
import CustomRadio from "./CustomRadio";


const SearchForm = ({onSearch}) => {
    const [searchStr, setSearchStr] = useSearchStr();
    const [searchOption, setSearchOption] = useState('shows');

    const onSearchInputChange = ev => {
        setSearchStr(ev.target.value);
      };
    
      const onRadioChange = ev => {
        setSearchOption(ev.target.value);
      };

    const onSubmit = (ev)=> {
        ev.preventDefault();

        const options = {
            q : searchStr,
            searchOption
        }
    onSearch(options);
    }
    
    return (
        <form onSubmit={onSubmit}>
            
            <CustomRadio
                label="Shows"
                name="search-option"
                checked={searchOption === 'shows'}
                value="shows"
                onChange={onRadioChange}
            />

            <CustomRadio
                label="Actors"
                name="search-option"
                    checked={searchOption === 'actors'}
                    value="actors"
                    onChange={onRadioChange}
            />  
           
            
            <button type="submit">Search !!</button>
        </form>
    );
    
};

export default SearchForm;