import React from 'react'

const BasicInfo_1 = () => {
  return (
    <div>
      <div>
        <input type='text' placeholder='Product Title.....'/>
        <br/><br/>

        <select>
          <option value="" disabled selected hidden>Category</option>
          <option value="australia">Tour</option>
          <option value="canada">Activity</option>
        </select>
        

        <select>
          <option value="" disabled selected hidden>Category Type</option>          
          <option value="scuba diving">Scuba Diving</option>
          <option value="banana ride">Banana Ride</option>
        </select>
        <br/><br/>

        <select>
          <option value="" disabled selected hidden>Duration</option>          
          <option value="1 hour">1 Hour</option>
          <option value="2 hour">2 Hour</option>
        </select>

        <div>Typing Box</div>

        <label htmlFor="highlights">Highlights</label>
        <br/>
        <textarea />

      </div>
    </div>
  )
}

export default BasicInfo_1