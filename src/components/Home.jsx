import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import Job_card from './job_card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase_config.js';
import Loading from './Loading.jsx';
import ReactPaginate from 'react-paginate';

const Home = () => {
    const [data, setData] = useState([]);
    const [currentPageData, setCurrentPageData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [highlightedId, setHighlightedId] = useState(null); 
    const itemsPerPage = 6;

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
            setCurrentPageData(sortedData.slice(0, itemsPerPage));
            setIsLoading(false);
        } catch (error) {
            console.error('Error retrieving Firestore data:', error);
            setIsLoading(false);
        }
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

    const handlePageClick = (selectedPage) => {
        const offset = selectedPage.selected * itemsPerPage;
        setCurrentPageData(data.slice(offset, offset + itemsPerPage));
    };

    return (
        <div>
            <div className="cars-display">
                {isLoading ? (
                    <Loading />
                ) : currentPageData.length > 0 ? (
                    currentPageData.map((item) => (
                        <div
                            key={item.id}
                            ref={(el) => (refs.current[item.id] = el)} // Attach ref dynamically
                        >
                            <Job_card obj={item} highlighted={highlightedId === item.id} />
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>

            {!isLoading && data.length > itemsPerPage && (
                <ReactPaginate
                    previousLabel={'<<'}
                    nextLabel={'>>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(data.length / itemsPerPage)}
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
