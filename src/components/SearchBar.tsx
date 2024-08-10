import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
  return (
    <div className="my-[10px] px-[10px] flex justify-between items-center bg-[#e8f1f1] rounded-[25px] w-[350px]">
      <input className="bg-[#e8f1f1] w-[270px] h-[40px] pr-[20px] border-none rounded-[10px] text-[15px] focus:outline-none" placeholder="ابحث..." />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;
