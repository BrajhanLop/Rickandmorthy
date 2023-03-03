import React, { useEffect } from 'react';
import swal from 'sweetalert';

const Pagination = ({ setpage, page, numberpages, numbers }) => {
    // console.log(numberpages);








    const next = () => {
        if (page === numberpages) {

            swal("¡ Llegaste al final! ", {
                className: 'swal-button',

            });
        }
        else {
            const ul = document.querySelectorAll('.bg-tem')
            // console.log(ul);
            for (let i = 0; i < ul.length; i++) {
                ul[i].classList.remove('act')
                ul[page].classList.add('act')
            }
            setpage(page + 1)
        }

    }


    const prev = () => {
        if (page === 1) {

            swal("¡ Estas en la página 1! ", {
                className: 'swal-button',

            });
        } else {

            const ul = document.querySelectorAll('.bg-tem')
            // console.log(ul);
            for (let i = 0; i < ul.length; i++) {
                ul[i].classList.remove('act')

                ul[page - 2].classList.add('act')


            }



            setpage(page - 1)

        }

    }

    // const actives = (n) => {
    //     setpage(n)
    //    document.getElementById('pg').style.backgroundColor = 'red';

    // }

    const proba = (n) => {

        const ul = document.querySelectorAll('.bg-tem')
        // console.log(ul);
        for (let i = 0; i < ul.length; i++) {
            ul[i].classList.remove('act')

        }


        for (let i = 1; i <= ul.length; i++) {

            if (i === n) {
                ul[n - 1].classList.add('act')
                setpage(n)
            }

        }
        // ul.classList.add('act')
    }

    // useEffect(()=>{

    //         const uli = document.querySelectorAll('.bg-tem')
    //         console.log(uli);
    //             for (let i = 0; i < uli.length; i++) {
    //                 uli[0].classList.add('act')

    //             }

    // },[])


    return (
        <div className='row'>
            <div className='col d-flex justify-content-center gap-5 pb-3'>
                <nav aria-label="Page navigatione">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <button className="page-link bg-lli" onClick={prev}>Prev</button>

                        </li>
                        {
                            numbers.map((n, id) => {
                                if (n === 1) {
                                    return (
                                        <li key={id} className="page-item" ><a className="page-link bg-lli bg-tem act" onClick={() => proba(n)}>{n}</a></li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={id} className="page-item" ><a className="page-link bg-lli bg-tem" onClick={() => proba(n)}>{n}</a></li>
                                    )
                                }

                            }
                            )

                        }




                        <li className="page-item">
                            <a className="page-link bg-lli" onClick={next} >Next</a>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    );
};

export default Pagination;