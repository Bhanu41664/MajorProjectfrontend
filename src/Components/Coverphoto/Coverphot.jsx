import React from 'react'
import '../Coverphoto/Coverphoto.css'
import RankingTable from './RankingTable/RankingTable';

function Coverphot() {
  return (
    <div className="main">
    <div className="mainimage">
        <img src="https://www.netlify.com/images/home/composable-platform-stack-shells.svg" alt="" />
        <div className="h1">
            <h1>

                SQL QUERY PRACTICE PLAFORM
            </h1>
            <p>sql query practice platform is the user friend and easy to use platform where we can able to write quries and execute queries</p>
            <a href="">Practice now</a>
        </div>

    </div>
    <div className="tablecontent">
        <h2>Top students</h2>
        <table className='coverphototable' style={{border:"1px solid white"}}>
        <tr>
                <th>Name</th>
                <th>Rank</th>
                <th>solved problems</th>
            </tr>
            <tr>
                <td>Bhanu</td>
                <td>1</td>
                <td>450</td>
            </tr>
            <tr>
                <td>Bhanu</td>
                <td>1</td>
                <td>450</td>
            </tr>
            <tr>
                <td>Bhanu</td>
                <td>1</td>
                <td>450</td>
            </tr>
            <tr>
                <td>Bhanu</td>
                <td>1</td>
                <td>450</td>
            </tr>
        </table>
    </div>
        
    </div>
 
  )
}

export default Coverphot;