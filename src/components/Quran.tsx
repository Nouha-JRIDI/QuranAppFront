import { useState, useEffect } from 'react';

interface Surah {
  number: number;
  name: string;
}

const Quran = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [surahs, setSurahs] = useState<Surah[]>([]); // Initialize with an empty array
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isDropdownOpen && surahs.length === 0) {
      fetchSurahs();
    }
  }, [isDropdownOpen]);

  const fetchSurahs = () => {
    setLoading(true);
    fetch('https://api.alquran.cloud/v1/surah')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.data); 
        setSurahs(data.data); 
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="h-10 shadow-bottom flex justify-between">
        <div>
          <h2 onClick={toggleDropdown} className="cursor-pointer">
            الفاتحة
          </h2>
          {isDropdownOpen && (
            <div className="bg-white shadow-lg absolute mt-1 py-2 w-48 h-500 overflow-y-auto">
              <ul>
                {loading && <li className="px-4 py-2 text-gray-500">Loading...</li>}
                {error && <li className="px-4 py-2 text-red-500">Error: {error.message}</li>}
                {!loading && !error && surahs.length > 0 && (
                  surahs.map((surah) => (
                    <li key={surah.number} className="px-4 py-2 hover:bg-gray-100">
                      {surah.number}. {surah.name}
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="flex">
          <h2>الجزء 1</h2>
          <h2>الحزب 1</h2>
          <h2>الصفحة 1</h2>
        </div>
      </div>
    </div>
  );
};

export default Quran;
