import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Job_card from './job_card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase_config.js';
import Loading from './Loading.jsx';
import ReactPaginate from 'react-paginate';
import AdminDis from './AdminDis.jsx';

const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPageData, setCurrentPageData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [highlightedId, setHighlightedId] = useState(null); 
    const [filter, setFilter] = useState("all");
    const itemsPerPage = 6;
    const [currDate, setCurrDate] = useState(new Date().toISOString().slice(0, 10));
    const [currTime, setCurrTime] = useState();
     useEffect(() => {
      const timerId = setInterval(() => {
      setCurrTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

    const refs = useRef({}); 

    const fetchFirestoreData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'nexus-updates'));
            const fetchedData = [];

            querySnapshot.forEach((doc) => {
                fetchedData.push({ id: doc.id, ...doc.data() });
            });

            const sortedData = fetchedData.sort((a, b) => {
                const currentDate = new Date();
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);

                const isExpiredA = dateA < currentDate;
                const isExpiredB = dateB < currentDate;

                if (isExpiredA && !isExpiredB) return 1;
                if (!isExpiredA && isExpiredB) return -1;

                return Math.abs(dateA - currentDate) - Math.abs(dateB - currentDate);
            });

            setData(sortedData);
            setFilteredData(sortedData);
            setCurrentPageData(sortedData.slice(0, itemsPerPage));
            setIsLoading(false);
        } catch (error) {
            console.error('Error retrieving Firestore data:', error);
            setIsLoading(false);
        }
    };

    const applyFilter = () => {
        const currentDate = new Date();
        let filtered = data;

        if (filter === "upcoming") {
            filtered = data.filter((item) => new Date(item.date) >= currentDate);
        } else if (filter === "past") {
            filtered = data.filter((item) => new Date(item.date) < currentDate);
        }

        setFilteredData(filtered);
        setCurrentPageData(filtered.slice(0, itemsPerPage)); 
    };

    useEffect(() => {
        fetchFirestoreData();

        const params = new URLSearchParams(window.location.search);
        const sharedId = params.get('id');
        setHighlightedId(sharedId);
    }, []);

    useEffect(() => {
        if (!isLoading && highlightedId) {
            const scrollToElement = () => {
                if (refs.current[highlightedId]) {
                    refs.current[highlightedId].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            };

            scrollToElement();
        }
    }, [highlightedId, isLoading, currentPageData]);

    useEffect(() => {
        applyFilter();
    }, [filter, data]); 

    const handlePageClick = (selectedPage) => {
        const offset = selectedPage.selected * itemsPerPage;
        setCurrentPageData(filteredData.slice(offset, offset + itemsPerPage));
    };

    return (
        <div className='date-filter-time'>
             <span className="date-dis">
             <span>{currDate}</span>
             <div className="filter-buttons filter-buttons-large-srcs">
    <button 
        onClick={() => setFilter("all")} 
        className={`filter-button ${filter === "all" ? "active" : ""}`}
    >
        All
    </button>
    <button 
        onClick={() => setFilter("upcoming")} 
        className={`filter-button ${filter === "upcoming" ? "active" : ""}`}
    >
        Upcoming
    </button>
    <button 
        onClick={() => setFilter("past")} 
        className={`filter-button ${filter === "past" ? "active" : ""}`}
    >
        Past
    </button>
</div>

             <span>{currTime}</span>

               </span>
               <span className="sm-fil-wrap"></span>
               <div className="filter-buttons filter-buttons-sm-scrs">
    <button 
        onClick={() => setFilter("all")} 
        className={`filter-button ${filter === "all" ? "active" : ""}`}
    >
        All
    </button>
    <button 
        onClick={() => setFilter("upcoming")} 
        className={`filter-button ${filter === "upcoming" ? "active" : ""}`}
    >
        Upcoming
    </button>
    <button 
        onClick={() => setFilter("past")} 
        className={`filter-button ${filter === "past" ? "active" : ""}`}
    >
        Past
    </button>
</div>

            <div className="cars-display">
                {isLoading ? (
                    <Loading />
                ) : currentPageData.length > 0 ? (
                    currentPageData.map((item) => (
                        <div
                            key={item.id}
                            ref={(el) => (refs.current[item.id] = el)}
                        >
                            <Job_card obj={item} highlighted={highlightedId === item.id} />

                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

            {!isLoading && filteredData.length > itemsPerPage && (
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    previousClassName={'page-link'}
                    nextClassName={'page-link'}
                    pageClassName={'page-item'}
                    breakClassName={'page-item'}
                    disabledClassName={'disabled'}
                />
            )}
        </div>
    );
};

export default Home;
