import React from 'react';
import { connect } from 'react-redux';
import { changePage } from './../../../store/actions';
import './pagination.scss';

const Pagination = ({pageCount, changePage, page}) => {
    const buttons = (
        ( ) => {
            let pages = [];
            for (let i = 0; i < pageCount; i++) {
                if (i === page) {
                    pages.push(
                        <button key={i} className="pagination__button pagination__button_active" onClick={() => changePage(i)}>{i+1}</button>
                    );
                    continue;
                }
                pages.push(
                    <button key={i} className="pagination__button" onClick={() => changePage(i)}>{i+1}</button>
                ) 
            };
            return pages;
        }
    )()
    return (
        <>
            <div className="pagination">
                {
                    buttons
                }
            </div>
        </>
    )
};

const mapDispatchToProps = {
    changePage,
}

const mapStateToProps = (store) => {
    return {
        page: store.page
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);