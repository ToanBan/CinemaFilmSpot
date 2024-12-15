import React, {useState} from "react";

export default function Search() {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        if(search.trim()){
            window.location.href=`/search?query=${search}`;
            setSearch('');
        }
    }
    
 

    return (
        <div className="d-flex mb-5 align-items-center justify-content-center">
            <form onSubmit={handleSearch}>
                <input
                    name="search"
                    type="search"
                    className="icon-search form-control search-sm"
                    placeholder="Tìm Kiếm Phim"
                    style={{ width: "500px" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    );
}
