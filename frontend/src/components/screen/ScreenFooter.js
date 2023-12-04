import React from 'react';

function ScreenFooter(props) {
    return (
        <footer className="footer bg-light text-dark py-4 border-top border-5 mt-auto position-relative pb">
            <div className="container text-center">
                <p>&copy; 2023 Dynamic forms generator. All rights reserved.</p>
                <p>Designed with <i className="fa-regular fa-heart"></i> by <a href="https://github.com/Dutzz23" target="_blank" className="text-dark">Vlad Misaila</a></p>
            </div>
        </footer>
    );
}

export default ScreenFooter;