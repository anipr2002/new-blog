import React, { useEffect,useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'


const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile',{
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
      setUserInfo(userInfo.username);    
      });
    })
  }, [])

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <>
    <header className='flex justify-between mb-[50px] items-center mt-[20px]'>
          <Link to='/' className='text-inherit text-[1.5rem] no-underline font-bold'>MyBlog</Link>
          <nav className='flex gap-[15px] '>
            {username && (
              <>
                <Link to='/create'>Create new post</Link>
                <a onClick={logout}>Logout</a>
              </>)}

            {!username && (
              <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>)}

          </nav>
        </header>
    </>
  )
}

export default Header