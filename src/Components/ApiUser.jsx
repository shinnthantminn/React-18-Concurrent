import React, { Suspense } from 'react'
const Lazy = React.lazy(() => import('./User/User'))

const ApiUser = () => {
  return (
    <div className="w-[50%] space-y-10">
      <div className="h-[100px] bg-white rounded px-2 py-2">
        <Suspense fallback={<h1>Please Wait</h1>}>
          <Lazy gender={'male'} />
        </Suspense>
      </div>

      <div className="h-[100px] bg-white rounded px-2 py-2">
        <Suspense fallback={<h1>Please Wait</h1>}>
          <Lazy gender={'female'} />
        </Suspense>
      </div>
    </div>
  )
}

export default ApiUser
