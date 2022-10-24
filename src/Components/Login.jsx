import '../assets/styling/Login.css'

const Login = () => {
  return (
    <>
      {/* <h1>{state}</h1> */}
      <div className='row mt-5'>
        <div className='col' />

        <div className='col-md-3 login-div py-4 px-3'>
          <div className='form-group '>
            <input type='text' className='form-control' id='email' placeholder='E-mail Address' />
          </div>
          <div className='pt-4'>
            <input type='text' className='form-control' id='password' placeholder='Password' />
          </div>

          <div className='d-flex pt-4 justify-content-center'>
            <button type='submit' className='login-btn submit'>SUBMIT</button>
          </div>
          <div className='d-flex pt-4 justify-content-center'>
            <button type='submit' className='login-btn signin'>SIGNIN</button>
          </div>
        </div>

        <div className='col' />
      </div>
    </>
  )
}

export default Login
