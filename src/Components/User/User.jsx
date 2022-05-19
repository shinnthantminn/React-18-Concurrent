import React from 'react'
import useApi from '../Helper/useApi'

const User = ({ gender }) => {
  const { data } = useApi(gender)
  console.log(data)

  return (
    <div>
      {data.map((i) => (
        <div key={i.email}>
          <div className="rounded">
            <img src={i.picture.thumbnail} className="rounded" alt="" />
          </div>
          <p>{i.email}</p>
        </div>
      ))}
    </div>
  )
}

export default User
