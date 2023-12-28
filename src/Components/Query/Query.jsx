import React, { useEffect, useState } from 'react'
import '../Query/Query.css'
import  {Link} from 'react-router-dom'


function Query({post}) {
  
  return (
    <>
      <div class="roletable1 ro1">
                        <div class="status st"> 
                            <i class="fa-solid fa-circle-check"></i>
                        </div>
                        <div class="titile">
                          <Link to={`/${post._id}`} className='link'>
                            <p className='desc'>
                              {post.question}
                            </p>
                          </Link>
                        </div>
                        <div class="slolution">
                            <i class="fa-solid fa-note-sticky"></i>
                        </div>
                        <div class="difficulty df">
                            medium
                        </div>
                
        </div>
    </>
  )
}

export default Query