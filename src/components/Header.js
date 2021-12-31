import { useEffect } from 'react';
import '../css/App.css';
import imgHeader from '../data/img/header.png';

export default function Header() {
    const handleClick = (e) => {
        console.log('Button \'' + e.target.innerText + '\' was clicked.');
    }

    const handleResize = () => {
        let headerImage = document.getElementById('imgHeader');
        const headerImageRatio = headerImage.naturalWidth / headerImage.naturalHeight;

        headerImage.width = document.getElementById('imgHeader').parentElement.parentElement.offsetWidth;
        headerImage.height = (document.getElementById('imgHeader').parentElement.parentElement.offsetWidth) / headerImageRatio;
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    })


    useEffect(() => {
        handleResize();
        // window.addEventListener('resize', handleResize);

    }, [])

    return (
        <div className='pb-3 mb-3 component-bg'>
            <img className='' id="imgHeader" src={imgHeader}></img>
            <div className='row'>
                <div className='col-4 px-4'>
                    <button onClick={handleClick} className='btn header-btn-light mt-3 py-1 px-3'>Like</button>
                    <button onClick={handleClick} className='btn header-btn-light mt-3 py-1 px-3'>Share</button>
                    <button onClick={handleClick} className='btn header-btn-light mt-3 py-1 px-3'>. . .</button>
                </div>

                <div className='d-flex justify-content-end col-8 px-4'>
                    <button onClick={handleClick} className='btn header-btn-blue mt-3 py-1 px-3 me-3'>Contact Us</button>
                    <button onClick={handleClick} className='btn header-btn-light mt-3 py-1 px-3'>Send Message</button>
                </div>
            </div>
        </div>
    )
}