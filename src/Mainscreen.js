import React from 'react';
import './Mainscreen.css'

function Mainscreen() {
    return (
        <div className='mainscreen'>
            <div className='date-time'>
            <h4>Date and Time</h4>
            <h4>Date:{}</h4>
            <h4>Time:{}</h4>
             </div>

            <div className='buying-selling'>
            <h4>Buying/Selling Contracts</h4>
            <h4>New:05</h4>
            <h4>Expired:11</h4>
</div>

           <div className='up-coming-meeting'>
           <h4>Up-Coming meeting</h4>
            <h4>This week:03/12</h4>
            <h4>Next week:08</h4>
            <h4>Next month:06</h4>
            </div>

             <div className='leasing-service'>
             <h4>Leasing service</h4>
            <h4>Villa & Apartment: 05/12</h4>
            <h4>Warehouse & Shops:07/14</h4>
            <h4>Land:11</h4>
            </div>

            <div className='maintenance-service'>
            <h4>Maintenance service</h4>
            <h4>New:{}</h4>
            <h4>Open:{}</h4>
            <h4>Complete:{}</h4>
</div>
            <div className='revenue-states'>
            <h4>Revenue states</h4>
            <h4>Rent Collection:{}</h4>
            <h4>Sales Brokerage:{}</h4>
            <h4>Building Management:{}</h4>
</div>

        </div>
    )
}

export default Mainscreen
