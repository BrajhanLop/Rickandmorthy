import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import Location from './components/Location'
import Pagination from './components/Pagination'
import ResidentInfo from './components/ResidentInfo'

function App() {

  const [location, setlocation] = useState({})
  const [serchvalue, setserchvalue] = useState('')

  const [suggestions, setsuggestions] = useState({})
  const [serchlocation, setserchlocation] = useState('')

  let ran = Math.floor(Math.random() * 126)
  //${ran}
  //console.log(pagenumber);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${ran}`)
      .then(res => setlocation(res.data))


  }, [])



  useEffect(() => {

    //axios.get(`https://rickandmortyapi.com/api/location/${ran}`)
    // .then(res => setlocation(res.data))
    if (serchlocation != '') {
      axios.get(`https://rickandmortyapi.com/api/location?name=${serchlocation}`)
        .then(res => setsuggestions(res.data))
    }
    else {
      setsuggestions({})
    }


  }, [serchlocation])


  const enter = (sug) => {
    //   if (e.which == 13) {
      //     // alert(document.getElementById('input').value)
      
      
      axios.get(`https://rickandmortyapi.com/api/location/${sug.id}`)
      .then(res => setlocation(res.data))
      
      setsuggestions({})
      setserchlocation('')
      setpage(1)
      // document.getElementById('input').value=""


    //   }
    //   axios.get(`https://rickandmortyapi.com/api/location/${document.getElementById('input').value}`)
    //   .then(res => setlocation(res.data))

    // document.getElementById('input').value = ''
    console.log(sug);
  }

  const [page, setpage] = useState(1)

  let residentnumber = 8
  let numberpages = Math.ceil(Number(location.residents?.length) / residentnumber);
  let lastpage = page * residentnumber  // 3 * 8 = 24
  let firstpage = lastpage - residentnumber // 16 - 8 = 8
  let residentpagination = location.residents?.slice(firstpage, lastpage);

  let numbers = []

  for (let i = 1; i <= numberpages; i++) {
    numbers.push(i)

  }



  return (
    <div className="container-fluid">
      <div className="row bgr">
        <div className='col bg'>


        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 className='text-center pt-4 pb-4 text-light fw-bold ts' >Rick and Morty Wiki</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <input id='input' className='d-block m-auto inputb' type="text" placeholder='type a location' onChange={e => setserchlocation(e.target.value)} value={serchlocation} />

            <div className='row'>

              <div className='col au'>
                <div className='div-c-auto'>
                  {
                    suggestions.results?.map((sug,id) => (

                      <div key={id} className='div-aut ps-2' onClick={()=>enter(sug)}> {sug.name}</div>
                    ))

                  }
                </div>

              </div>

            </div>


          </div>
        </div>

        <Location location={location} />


        <div className='row text-light pb-3'>
          <div className='col'>
            <h2>Residents:</h2>
          </div>
        </div>


        <div className='row pb-3 r-cards'>

          {
            residentpagination?.map((resident, id) => (
              <ResidentInfo key={id} resident={resident} />

            ))
          }

        </div>

        <Pagination setpage={setpage} page={page} numberpages={numberpages} numbers={numbers} />


      </div>
    </div>
  )
}

export default App
