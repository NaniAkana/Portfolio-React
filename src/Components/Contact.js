import React from 'react'

export const Contact = () => {
    return (
        <div className='homee'>

            <h1>
                <span>C</span>ontact Me
                <hr></hr>
            </h1>
            <div className='cont fadeInUp'>

                <div>
                    <div className='address'>
                        <ul>
                            <li><i className='fa fa-phone'></i><a href='tel:'>+91 9392484316</a></li>
                            <li><i className='fa fa-envelope'></i><a href=''>naniakana567@gmail.com</a></li>
                            <li><i className='fa fa-map-marker'></i><a href=''>Rajahmundry,Andhra Pradesh</a></li>


                        </ul>
                    </div>
                    <div className='icon icon-contact'>
                        <ul>
                            <li><a href={'https://www.instagram.com/nani_akana/'} className='fa fa-instagram' target='_blank'> </a></li>
                            <li><a href={'https://www.instagram.com/nani_akana/'} className='fa fa-facebook' target='_blank'> </a></li>
                            <li><a href={'https://github.com/NaniAkana?tab=repositories'} className='fa fa-github' target='_blank'> </a></li>
                            <li><a href={'https://www.linkedin.com/in/nani-akana/'} className='fa fa-linkedin' data-bs-toggle="tooltip" data-bs-title="Another tooltip"> </a></li>
                        </ul>

                    </div>

                </div>
                <div>
                    <form action='https://www.instagram.com/nani_akana/'>
                        <table>
                            <tr>
                                {/* <td>
                        <label>Name</label>
                    </td> */}
                                <td>
                                    <input type='text' placeholder='enter yout name' pattern='[A-Za-z]{1-50}' required />
                                </td>
                            </tr>
                            <tr>
                                {/* <td>
                        <label>Email</label>
                    </td> */}
                                <td>
                                    <input type='email' placeholder='enter your Email' required />
                                </td>
                            </tr>
                            <tr>
                                {/* <td>
                        <label>Email</label>
                    </td> */}
                                <td>
                                    <input type='number' placeholder='enter your number' required />
                                </td>
                            </tr>
                            <tr>
                                {/* <td>
                        <label>Email</label>
                    </td> */}
                                <td>
                                    <textarea placeholder='Enter your Message:' cols={50} rows={5} required />
                                </td>
                            </tr>
                            <tr>
                                {/* <td>
                        <label>Email</label>
                    </td> */}
                                <td>
                                    <input type='Submit'  />
                                </td>
                            </tr>

                        </table>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;