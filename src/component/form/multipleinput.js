import React from 'react';

const Multipleinput = ({setRegisteredUsers}) => {

    const clearInputs = (event)=> {
            event.target.username.value = '';
            event.target.email.value = '';
            event.target.website.value = '';
            event.target.imagelink.value = '';
            event.target.gender.value = '';
            event.target.course.value = '';
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            name: event.target.username.value,
            email: event.target.email.value,
            website:event.target.website.value,
            imagelink:event.target.imagelink.value,
            gender: event.target.gender.value,
            course: event.target.course.value,
        
        }
        setRegisteredUsers((old) => {
            console.log([...old, data])
            return [...old, data]
        })
        clearInputs(event);
    }
  return <>
    <h1> Student Enrollment Form </h1>
      <form onSubmit={handleSubmit}>
           <div>
              <label htmlFor='username'>Name:</label>
              <input type='text' autoComplete='off'
              name='username' id='usename' required/> 
          </div>
          <div>
              <label htmlFor='email'>Email:</label>
              <input type='text' autoComplete='off'
              name='email' id='email' required/>
          </div>
          <div>
              <label htmlFor='website'>Website:</label>
              <input type='text' autoComplete='off'
              name='website' id='website' required/>
          </div>
          <div>
              <label htmlFor='imagelink'>Image Link:</label>
              <input type='text' autoComplete='off'
              name='imagelink' id='imagelink' required/>
          </div>
          <div className='gender' id='gender'>
              <label htmlFor='gender'>Gender:</label>
              <select name='gender' defaultValue='' required>
                  <option value='' hidden>Select your gender</option>
                  <option value='male'>Male</option>
                  <option value ='female'>Female</option>
                  <option value='other'>Any Other</option>
              </select>

          </div>
          <div className='Course'id='Course'>
              
                  <label htmlFor='course'>Course:</label>
              <select className="Course" name='course' defaultValue='' required>
                  <option value=''>Select your course</option>
                        <option value='html'>HTML</option>
                        <option value='css'>CSS</option>
                        <option value='js'>JavaScript</option>
              </select>
            
          </div>

          <button type='submit'>Enroll Student</button>
          <button type='reset'>Clear</button>
      </form>

  </>;
  
};


export default Multipleinput;
