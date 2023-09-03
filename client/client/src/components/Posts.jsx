import React from 'react'
import { format } from 'date-fns'
const Posts = ({title,summary,cover,content,createdAt,author}) => {
  return (
            <div className='grid grid-cols-2 gap-[20px] mb-[30px]'>
          <div className=''>
            <img src={'http://localhost:400/'+ cover} alt="" />
          </div>

          <div>
              <h2 className='m-0 text-[1.8rem] '>{title}</h2>
              <p className='my-[6px] mx-0 text-[0.7rem] font-bold text-[#aaa] flex gap-[10px]'>
                <a className='text-[#333]'>{author.username} </a>
                <time>{format(new Date(createdAt),'MMM d, yyyy HH:mm')}</time>
              </p>
              <p className='my-[10px] mx-0 leading-[1.4rem] '> {summary} </p>
          </div>

        </div>
  )
}

export default Posts